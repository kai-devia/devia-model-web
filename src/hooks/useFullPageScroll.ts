import { useEffect, useRef } from 'react';

/**
 * Full-page scroll controller.
 * Intercepts wheel, keyboard and touch events and animates
 * the scroll with a custom easing curve — no CSS scroll-snap.
 * Each scroll gesture moves exactly one section.
 */

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

const DURATION = 950; // ms — tweak for feel

export function useFullPageScroll() {
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    if (!sections.length) return;

    function goTo(index: number) {
      if (index < 0 || index >= sections.length) return;
      if (isAnimating.current) return;

      isAnimating.current = true;
      currentIndex.current = index;

      const targetY =
        sections[index].getBoundingClientRect().top + window.scrollY;
      const startY = window.scrollY;
      const distance = targetY - startY;
      let startTime: number | null = null;

      function step(ts: number) {
        if (!startTime) startTime = ts;
        const elapsed = ts - startTime;
        const progress = Math.min(elapsed / DURATION, 1);

        window.scrollTo(0, startY + distance * easeInOutCubic(progress));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          isAnimating.current = false;
        }
      }

      requestAnimationFrame(step);
    }

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      if (isAnimating.current) return;
      goTo(currentIndex.current + (e.deltaY > 0 ? 1 : -1));
    }

    function onKeyDown(e: KeyboardEvent) {
      if (isAnimating.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goTo(currentIndex.current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goTo(currentIndex.current - 1);
      }
    }

    function onTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches[0].clientY;
    }

    function onTouchEnd(e: TouchEvent) {
      if (isAnimating.current) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 50) return;
      goTo(currentIndex.current + (delta > 0 ? 1 : -1));
    }

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);
}
