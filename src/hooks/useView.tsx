import { useState, useEffect } from 'react';

const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { ...options, threshold: 0.5 } // Customize the threshold if needed
    );

    const element = document.querySelector(options.selector);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [options.selector]);

  return isInView;
};

export default useInView;
