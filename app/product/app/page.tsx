"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ErrorProductPage, RepurchaseProgramPage, CustomerReviewsSection, ProductSection, ReviewsSection } from "@/components";
import { IProductReviewData, IRepurchaseProgram } from "@/types/global";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const barcode = searchParams?.get("barcode");
  const productBarcode = barcode ? barcode.split("/")[0] : "";
  const isRepurchaseProgram = barcode
    ? decodeURIComponent(barcode).includes("/repurchaseprogram")
    : false;

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);
  const [isLoadingReviews, setIsLoadingReviews] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [productReviewData, setProductReviewData] =
    useState<IProductReviewData | null>(null);
  const [repurchaseProgram, setRepurchaseProgram] =
    useState<IRepurchaseProgram | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("most-recent");
  const [totalReviews, setTotalReviews] = useState<number>(0);

  const { name = "", file_path = "" } = productReviewData || {};
  const imageProxyUrl = `/api/image-proxy?path=${encodeURIComponent(file_path || "")}`;

  const fetchProductData = useCallback(async () => {
    setIsLoadingReviews(true);

    const response = isRepurchaseProgram ?
      await fetch(`/api/repurchase?barcode=${encodeURIComponent(productBarcode)}`, {next: {revalidate: 2}})  :
      await fetch(`/api/product-reviews?barcode=${productBarcode}&page=${page}&filter=${selectedFilter}`, {next: {revalidate: 2}});

    if (response.ok) {
      const data = await response.json();
      if(isRepurchaseProgram) {
        setRepurchaseProgram(data);

        if (!data.is_repurchase_program)
          setErrorMessage("Sorry, Repurchase Program is not available for this product.");
      } else {
        setProductReviewData(data);
        setTotalReviews(data.product_reviews.count);

        if (!data.is_product_review_allowed)
          setErrorMessage("Review is not available for this product.");
      }
      if (name) document.title = name;
    } else {
      setProductReviewData(null);
      setRepurchaseProgram(null);
      setErrorMessage("Barcode does not exist.");
    }        

    setIsLoadingReviews(false);                        
  }, [productBarcode, name, isRepurchaseProgram, page, selectedFilter]);

  useEffect(() => {
    if (barcode) {
      fetchProductData();
    } else {
      setErrorMessage("POST is not allowed.");
    }

    setTimeout(() => {
      setIsLoadingPage(false);
    }, 100);
  }, [ 
    barcode, page, selectedFilter, isRepurchaseProgram,
    fetchProductData
  ]);

  return (
    <>
      {isLoadingPage ? null : errorMessage ? (
        <ErrorProductPage message={errorMessage} isLoadingPage={isLoadingPage} />
      ) : isRepurchaseProgram ? (
        <RepurchaseProgramPage
          name={repurchaseProgram?.name || ""}
          order_description={repurchaseProgram?.order_description || ""}
          orderPrice={repurchaseProgram?.orderPrice || 0}
          orderFilePathImages={repurchaseProgram?.orderFilePathImages || []}
          order_maximum_quantity={repurchaseProgram?.order_maximum_quantity || 0}
          is_repurchase_program={repurchaseProgram?.is_repurchase_program || false}
        />
      ) : (
        <div className={`maxContent flex flex-col gap-5 mt-4 sm:mt-28 mb-4 text-blue-primary1 transition-opacity transform duration-500 ease-in-out ${isLoadingPage ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`}>
          <ProductSection imageProxyUrl={imageProxyUrl} productReviewData={productReviewData} />
          <CustomerReviewsSection productReviewData={productReviewData} />
          <ReviewsSection
            productReviewData={productReviewData}
            totalReviews={totalReviews}
            setTotalReviews={setTotalReviews}
            isLoadingReviews={isLoadingReviews}
            setIsLoadingReviews={setIsLoadingReviews}
            page={page}
            setPage={setPage}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
      )}
    </>
  );
}
