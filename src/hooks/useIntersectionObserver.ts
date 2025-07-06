import { useEffect } from 'react';

export function useIntersectionObserver(className: string, options?: IntersectionObserverInit) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, options || { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className, options]);
}
