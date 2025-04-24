'use client';

import React, { useRef } from 'react';
import { SideNavbar, ScrollToTopButton } from '@/components';
import { termsSections } from '@/data';
import { useScrollToContent, useScrollToHash, useScrollToTop } from '@/hooks';

import LimitedProductGuarantee from './sections/LimitedProductGuarantee';
import OtterBoxProtectionProgram from './sections/OtterBoxProtectionProgram';
import CaseGuarantee from './sections/CaseGuarantee';
import CameraLensGuarantee from './sections/CameraLensGuarantee';
import WarrantyReplacement from './sections/WarrantyReplacement';

const Terms = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { showScrollToTop, atBottom, activeSection } = useScrollToContent(contentRef);
  const scrollToTop = useScrollToTop(contentRef);

  useScrollToHash(contentRef, 20);

  return (
    <main id="terms-and-condition" className="relative min-h-screen overflow-hidden | mt-[10em] | maxContent">

      <header id="terms-header" className="mb-5">
        <h1 className="text-3xl md:text-3.7xl text-blue-primary1 font-bold text-center xl:text-left">
          Retail Terms and Condition
        </h1>
      </header>

      <div className="grid grid-cols-12 mt-10">
        <div id="terms-side-navbar" className="hidden xl:block lg:col-span-3 text-blue-primary1">
          <SideNavbar sections={termsSections} activeSection={activeSection} />
        </div>

        <div
          id="terms-content"
          data-scroll-content
          ref={contentRef}
          className="text-blue-primary1 hide-scrollbar | relative col-span-12 xl:col-span-9 h-screen | overflow-y-scroll scroll-smooth | xl:pl-10 pb-0 lg:pb-40 | text-base"
        >
          {/* Terms and condition's Sections - Start */}
          <div id="limited-product-guarantee" data-main-id="limited-product-guarantee" data-initial-id>
            <LimitedProductGuarantee />
          </div>
          <div id="otterBox-protection-program" data-main-id="otterBox-protection-program">
            <OtterBoxProtectionProgram />
          </div>
          <div id="case-guarantee" data-main-id="case-guarantee">
            <CaseGuarantee />
          </div>
          <div id="camera-lens-guarantee" data-main-id="camera-lens-guarantee">
            <CameraLensGuarantee />
          </div>
          <div id="warranty-replacement" data-main-id="warranty-replacement">
            <WarrantyReplacement />
          </div>
          {/* Terms and condition's Sections - End */}

          <ScrollToTopButton
            showScrollToTop={showScrollToTop}
            atBottom={atBottom}
            scrollToTop={scrollToTop}
            customStyle={`${atBottom ? 'absolute left-[40%] pt-8' : 'fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50'}`}
            customFillStyle={'rounded-full bg-blue-primary2 hover:bg-gray-5 shadow-md hover:shadow-lg transition-colors duration-300 p-4'}
            customChevronStyle={'w-6 h-6 object-contain fill-current text-blue-primary1'}
          />
        </div>

      </div>
    </main>
  );
};

export default Terms;
