"use client";

import React, { useEffect, useRef, useState } from "react";
import { SideNavbar, ScrollToTopButton } from "@/components";
import { enterpriseTermsSections } from "@/data";
import { useScrollToContent, useScrollToHash, useScrollToTop } from "@/hooks";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import dynamic from "next/dynamic";

const Document = dynamic(() => import("react-pdf").then(mod => mod.Document), {
  ssr: false,
  loading: () => null,
});

const Page = dynamic(() => import("react-pdf").then(mod => mod.Page), {
  ssr: false,
  loading: () => null,
});

const EnterpriseTerms = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { showScrollToTop, atBottom, activeSection } = useScrollToContent(contentRef);
  const scrollToTop = useScrollToTop(contentRef);

	useEffect(() => {
    const loadPdfJs = async () => {
      const pdfjs = await import("react-pdf").then(mod => mod.pdfjs);
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;
    };
    loadPdfJs();
  }, []);

  useScrollToHash(contentRef, 20);

  const [numPages, setNumPages] = useState<number | null>(null);
  const [isNotDesktop, setIsNotDesktop] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsNotDesktop(window.innerWidth <= 1040);
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderPDF = (file: string) => {
    const width = isNotDesktop ? contentRef.current?.clientWidth : 1160;
    const height = isNotDesktop ? contentRef.current?.clientHeight : 1600;

    return (
      <div className="flex justify-center items-center w-full h-full pr-5">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => null}
        >
          {numPages &&
            Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={width}
                height={height}
                renderTextLayer={false}
              />
            ))}
        </Document>
      </div>
    );
  };

  return (
    <main
      id="enterprise-terms-and-condition"
      className="relative min-h-screen overflow-hidden | mt-[10em] | w-auto px-3 xl:px-0 lg:max-w-contentDesktop mx-auto"
    >
      <header id="terms-enterprise-header" className="mb-5">
        <h1 className="text-3xl md:text-3.7xl text-blue-primary1 font-bold text-center xl:text-left">
          Enterprise Terms and Conditions
        </h1>
      </header>

      <div className="grid grid-cols-12 mt-10">
        <div className="hidden xl:block lg:col-span-3 text-blue-primary1">
          <SideNavbar
            sections={enterpriseTermsSections}
            activeSection={activeSection}
          />
        </div>

        <div
          id="enterprise-terms-content"
          data-scroll-content
          ref={contentRef}
          className="text-blue-primary1 hide-scrollbar | relative col-span-12 xl:col-span-9 h-screen | overflow-y-scroll scroll-smooth | lg:pb-40 | text-base"
        >
          {/* Enterprise Terms and Conditions Sections - Start */}
          <div
            id="screen-protector-product-guarantee"
            data-main-id="screen-protector-product-guarantee"
            data-initial-id
          >
            <div className="relative overflow-hidden w-full h-full">
              {renderPDF("/pdfs/enterprise_sppg_terms_added_aug_2024.pdf")}
            </div>
          </div>

          <div
            id="protective-case-product-guarantee"
            data-main-id="protective-case-product-guarantee"
          >
            <div className="relative overflow-hidden w-full h-full">
              {renderPDF("/pdfs/enterprise_pcpg_terms_added_aug_2024.pdf")}
            </div>
          </div>

          <div
            id="protective-case-with-screen-protector-product-guarantee"
            data-main-id="protective-case-with-screen-protector-product-guarantee"
          >
            <div className="relative overflow-hidden w-full h-full">
              {renderPDF("/pdfs/enterprise_pcsppg_terms_added_aug_2024.pdf")}
            </div>
          </div>

          <div
            id="education-and-small-business-service-agreement"
            data-main-id="education-and-small-business-service-agreement"
          >
            <div className="relative overflow-hidden w-full h-full">
              {renderPDF("/pdfs/enterprise_esbsa_terms_added_aug_2024.pdf")}
            </div>
          </div>
          {/* Enterprise Terms and Conditions Sections - End */}

          <ScrollToTopButton
            showScrollToTop={showScrollToTop}
            atBottom={atBottom}
            scrollToTop={scrollToTop}
            customStyle={`${
              atBottom
                ? "absolute left-[40%] pt-8"
                : "fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50"
            }`}
            customFillStyle={
              "rounded-full bg-blue-primary2 hover:bg-gray-5 shadow-md hover:shadow-lg transition-colors duration-300 p-4"
            }
            customChevronStyle={
              "w-6 h-6 object-contain fill-current text-blue-primary1"
            }
          />
        </div>
      </div>
    </main>
  );
};

export default EnterpriseTerms;
