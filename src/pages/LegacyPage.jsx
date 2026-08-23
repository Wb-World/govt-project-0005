import { useEffect, useRef } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import englishHtml from '../../En/index.html?raw';
import tamilHtml from '../../Ta/index.html?raw';
import { saveFeedback } from '../storage/feedback.js';

const pages = {
  en: { html: englishHtml, lang: 'en' },
  ta: { html: tamilHtml, lang: 'ta' },
};

const loadedHeadAssets = new Set();

function normalizePath(value) {
  return value
    .replaceAll('../assets/', '/assets/')
    .replaceAll('..\\assets\\', '/assets/')
    .replaceAll('/assets\\', '/assets/');
}

function cloneNodeWithAttributes(node) {
  const clone = document.createElement(node.tagName.toLowerCase());
  [...node.attributes].forEach((attr) => clone.setAttribute(attr.name, normalizePath(attr.value)));
  clone.textContent = node.textContent;
  return clone;
}

function loadScript(original) {
  return new Promise((resolve) => {
    const script = cloneNodeWithAttributes(original);
    script.dataset.reactLegacyRuntime = 'true';
    script.onload = resolve;
    script.onerror = resolve;
    document.body.appendChild(script);
    if (!script.src) resolve();
  });
}

async function loadHeadAssets(doc) {
  for (const node of doc.head.querySelectorAll('link, style, script')) {
    const key = normalizePath(node.outerHTML);
    if (loadedHeadAssets.has(key)) continue;
    loadedHeadAssets.add(key);

    const clone = cloneNodeWithAttributes(node);
    clone.dataset.reactLegacyHead = 'true';
    document.head.appendChild(clone);

    if (clone.tagName === 'SCRIPT' && clone.src) {
      await new Promise((resolve) => {
        clone.onload = resolve;
        clone.onerror = resolve;
      });
    }
  }
}

function rewriteAssetPaths(root) {
  root.querySelectorAll('[href], [src], [style]').forEach((node) => {
    if (node.hasAttribute('href')) {
      const href = normalizePath(node.getAttribute('href'));
      if (href.includes('../Ta/index.html')) node.setAttribute('href', '/ta');
      else if (href.includes('../En/index.html')) node.setAttribute('href', '/en');
      else node.setAttribute('href', href);
    }

    if (node.hasAttribute('src')) node.setAttribute('src', normalizePath(node.getAttribute('src')));
    if (node.hasAttribute('style')) node.setAttribute('style', normalizePath(node.getAttribute('style')));
  });
}

function addVijayImage(root) {
  const titleWrap = root.querySelector('header .leading-tight');
  if (!titleWrap || titleWrap.parentElement.querySelector('[data-vijay-title-image]')) return;

  const image = document.createElement('img');
  image.src = '/vijay.jpeg';
  image.alt = 'Vijay';
  image.dataset.vijayTitleImage = 'true';
  image.className = 'h-12 md:h-16 w-12 md:w-16 object-cover rounded-full';
  titleWrap.insertAdjacentElement('afterend', image);
}

function fixTamilDesktopNav(root, language) {
  if (language !== 'ta') return;
  const navRow = root.querySelector('section.hidden.lg\\:block > div.flex');
  if (!navRow) return;
  navRow.style.flexWrap = 'wrap';
  navRow.style.rowGap = '0.5rem';
}

function rewriteFeedbackLinks(root, language, navigate) {
  root.querySelectorAll('a[href="#Feedback"], [onclick*="Feedback"]').forEach((element) => {
    if (element.tagName === 'A') {
      element.setAttribute('href', `/${language}/Feedback`);
    }
    element.addEventListener(
      'click',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        const mobileMenu = root.querySelector('#mobileMenu');
        if (mobileMenu) mobileMenu.classList.add('hidden');
        const overlay = root.querySelector('#overlay');
        if (overlay) overlay.classList.add('hidden');

        navigate(`/${language}/Feedback`);
      },
      true,
    );
  });

  // Intercept the Users Feedback button link for SPA navigation
  root.querySelectorAll('a[href="/users-feedback"]').forEach((element) => {
    element.addEventListener(
      'click',
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        navigate('/users-feedback');
      },
      true,
    );
  });
}

