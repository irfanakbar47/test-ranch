import { useEffect } from 'react';

const useScrollToHash = (containerRef: React.RefObject<HTMLDivElement | null>, offset: number) => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          if (containerRef.current && containerRef.current.contains(element)) {
            // Scroll within the container
            scrollToElementWithinContainer(element);
          } else {
            // Scroll in the window
            scrollToElementInWindow(element);
          }
        }
      }
    };

    const scrollToElementWithinContainer = (element: HTMLElement) => {
      const container = containerRef.current;
      if (container) {
        const elementTop = element.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;
        container.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth'
        });
      }
    };

    const scrollToElementInWindow = (element: HTMLElement) => {
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      });
    };

    // Scroll to hash on initial load and hash change
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [containerRef, offset]);
};

export default useScrollToHash;