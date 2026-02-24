import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Full-page scroll controller — CSS transform approach.
 *
 * Instead of animating window.scrollY (which fights browser scroll physics
 * and OS mouse-wheel inertia), we move a fixed wrapper div with
 * CSS `transform: translateY`. The GPU handles the easing — no rAF loop,
 * no window.scrollTo, no interference from the OS.
 *
 * Returns { currentIndex, goTo } so App can bind them to the wrapper style
 * and pass them down to NavDots.
 */

const TRANSITION_MS = 900; // must match CSS transition duration

export function useFullPageScroll(totalSections: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating.current) return;
      if (index < 0 || index >= totalSections) return;

      isAnimating.current = true;
      setCurrentIndex(index);

      // Unlock after CSS transition finishes + small buffer
      setTimeout(() => {
        isAnimating.current = false;
      }, TRANSITION_MS + 100);
    },
    [totalSections]
  );

  useEffect(() => {
    // On mobile we disable the fullpage engine — CSS handles layout instead
    if (window.matchMedia('(max-width: 768px)').matches) return;

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      // Block wheel entirely — synthesize a keyboard arrow event instead.
      // This guarantees both input methods use the exact same code path,
      // including the isAnimating guard and cooldown.
      const key = e.deltaY > 0 ? 'ArrowDown' : 'ArrowUp';
      window.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
    }

    function onKeyDown(e: KeyboardEvent) {
      if (isAnimating.current) return;
      if (['ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        goTo(currentIndex + 1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        goTo(currentIndex - 1);
      }
    }

    function onTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches[0].clientY;
    }

    function onTouchEnd(e: TouchEvent) {
      if (isAnimating.current) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 50) return;
      goTo(currentIndex + (delta > 0 ? 1 : -1));
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
    // Re-bind on every index change so closures are always fresh
  }, [currentIndex, goTo]);

  return { currentIndex, goTo };
}
