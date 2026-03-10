'use client';

import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.style.opacity = '';
      el.classList.add('animate-fade-in-up');
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
          clearTimeout(fallback);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 80px 0px' }
    );

    // Fallback: reveal after 1.5s if observer never fires
    const fallback = setTimeout(() => {
      if (el.style.opacity === '0') {
        reveal();
        observer.unobserve(el);
      }
    }, 1500);

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return ref;
}
