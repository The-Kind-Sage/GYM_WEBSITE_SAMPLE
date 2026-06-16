import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `end` over `duration` ms once the element scrolls
 * into view. Returns the ref to attach and the current display value.
 */
export function useCountUp(end: number, duration = 2000, decimals = 0) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out
        setValue(end * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  return { ref, display: value.toFixed(decimals) };
}
