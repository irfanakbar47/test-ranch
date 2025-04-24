import { useCallback, useMemo } from 'react';
import { scrollToPosition } from '@/utils/scrollUtils';

const DEFAULT_OFFSET = 100; 

const useSmoothScroll = (offset: number = DEFAULT_OFFSET) => {
  const memoizedOffset = useMemo(() => offset, [offset]);

  const scrollTo = useCallback((targetId: string, behavior: ScrollBehavior = 'smooth') => {
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - memoizedOffset;

      scrollToPosition(offsetPosition, behavior);
    }
  }, [memoizedOffset]);

  return scrollTo;
};

export default useSmoothScroll;