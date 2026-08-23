/**
 * feedback.js  —  Kovalam Panchayat
 * Handles the interactive feedback form:
 *  • Star rating selection
 *  • Feedback type tag selection
 *  • Form submission → saves to Supabase (with localStorage fallback)
 *  • Feedback carousel
 */

// ── Supabase config (anon key — safe for the browser) ──────────────────
const SUPABASE_URL = 'https://pcxakufvfewarwrncjerj.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjeGFrdWZ2ZmV3YXJ3cm5jamVyaiIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzg1MjM5MjExLCJleHAiOjIxMDA4MTUyMTF9.KdlfimmAcBWAwZrjv6rctNLAXNJvywJMD45ptUUFGA4';

async function insertFeedbackToSupabase(feedback) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Prefer': 'return=representation',
    },
    body: JSON.stringify({
      name:          feedback.name || null,
      rating:        feedback.rating || null,
      feedback_type: feedback.feedback_type || null,
      message:       feedback.message,
      language:      feedback.language,
      anonymous:     feedback.anonymous,
    }),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Supabase error ${response.status}: ${text}`);
  }
}

// ── Global Event Delegation for Interactive Feedback Form ───────────────
document.addEventListener('click', async (e) => {
  // 1. Star rating
  const star = e.target.closest('.feedback-rating-star');
  if (star) {
    const value = Number(star.dataset.value || 0);
    const container = star.closest('.feedback-form-container') || document;
    const ratingStars = container.querySelectorAll('.feedback-rating-star');
    ratingStars.forEach((item, index) => {
      const selected = index < value;
      item.classList.toggle('active', selected);
      item.textContent = selected ? '★' : '☆';
      item.setAttribute('aria-pressed', String(index + 1 === value));
    });
    container.querySelector('.feedback-rating-stars')?.setAttribute('data-rating', String(value));
    return;
  }

  // 2. Feedback type tags
  const tag = e.target.closest('.feedback-type-tag');
  if (tag) {
    const container = tag.closest('.feedback-form-container') || document;
    const feedbackTypeTags = container.querySelectorAll('.feedback-type-tag');
    feedbackTypeTags.forEach((item) => {
      item.classList.remove('feedback-type-tag-active');
      item.setAttribute('aria-pressed', 'false');
    });
    tag.classList.add('feedback-type-tag-active');
    tag.setAttribute('aria-pressed', 'true');
    container.querySelector('.feedback-tags-container')?.setAttribute('data-feedback-type', tag.textContent.trim());
    return;
  }

  // 3. Submit button
  const submitButton = e.target.closest('.feedback-submit-btn');
  if (submitButton) {
    e.preventDefault();
    const container = submitButton.closest('.feedback-form-container') || document;
    const nameInput     = container.querySelector('.feedback-form-input');
    const messageInput  = container.querySelector('.feedback-form-textarea');
    const rating        = Number(container.querySelector('.feedback-rating-stars')?.getAttribute('data-rating') || 0);
    const feedbackType  = container.querySelector('.feedback-tags-container')?.getAttribute('data-feedback-type')
      || container.querySelector('.feedback-type-tag-active')?.textContent.trim()
      || 'Appreciation';
    const message = messageInput?.value.trim() || '';

    if (!message) {
      messageInput?.focus();
      return;
    }

    const language = window.location.pathname.toLowerCase().startsWith('/ta') ? 'ta' : 'en';

    const feedback = {
      name:          nameInput?.value.trim() || '',
      rating:        rating || null,
      feedback_type: feedbackType,
      message,
      language,
      created_at:    new Date().toISOString(),
    };

    submitButton.disabled  = true;
    const originalHTML     = submitButton.innerHTML;
    submitButton.textContent = 'Saving…';

    try {
      await insertFeedbackToSupabase(feedback);
    } catch (err) {
      console.warn('Supabase save failed, saving to local storage fallback:', err);
      try {
        const storageKey = 'kovalam-admin-feedback';
        const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
        localStorage.setItem(storageKey, JSON.stringify([
          { ...feedback, id: window.crypto?.randomUUID?.() || `feedback-${Date.now()}` },
          ...saved,
        ]));
      } catch (localErr) {
        console.error('Local storage fallback error:', localErr);
      }
    }

    // Reset form
    if (nameInput)     nameInput.value = '';
    if (messageInput)  messageInput.value = '';
    const ratingStars = container.querySelectorAll('.feedback-rating-star');
    ratingStars.forEach((s) => {
      s.classList.remove('active');
      s.textContent = '☆';
      s.setAttribute('aria-pressed', 'false');
    });
    container.querySelector('.feedback-rating-stars')?.setAttribute('data-rating', '0');

    submitButton.innerHTML = '✓ Feedback Shared!';
    window.setTimeout(() => {
      submitButton.innerHTML = originalHTML;
      submitButton.disabled  = false;
    }, 2500);
  }
});

// ── Feedback Carousel Init ──────────────────────────────────────────────
function initializeFeedbackCarousel() {
  const feedbackCarousel = document.querySelector('.feedback-carousel-track');
  const feedbackCards    = document.querySelectorAll('.feedback-card');
  const feedbackPrevBtn  = document.querySelector('.feedback-carousel-prev');
  const feedbackNextBtn  = document.querySelector('.feedback-carousel-next');

  if (!feedbackCarousel || feedbackCards.length === 0) return;

  let feedbackCurrentIndex = 0;
  const feedbackCardWidth  = 320;
  const visibleCards       = 3;
  let autoScrollInterval;

  function updateFeedbackCarousel() {
    feedbackCarousel.style.transform = `translateX(-${feedbackCurrentIndex * feedbackCardWidth}px)`;
  }

  function feedbackNextSlide() {
    feedbackCurrentIndex = feedbackCurrentIndex < feedbackCards.length - visibleCards
      ? feedbackCurrentIndex + 1
      : 0;
    updateFeedbackCarousel();
  }

  function feedbackPrevSlide() {
    feedbackCurrentIndex = feedbackCurrentIndex > 0
      ? feedbackCurrentIndex - 1
      : feedbackCards.length - visibleCards;
    updateFeedbackCarousel();
  }

  function startAutoScroll()   { autoScrollInterval = setInterval(feedbackNextSlide, 3000); }
  function restartAutoScroll() { clearInterval(autoScrollInterval); startAutoScroll(); }

  feedbackNextBtn?.addEventListener('click', () => { feedbackNextSlide(); restartAutoScroll(); });
  feedbackPrevBtn?.addEventListener('click', () => { feedbackPrevSlide(); restartAutoScroll(); });

  feedbackCarousel.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
  feedbackCarousel.addEventListener('mouseleave', () => startAutoScroll());

  startAutoScroll();

  document.querySelectorAll('.feedback-video').forEach(video => {
    video.addEventListener('mouseenter', () => video.play());
    video.addEventListener('mouseleave', () => video.pause());
  });
}

window.initializeFeedbackCarousel = initializeFeedbackCarousel;

if (document.readyState !== 'loading') {
  initializeFeedbackCarousel();
} else {
  document.addEventListener('DOMContentLoaded', initializeFeedbackCarousel);
}
