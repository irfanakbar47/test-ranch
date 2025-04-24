import { useCallback, RefObject } from 'react';
import { scrollToPosition } from '@/utils/scrollUtils';

const useScrollToTop = (contentRef: RefObject<HTMLElement | HTMLDivElement | null> | null) => {
  const scrollBehavior = 'smooth';
  return useCallback(() => {
    if (contentRef?.current) {
      contentRef.current.scrollTo({ top: 0, behavior: scrollBehavior});
    } else {
      scrollToPosition(0, scrollBehavior);
    }
  }, [contentRef]);
};

export default useScrollToTop;