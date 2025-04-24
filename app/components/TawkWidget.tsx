'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const TawkWidget = () => {
  const searchParams = useSearchParams();
  const barcode = searchParams?.get("barcode");
  const isRepurchaseProgram = barcode ? decodeURIComponent(barcode).includes('/repurchaseprogram') : false;

  useEffect(() => {
    if (isRepurchaseProgram) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/5d76a9e7eb1a6b0be60bc9c1/default';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    // Function to scroll to a hash fragment after a delay
    const scrollToHash = (offset = 0, delay = 1000) => {
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementTop - offset,
              behavior: 'smooth',
            });
          }
        }
      }, delay);
    };

    // Function to reset scroll position to the top without scrolling visibly
    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };

    // Reset scroll position and scroll to hash
    const resetScrollAndScrollToHash = () => {
      resetScrollPosition();
      scrollToHash(50, 1000);
    };

    // Add event listeners for page load and hash changes
    window.addEventListener('load', resetScrollAndScrollToHash);
    window.addEventListener('hashchange', resetScrollAndScrollToHash);

    return () => {
      // Cleanup event listeners on component unmount
      window.removeEventListener('load', resetScrollAndScrollToHash);
      window.removeEventListener('hashchange', resetScrollAndScrollToHash);
      document.body.removeChild(script);
    };
  }, [isRepurchaseProgram]);

  return null; // No visible UI, just adding the script and scroll behavior
};

export default TawkWidget;
