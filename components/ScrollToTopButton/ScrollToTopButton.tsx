import React from 'react';
import { CustomImage } from '@/components';
import { ScrollToTopButtonType } from './ScrollToTopButtonType';

const ScrollToTopButton = (props: ScrollToTopButtonType) => {
	const { 
		showScrollToTop, 
		atBottom, 
		scrollToTop, 
		customStyle, 
		customFillStyle, 
		customChevronStyle 
	} = props;

  if (!showScrollToTop) return null;

  return (
    <div id="scroll-to-top" className={customStyle}>
      <button
        onClick={scrollToTop}
        className={customFillStyle}
      >
				<CustomImage 
          src="https://acdn.dnamicro.net/instaprotek/chevron-up-svg.svg"
          alt="Scroll to Top"
          width={50}
          height={50}
          className={customChevronStyle}
          priority
				/>
      </button>
    </div>
  );
};

export default ScrollToTopButton;