function showOnlySection(root, section) {
  if (!root) return;

  // Always hide loading screen if present
  const loadingScreen = root.querySelector('#loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
    loadingScreen.classList.add('hidden');
  }

  // Always reveal main-content wrapper
  const mainContent = root.querySelector('#main-content');
  if (mainContent) {
    mainContent.classList.remove('hidden');
  }

  if (!section) return;

  const targetId = section.toLowerCase() === 'feedback' ? 'Feedback' : section;
  const target = root.querySelector(`#${CSS.escape(targetId)}`);
  if (!target) return;

  root.querySelectorAll('.content').forEach((node) => node.classList.add('hidden'));
  target.classList.remove('hidden');

  if (targetId === 'Feedback') {
    window.initializeFeedbackCarousel?.();
  }

  setTimeout(() => {
    target.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, 50);
}

function attachFeedbackStorage(root, language) {
  const button = root.querySelector('.feedback-submit-btn');
  if (!button) return undefined;

  const onSubmit = async () => {
    const activeStar = [...root.querySelectorAll('.feedback-rating-star.active')].at(-1);
    const activeType = root.querySelector('.feedback-type-tag-active');
    const anonymous = root.querySelector('.feedback-checkbox-input')?.checked || false;
    const name = root.querySelector('.feedback-form-input')?.value?.trim() || '';
    const message = root.querySelector('.feedback-form-textarea')?.value?.trim() || '';

    try {
      await saveFeedback({
        language,
        name: anonymous ? 'Anonymous' : name,
        rating: activeStar?.dataset.value || '',
        type: activeType?.textContent?.trim() || '',
        anonymous,
        message,
      });
      button.dataset.feedbackSaved = 'true';
    } catch (error) {
      console.error('Unable to save feedback', error);
      button.dataset.feedbackSaved = 'false';
    }
  };

  button.addEventListener('click', onSubmit);
  return () => button.removeEventListener('click', onSubmit);
}

async function runLegacyScripts(scripts) {
  const originalDocumentListener = document.addEventListener.bind(document);
  const originalWindowListener = window.addEventListener.bind(window);

  document.addEventListener = (type, listener, options) => {
    if (type === 'DOMContentLoaded' && typeof listener === 'function') {
      queueMicrotask(() => listener.call(document, new Event('DOMContentLoaded')));
      return undefined;
    }
    return originalDocumentListener(type, listener, options);
  };

  window.addEventListener = (type, listener, options) => {
    if (type === 'load' && typeof listener === 'function') {
      queueMicrotask(() => listener.call(window, new Event('load')));
      return undefined;
    }
    return originalWindowListener(type, listener, options);
  };

  try {
    for (const script of scripts) await loadScript(script);
  } finally {
    document.addEventListener = originalDocumentListener;
    window.addEventListener = originalWindowListener;
  }
}

export default function LegacyPage() {
  const { language = 'en', section } = useParams();
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const scriptsReadyRef = useRef(false);
  const page = pages[language];

  // ─── Effect 1: language change ───────────────────────────────────────────
  useEffect(() => {
    if (!page || !rootRef.current) return undefined;

    const root = rootRef.current;
    scriptsReadyRef.current = false;
    let cancelled = false;
    let cleanupFeedback;

    const doc = new DOMParser().parseFromString(page.html, 'text/html');
    const scripts = [...doc.body.querySelectorAll('script')];
    scripts.forEach((script) => script.remove());

    document.title = doc.title || 'Kovalam Panchayat';
    document.documentElement.lang = page.lang;
    document.body.className = doc.body.className;
    root.innerHTML = normalizePath(doc.body.innerHTML);
    rewriteAssetPaths(root);
    addVijayImage(root);
    fixTamilDesktopNav(root, language);
    rewriteFeedbackLinks(root, language, navigate);
    cleanupFeedback = attachFeedbackStorage(root, language);

    loadHeadAssets(doc).then(async () => {
      if (cancelled) return;
      await runLegacyScripts(scripts);
      if (cancelled) return;

      // Always unhide main-content and hide loading-screen
      const ls = root.querySelector('#loading-screen');
      if (ls) {
        ls.style.display = 'none';
        ls.classList.add('hidden');
      }
      const mc = root.querySelector('#main-content');
      if (mc) {
        mc.classList.remove('hidden');
      }

      root.classList.remove('is-loading');
      root.setAttribute('aria-busy', 'false');

      window.initializeFeedbackCarousel?.();
      scriptsReadyRef.current = true;

      const currentSection = root.dataset.pendingSection || section;
      if (currentSection) {
        showOnlySection(root, currentSection);
        delete root.dataset.pendingSection;
      }

      window.AOS?.refreshHard?.();
    });

    return () => {
      cancelled = true;
      scriptsReadyRef.current = false;
      cleanupFeedback?.();
      document.querySelectorAll('[data-react-legacy-runtime="true"]').forEach((node) => node.remove());
      document.body.className = '';
      root.innerHTML = '';
    };
  }, [language, navigate, page]);

  // ─── Effect 2: section change ─────────────────────────────────────────────
  useEffect(() => {
    if (!rootRef.current) return;

    if (scriptsReadyRef.current) {
      showOnlySection(rootRef.current, section);
    } else {
      if (section) {
        rootRef.current.dataset.pendingSection = section;
      } else {
        delete rootRef.current?.dataset.pendingSection;
      }
    }
  }, [section]);

  if (!page) return <Navigate to="/en" replace />;
  return (
    <>
      <style>{`
        .legacy-root { min-height: 100vh; }
        .legacy-root.is-loading #main-content { display: none !important; }
        .legacy-root.is-loading #loading-screen {
          position: fixed;
          inset: 0;
          display: flex !important;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          z-index: 9999;
          opacity: 1 !important;
        }
        .legacy-root.is-loading #loading-screen img {
          width: 8rem;
          height: 8rem;
          display: block;
        }
      `}</style>
      <div key={language} ref={rootRef} className="legacy-root is-loading" aria-busy="true" />
    </>
  );
}