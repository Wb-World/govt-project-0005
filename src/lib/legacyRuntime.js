// Track which runtimes have already been booted (keyed by pageRuntime path)
const _bootedRuntimes = new Set();

// Callbacks waiting for any runtime to be fully ready
const _readyCallbacks = [];
let _isReady = false;

/**
 * Register a callback that fires once ALL scripts for the current page are loaded.
 * If already ready, fires synchronously on next microtask.
 */
export function onBootReady(callback) {
  if (_isReady) {
    Promise.resolve().then(callback);
  } else {
    _readyCallbacks.push(callback);
  }
}

function _signalReady() {
  _isReady = true;
  _readyCallbacks.forEach(fn => { try { fn(); } catch(e) { console.error(e); } });
  _readyCallbacks.length = 0;
}

const libraryScripts = [
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js',
  'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js',
  'https://kit.fontawesome.com/e69c07ce09.js',
];

const scrollTriggerScript =
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';

const commonScripts = [
  '/assets/js/script.js',
  '/assets/js/gallery.js',
  '/assets/js/feedback.js',
];

function loadScript(src) {
  return new Promise((resolve) => {
    const current = document.querySelector(`script[data-react-runtime-src="${src}"]`);
    if (current) {
      if (current.dataset.loaded === 'true') resolve();
      else {
        current.addEventListener('load', resolve, { once: true });
        current.addEventListener('error', resolve, { once: true });
      }
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.dataset.reactRuntimeSrc = src;

    const timer = setTimeout(() => {
      script.dataset.loaded = 'true';
      resolve();
    }, 3500);

    script.addEventListener('load', () => {
      clearTimeout(timer);
      script.dataset.loaded = 'true';
      resolve();
    }, { once: true });

    script.addEventListener('error', () => {
      clearTimeout(timer);
      script.dataset.loaded = 'true';
      resolve();
    }, { once: true });

    document.body.appendChild(script);
  });
}

export function bootLegacyPage(pageRuntime) {
  const revealPage = () => {
    document.getElementById('loading-screen')?.style.setProperty('display', 'none');
    document.getElementById('main-content')?.classList.remove('hidden');
  };

  // If already booted (e.g. FeedbackPage re-mounts EnglishPage), the new DOM still
  // has #loading-screen visible and #main-content hidden by default — reveal immediately.
  if (_bootedRuntimes.has(pageRuntime)) {
    revealPage();
    return undefined;
  }
  _bootedRuntimes.add(pageRuntime);
  // Fallback: show page after 5 s on slow networks instead of blanking forever
  const revealTimeout = window.setTimeout(revealPage, 5000);

  (async () => {
    // Load shared CDN libraries in parallel first, then ScrollTrigger (requires GSAP)
    await Promise.all(libraryScripts.map(loadScript));
    await loadScript(scrollTriggerScript);
    // Load common page scripts in parallel, then the page-specific runtime last
    await Promise.all(commonScripts.map(loadScript));
    await loadScript(pageRuntime);
    // Re-fire lifecycle events so legacy code that listens on DOMContentLoaded / load runs
    document.dispatchEvent(new Event('DOMContentLoaded'));
    window.dispatchEvent(new Event('load'));
    window.clearTimeout(revealTimeout);
    revealPage();
    _signalReady();
  })().catch((error) => {
    window.clearTimeout(revealTimeout);
    revealPage();
    _signalReady();
    console.error('Unable to initialize site interactions:', error);
  });

  return undefined;
}
