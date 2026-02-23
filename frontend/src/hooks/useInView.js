import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isInView]
 * Once the element enters the viewport it stays "in view" (one-shot).
 * threshold: 0–1, how much of the element must be visible
 * rootMargin: offset before triggering (e.g. "-80px" triggers 80px before element enters)
 */
export function useInView(options = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
