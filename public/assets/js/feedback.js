/**
 * feedback.js  —  Kovalam Panchayat
 * Handles the interactive feedback form:
 *  • Star rating selection
 *  • Feedback type tag selection
 *  • Form submission → saves to Supabase (with localStorage fallback)
 *  • Submitted feedback list rendering
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

async function fetchFeedbacksFromSupabase() {
  let dbData = [];
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/feedback?select=*&order=created_at.desc`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });
    if (response.ok) {
      dbData = await response.json();
    }
  } catch (err) {
    console.warn('Supabase fetch error:', err);
  }

  try {
    const storageKey = 'kovalam-admin-feedback';
    const localSaved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(localSaved) && localSaved.length > 0) {
      const dbIds = new Set(dbData.map((d) => String(d.id)));
      const localOnly = localSaved.filter((item) => !dbIds.has(String(item.id)));
      const combined = [...dbData, ...localOnly];
      combined.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
      return combined;
    }
  } catch (localErr) {
    console.error('Error reading localStorage:', localErr);
  }

  return dbData;
}

function getInitialsText(name) {
  if (!name || name.toLowerCase() === 'anonymous') return '👤';
  const parts = name.trim().split(' ');
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function formatDisplayDate(isoString, isTamil) {
  if (!isoString) return '';
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString(isTamil ? 'ta-IN' : 'en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return isoString;
  }
}

function getTagBadgeColor(type) {
  switch ((type || '').toLowerCase()) {
    case 'good':
    case 'நல்லது':
      return 'bg-teal-100 text-teal-800 border-teal-200';
    case 'poor':
    case 'மோசம்':
      return 'bg-rose-100 text-rose-800 border-rose-200';
    case 'satisfaction':
    case 'satisfactory':
    case 'திருப்தி':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'excellent':
    case 'மிகச்சிறந்தது':
    case 'appreciation':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    default:
      return 'bg-amber-100 text-amber-800 border-amber-200';
  }
}

async function renderSubmittedFeedbacksList() {
  const container = document.getElementById('feedback-items-container');
  const countBadge = document.getElementById('feedback-count-badge');
  if (!container) return;

  const isTamil = window.location.pathname.toLowerCase().startsWith('/ta');

  try {
    const feedbacks = await fetchFeedbacksFromSupabase();
    if (countBadge) {
      countBadge.textContent = `${feedbacks.length} ${isTamil ? 'கருத்துக்கள்' : 'Feedbacks'}`;
    }

    if (feedbacks.length === 0) {
      container.innerHTML = `
        <div class="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          <div class="text-2xl mb-1">💬</div>
          <p class="text-sm font-semibold text-gray-600">${isTamil ? 'இதுவரை கருத்துக்கள் எதுவும் இல்லை.' : 'No feedback submitted yet.'}</p>
          <p class="text-xs text-gray-400 mt-1">${isTamil ? 'முதல் கருத்தைப் பகிர்ந்து தொடங்குங்கள்!' : 'Be the first to share your thoughts!'}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = feedbacks
      .map((item, idx) => {
        const ratingNum = Number(item.rating) || 5;
        const isAnon = item.anonymous || !item.name || item.name.toLowerCase() === 'anonymous';
        const displayName = isAnon ? (isTamil ? 'அநாமதேய குடிமகன்' : 'Anonymous Citizen') : item.name;
        const starsHtml = Array.from({ length: 5 })
          .map((_, i) => `<span class="${i < ratingNum ? 'text-amber-500' : 'text-gray-300'}">${i < ratingNum ? '★' : '☆'}</span>`)
          .join('');
        const tagType = item.feedback_type || item.type;
        const tagHtml = tagType
          ? `<span class="text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getTagBadgeColor(tagType)}">${tagType}</span>`
          : '';

        return `
          <div class="bg-white rounded-xl p-5 border border-gray-200/90 shadow-sm transition-all flex flex-col justify-between group">
            <div>
              <div class="flex items-start justify-between gap-3 mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-sm">
                    ${getInitialsText(displayName)}
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                      ${displayName}
                      ${isAnon ? `<span class="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-normal">${isTamil ? 'குடிமகன்' : 'Citizen'}</span>` : ''}
                    </h4>
                    <p class="text-xs text-gray-400">
                      ${formatDisplayDate(item.created_at, isTamil)}
                    </p>
                  </div>
                </div>

                <div class="flex flex-col items-end gap-1">
                  <div class="flex text-amber-500 text-sm">
                    ${starsHtml}
                  </div>
                  ${tagHtml}
                </div>
              </div>

              <p class="text-sm text-gray-700 leading-relaxed whitespace-pre-line mt-2 pl-1">
                "${(item.message || '').replace(/"/g, '&quot;')}"
              </p>
            </div>

            <div class="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span class="flex items-center gap-1 text-emerald-600 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                ${isTamil ? 'சரிபார்க்கப்பட்ட கருத்து' : 'Verified Submission'}
              </span>
              <span class="text-gray-300">#KovalamPanchayat</span>
            </div>
          </div>
        `;
      })
      .join('');
  } catch (e) {
    console.error('Error rendering feedback list:', e);
  }
}

window.renderSubmittedFeedbacksList = renderSubmittedFeedbacksList;

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
      item.setAttribute('aria-pressed', 'false');
      item.classList.remove('feedback-type-tag-active');
    });
    tag.setAttribute('aria-pressed', 'true');
    tag.classList.add('feedback-type-tag-active');
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
    const anonCheckbox  = container.querySelector('.feedback-checkbox-input');
    const rating        = Number(container.querySelector('.feedback-rating-stars')?.getAttribute('data-rating') || 5);
    const feedbackType  = container.querySelector('.feedback-tags-container')?.getAttribute('data-feedback-type')
      || container.querySelector('.feedback-type-tag-active')?.textContent.trim()
      || 'Good';
    const message = messageInput?.value.trim() || '';
    const isAnon = anonCheckbox?.checked || false;

    if (!message) {
      messageInput?.focus();
      return;
    }

    const language = window.location.pathname.toLowerCase().startsWith('/ta') ? 'ta' : 'en';

    const feedback = {
      id:            window.crypto?.randomUUID?.() || `feedback-${Date.now()}`,
      name:          isAnon ? 'Anonymous' : (nameInput?.value.trim() || ''),
      rating:        rating || 5,
      feedback_type: feedbackType,
      type:          feedbackType,
      message,
      language,
      anonymous:     isAnon,
      created_at:    new Date().toISOString(),
    };

    submitButton.disabled  = true;
    const originalHTML     = submitButton.innerHTML;
    submitButton.textContent = 'Saving…';

    try {
      await insertFeedbackToSupabase(feedback);
    } catch (err) {
      console.warn('Supabase save failed, fallback to local storage:', err);
    }

    // Always persist to local storage for immediate visibility
    try {
      const storageKey = 'kovalam-admin-feedback';
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
      localStorage.setItem(storageKey, JSON.stringify([
        feedback,
        ...saved.filter((item) => String(item.id) !== String(feedback.id)),
      ]));
    } catch (localErr) {
      console.error('Local storage error:', localErr);
    }

    // Reset form
    if (nameInput)     nameInput.value = '';
    if (messageInput)  messageInput.value = '';
    if (anonCheckbox)  anonCheckbox.checked = false;
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

    // Refresh feedback list
    renderSubmittedFeedbacksList();
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
  renderSubmittedFeedbacksList();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    initializeFeedbackCarousel();
    renderSubmittedFeedbacksList();
  });
}
