import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSmoothScroll } from '@/hooks';

const useNavigateAndScroll = () => {
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const scrollTo = useSmoothScroll();
  const router = useRouter();
  const pathname = usePathname() ?? '';

  const navigateAndScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string, selection: any) => {
    event.preventDefault();

    if (selection) {
      const currentUrlWithoutHash = pathname.split('#')[0];
      const selectionUrlWithoutHash = new URL(selection.href, window.location.origin).pathname.split('#')[0];

      if (currentUrlWithoutHash === selectionUrlWithoutHash) {
        scrollTo(targetId);
      } else {
        setScrollTarget(targetId);
        router.push(selectionUrlWithoutHash);
      }
    }
  };

  useEffect(() => {
    if (scrollTarget) {
      const handleScroll = () => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          scrollTo(scrollTarget);
          setScrollTarget(null);
        } else {
          const observer = new MutationObserver(() => {
            const element = document.getElementById(scrollTarget);
            if (element) {
              observer.disconnect();
              scrollTo(scrollTarget);
              setScrollTarget(null);
            }
          });
          observer.observe(document.body, { childList: true, subtree: true });
        }
      };
      setTimeout(handleScroll, 100);
    }
  }, [pathname, scrollTarget, scrollTo]);

  return navigateAndScroll;
};

export default useNavigateAndScroll;