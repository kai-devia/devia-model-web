import { useEffect } from 'react';

/**
 * Observes all <section> elements and adds the `is-visible` class
 * when they enter the viewport. Works in tandem with the CSS transition
 * on `section` / `section.is-visible` to produce a smooth "landing" effect
 * even with mandatory scroll-snap.
 */
export function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
