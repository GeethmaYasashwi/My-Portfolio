import { useState, useEffect, useRef } from 'react';

// Intersection Observer Hook for animating elements when they enter the viewport
export default function useIntersectionObserver(options = { threshold: 0.15 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Unobserve after it enters to keep the finished state
        observer.unobserve(currentElement);
      }
    }, options);

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
}