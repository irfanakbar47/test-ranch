"use client";

import { useState, useEffect } from "react";
import { StarRating } from "@/components";
import { IProductReviewData } from "@/types/global";

const CustomerReviewsSection = ({ productReviewData }: { productReviewData: IProductReviewData | null }) => {
  const [customerReviewData, setCustomerReviewData] = useState<IProductReviewData | null>(null);

  useEffect(() => {
    if (productReviewData && !customerReviewData) {
      setCustomerReviewData(productReviewData);
    }
  }, [productReviewData, customerReviewData]);

  const { rating_percentage, product_reviews } = customerReviewData || {};

  const renderCustomerReviews = () =>
    Array.from({ length: 5 }, (_, i) => {
      const starRating = 5 - i;
      const percentage = rating_percentage?.[`rating_${starRating}` as keyof typeof rating_percentage] ?? 0;

      return (
        <div className="flex gap-x-4 items-end mt-1" key={starRating}>
          <div className="flex w-[30%]">
            {StarRating(starRating, "#00D27A", "#e5e5e5")}
          </div>
          <div className="relative w-[70%]">
            <div className="absolute text-xs" style={{ left: `${percentage}%`, bottom: "17px" }}>
              {!percentage ? "0" : percentage}%
            </div>
            <div className="w-full h-[15px] rounded-full overflow-hidden border border-gray-300">
              <div className="bg-gradient-to-r from-[#00D27A] to-[#50E468] h-full rounded-full" style={{ width: `${!percentage ? "0" : percentage}%` }} />
            </div>
          </div>
        </div>
      );
    });

  return (
    <>
      <div id="product-customer-reviews" className="bg-gray-5/[0.4] p-3">
        <h2 className="text-lg font-medium">
          Customer Reviews{" "}
          <span className="text-base font-regular text-green-primary1 ml-3">
            {product_reviews?.count || 0} reviews
          </span>
        </h2>
      </div>

      <div className="grid gap-y-5 max-w-[400px] px-4 py-5">
        {renderCustomerReviews()}
      </div>
    </>
  );
};

export default CustomerReviewsSection;
