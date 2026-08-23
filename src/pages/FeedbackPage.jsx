import React, { useEffect } from 'react';
import EnglishPage from './EnglishPage.jsx';

export default function FeedbackPage() {
  useEffect(() => {
    let attempts = 0;
    const interval = setInterval(() => {
      const loading = document.getElementById('loading-screen');
      const main = document.getElementById('main-content');
      const section = document.getElementById('Feedback');

      if (loading) loading.style.display = 'none';
      if (main) main.classList.remove('hidden');

      if (typeof window.showSection === 'function' && section) {
        window.showSection('Feedback');
        // Ensure the hero background (president image) is visible.
        // Normally GSAP animates it on window.load, but that event
        // has already fired by the time this route mounts, so we
        // set it directly here.
        const bgDesktop = document.getElementById('background-desktop');
        const bgMobile = document.getElementById('background-mobile');
        if (bgDesktop) { bgDesktop.style.transform = 'translateX(0%)'; bgDesktop.style.opacity = '1'; }
        if (bgMobile) { bgMobile.style.transform = 'translateX(0%)'; bgMobile.style.opacity = '1'; }
        section.scrollIntoView({ block: 'start' });
        if (typeof window.initializeFeedbackCarousel === 'function') {
          window.initializeFeedbackCarousel();
        }
        clearInterval(interval);
      }

      attempts++;
      if (attempts > 50) {
        if (section) section.classList.remove('hidden');
        if (typeof window.initializeFeedbackCarousel === 'function') {
          window.initializeFeedbackCarousel();
        }
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <EnglishPage />;
}
