import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const supportsObserver =
  typeof window !== 'undefined' && 'IntersectionObserver' in window;

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -60px 0px',
    triggerOnce = true,
  } = options;
  const [isVisible, setIsVisible] = useState(!supportsObserver);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !supportsObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

export function stagger(index: number, step = 0.08, cap = 6) {
  return { transitionDelay: `${Math.min(index, cap) * step}s` };
}
