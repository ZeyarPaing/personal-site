import { useEffect, useRef } from 'react';

function createObserver() {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      } else {
        // entry.target.classList.remove('animated');
      }
    });
  });
}
const observer = typeof window !== 'undefined' ? createObserver() : undefined;

export function useScrollReveal() {
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      elem.classList.add('before-animate');
      observer?.observe(elem);
    }
    return () => observer?.disconnect();
  }, []);

  return { ref };
}
