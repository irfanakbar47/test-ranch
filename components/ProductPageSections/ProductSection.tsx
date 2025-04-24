"use client";

import { useState } from "react";
import { CustomImage, Description } from "@/components";
import { IProductReviewData, IReviewQuestion } from "@/types/global";

interface ProductSectionProps {
  imageProxyUrl: string;
  productReviewData: IProductReviewData | null;
}

const ReviewQuestion = ({ question }: { question: IReviewQuestion }) => {
  const avgRatingIndex = Math.abs(Math.round(question.avg_question_rating) - 3);
  const displayOption = question.options[avgRatingIndex === 3 ? 2 : avgRatingIndex];
  const avgRatingPercentage = (question.avg_question_rating / 3) * 100; 

  return (
    <div className="flex flex-col gap-2 lg:max-w-[340px]">
      <h3 className="text-[#0666d3] text-base font-bold">{question.title}</h3>
      <div className="relative w-full lg:w-[340px]">
        <span
          className="flex w-[80%] justify-start items-start text-[#a2a2a2] text-[14px] font-regular"
          style={{ transform: `translateX(${avgRatingPercentage}%)` }}
        >
          {displayOption?.name}
        </span>
        <div className="relative w-[98%] flex justify-center mx-auto mt-4 border-b-[1px] border-[#8a8a8a] opacity-70">
          <svg
            className="absolute"
            width="16"
            height="16"
            viewBox="0 0 30 30"
            style={{
              left: `calc(${avgRatingPercentage}% - 8px)`,
              top: "-3.5px",
              transform: "scaleY(-1)",
              overflow: "visible",
            }}
          >
            <path
              fill={displayOption?.color}
              d="M15 6 Q 15 6, 25 18 A 12.8 12.8 0 1 1 5 18 Q 15 6 15 6z"
            />
          </svg>
        </div>
      </div>
      <div
        className="h-4 rounded-full"
        style={{
          background: `linear-gradient(to right, ${question.options[2].color}, ${question.options[1].color}, ${question.options[0].color})`,
        }}
      ></div>
    </div>
  );
};

const ProductSection = ({ imageProxyUrl, productReviewData }: ProductSectionProps) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const { name, description, avg_rating, review_questions, file_path } = productReviewData || {};

  const handleScroll = () => {
    const element = document.getElementById("product-customer-reviews");
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
        <h1 className="col-span-1 lg:col-start-2 text-center lg:text-left mt-20 mb-12 lg:m-0 text-2xl font-bold">{name}</h1>
        <div className="lg:col-span-1 flex w-full h-auto justify-center items-center">
          {file_path && !imageError && (
            <CustomImage
              src={imageProxyUrl}
              alt={name || ""}
              width={400}
              height={400}
              priority
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <div className="lg:col-span-1 flex flex-col gap-5">
          <div className="flex items-center gap-2 text-lg">
            <h2 className="font-bold">Overall Rating</h2>
            <button className="relative inline-block" onClick={handleScroll}>
              <CustomImage
                src="https://acdn.dnamicro.net/instaprotek/instaprotek-shield-blank.png"
                alt="blank instaProtek shield"
                width={60}
                height={60}
                priority
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                {avg_rating?.toFixed(1) ?? '0.0'}
              </span>
            </button>
          </div>

          {avg_rating && (review_questions?.length ?? 0) > 0 ? (
            review_questions?.map((question: IReviewQuestion, index: number) => (
              <ReviewQuestion key={index} question={question} />
            ))
          ) : (
            <h3 className="text-base font-bold">Not Rated</h3>
          )}

          <div className="flex flex-col">
            <h2 className="text-lg font-bold">Product Description</h2>
            <Description description={description || ""} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
