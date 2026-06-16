import { useEffect } from "react";

/**
 * Reveal-on-scroll. Add className "reveal" / "reveal-left" / "reveal-right"
 * to any element; it animates to visible when 15% enters the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right"),
    );

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}
