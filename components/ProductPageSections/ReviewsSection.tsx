"use client";

import { useState, useCallback, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { ReviewMessage, StarRating } from "@/components";
import { IProductReviewData, IReview } from "@/types/global";
import { formatDate } from "@/utils/formatUtils";

interface ReviewsSectionProps {
  productReviewData: IProductReviewData | null;
  totalReviews: number;
  isLoadingReviews: boolean;
  page: number;
  selectedFilter: string;
  setTotalReviews: (count: number) => void;
  setIsLoadingReviews: (loading: boolean) => void;
  setPage: (page: number) => void;
  setSelectedFilter: (filter: string) => void;
}

const ReviewsSection = ({ 
  productReviewData, 
  totalReviews, 
  isLoadingReviews, 
  page,
  selectedFilter,
  setTotalReviews, 
  setIsLoadingReviews,
  setPage,
  setSelectedFilter,
}: ReviewsSectionProps ) => {
  const [filteredReviews, setFilteredReviews] = useState<IReview[]>([]);
  const [displayedReviewsCount, setDisplayedReviewsCount] = useState<number>(10);
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);

  const { product_reviews } = productReviewData || {};

  const filterReviews = useCallback(() => {
    if (!product_reviews?.data.length) return [];

    setTotalReviews(product_reviews.count);
    let sortedReviews = [...product_reviews.data];

    if (selectedFilter !== "most-recent") {
      const starRating = parseInt(selectedFilter.split(" ")[0], 10);
      sortedReviews = sortedReviews.filter(
        (review) => review.rating === starRating
      );
    }

    return sortedReviews;
  }, [selectedFilter, product_reviews, setTotalReviews]);

  useEffect(() => {
    const updatedFilteredReviews = filterReviews();
    setFilteredReviews(updatedFilteredReviews);
  }, [selectedFilter, filterReviews]);

  useEffect(() => {
    if (!showAllReviews) return;

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        !isLoadingReviews
      ) {
        setIsLoadingReviews(true);

        setTimeout(() => {
          setPage(page + 1);
          setDisplayedReviewsCount((prev) => prev + 5);
          setIsLoadingReviews(false);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAllReviews, isLoadingReviews, filteredReviews, setIsLoadingReviews, page, setPage]);

  const loadMoreReviews = () => {
    setShowAllReviews(true);
  };

  const reviewsToDisplay = showAllReviews
    ? filteredReviews.slice(0, displayedReviewsCount)
    : filteredReviews.slice(0, 5);

  const renderReviews = () => {
    if (reviewsToDisplay.length === 0 && !isLoadingReviews) {
      return (
        <div className="flex justify-center items-center my-16">
          <span className="font-bold">No reviews available.</span>
        </div>
      );
    }

    return (
      <ul className="flex flex-col gap-4">
        {reviewsToDisplay.map((review, index) => (
          <li
            key={index}
            className="border-b border-[#8a8a8a] pt-4 pb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 xl:gap-8 items-start lg:items-center mx-4">
              <div className="flex col-span-1 justify-start lg:justify-center items-center">
                <span className="flex justify-center items-center rounded-full border bg-green-primary1 text-white w-[60px] h-[60px] text-2xl font-bold">
                  {review.customer_first_name.charAt(0).toUpperCase()}
                </span>
              </div>

              <div className="col-span-1 lg:col-span-2">
                <h3 className="text-lg font-bold leading-tight break-words whitespace-normal w-full mb-2">
                  {review.review_title}
                </h3>
                <div className="flex items-center">
                  {StarRating(review.rating, "#00D27A", "#e5e5e5")}
                </div>
                <div className="flex flex-col font-normal">
                  <span className="text-base">
                    {review.customer_last_name},{" "}
                    {review.customer_first_name.charAt(0).toUpperCase()}.
                  </span>
                  <span className="text-xs">{formatDate(review.created_date)}</span>
                </div>
              </div>
              <ReviewMessage review={review.review_message} index={index} />
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="flex justify-between items-center text-base font-regular border-b border-[#8a8a8a]">
        <div className="relative flex text-blue-primary1">
          <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <select
            value={selectedFilter}
            onChange={(e) => {
              setSelectedFilter(e.target.value)
              setShowAllReviews(false);
              setDisplayedReviewsCount(5);
            }}
            className="cursor-pointer appearance-none border-none bg-transparent outline-none px-6 py-2 ml-2"
          >
            <option value="most-recent">Most recent</option>
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={`${star}`}>{`${star} star`}</option>
            ))}
          </select>
        </div>
        <span className="text-green-primary1 mr-2">{totalReviews} reviews</span>
      </div>

      {renderReviews()}

      <div className="flex justify-end items-end">
        <button
          className={`text-base text-green-primary1 font-bold transition duration-300 ease-in-out ${!showAllReviews ? 'hover:opacity-60' : ''}`}
          onClick={loadMoreReviews}
          disabled={showAllReviews}
        >
          {!showAllReviews && totalReviews > 5
            ? "See All Reviews"
            : isLoadingReviews && displayedReviewsCount < totalReviews
            ? "Loading..."
            : ""}
        </button>
      </div>
    </>
  );
};

export default ReviewsSection;
