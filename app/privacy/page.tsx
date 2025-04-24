'use client';

import React, { useRef } from 'react';
import { ScrollToTopButton } from '@/components';
import { useScrollToContent, useScrollToTop } from '@/hooks';

import PrivacyPolicyContent from '@/app/privacy/sections/PrivacyPolicyContent';
import CaliforniaPrivacyPolicy from '@/app/privacy/sections/CaliforniaPrivacyPolicy';

const Privacy = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { showScrollToTop, atBottom } = useScrollToContent(contentRef);
  const scrollToTop = useScrollToTop(contentRef);

  return (
    <main id="privacy-policy" className="relative min-h-screen | mt-[10em] | px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">

      <header id="terms-header" className="mb-5">
        <h1 className="text-3.7xl text-blue-primary1 font-bold text-center xl:text-left">Privacy Policy</h1>
      </header>

      <div
        id="privacy-content"
        className="text-base gap-y-5 mt-5 text-blue-primary1"
      >
        <PrivacyPolicyContent />
        <CaliforniaPrivacyPolicy />
        <ScrollToTopButton
          showScrollToTop={showScrollToTop}
          atBottom={atBottom}
          scrollToTop={scrollToTop}
          customStyle={`left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50 ${atBottom ? 'relative pt-8' : 'fixed bottom-8'}`}
          customFillStyle={'rounded-full bg-blue-primary2 hover:bg-gray-5 shadow-md hover:shadow-lg transition-colors duration-300 p-4'}
          customChevronStyle={'w-6 h-6 object-contain fill-current text-blue-primary1'}
        />
      </div>

    </main>
  );
};

export default Privacy;