import { useState, useEffect, RefObject } from 'react';

/**
 * Custom hook to handle scroll-related functionalities such as 
 * showing a scroll-to-top button, detecting if the user is at the bottom,
 * and tracking the currently active section.
 *
 * @param contentRef - Reference to the scrollable container or null for the window
 * @returns An object containing the states for showing scroll-to-top button, atBottom detection, and active section
 */

const useScrollToContent = (contentRef: RefObject<HTMLElement | HTMLDivElement | null>) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    /**
     * Function to handle scroll events and update state variables accordingly.
     */
    const handleScroll = () => {
      if (contentRef?.current) {
        // Scroll event for the referenced scrollable container
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;

        // Show the scroll-to-top button if scrolled down more than 200px
        setShowScrollToTop(scrollTop > 200);
        
        // Set the atBottom state if scrolled within 5px of the bottom
        const threshold = 5;
        setAtBottom(scrollHeight - scrollTop - clientHeight <= threshold);

        // Determine the currently active section based on scroll position
        const sections = document.querySelectorAll<HTMLElement>('[id]');
        sections.forEach((section) => {
          const { top } = section.getBoundingClientRect();
          if (top < clientHeight / 2 && top > -section.clientHeight / 2) {
            setActiveSection(section.id);
          }
        });
      } else {
        // Scroll event for the window
        setShowScrollToTop(window.scrollY > 200);
        
        // Set the atBottom state if scrolled near the bottom of the document
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        setAtBottom(window.scrollY >= scrollableHeight - 200);
      }
    };

    
    // Attach the scroll event listener to the appropriate element (container or window)
    if (contentRef?.current) {
      const content = contentRef.current;
      content.addEventListener('scroll', handleScroll);
      return () => {
        content.removeEventListener('scroll', handleScroll);
      };
    } else {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [contentRef]);

  return { showScrollToTop, atBottom, activeSection };
};

export default useScrollToContent;