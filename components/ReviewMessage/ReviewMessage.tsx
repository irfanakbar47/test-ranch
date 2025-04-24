"use client";

import { useState, useEffect, useRef } from "react";

interface ReviewMessageProps {
  review: string;
  index: number;
}

const ReviewMessage = ({ review, index }: ReviewMessageProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reviewElement = reviewRef.current;
    if (reviewElement) {
      const lineHeight = parseInt(window.getComputedStyle(reviewElement).lineHeight, 10);
      const maxHeight = lineHeight * 2;
      const isContentOverflowing = reviewElement.scrollHeight > maxHeight;
      setIsOverflowing(isContentOverflowing);
    }
  }, [review]);

  return (
    <div key={index} className="col-span-1 lg:col-span-9 flex flex-col mt-4">
      <div
        ref={reviewRef}
        className={`text-base break-words whitespace-normal w-full mr-2 ${!isExpanded ? "line-clamp-2" : ""}`}
        dangerouslySetInnerHTML={{ __html: review || "" }}
      />
      {isOverflowing && (
        <div className={`flex justify-center items-center ${!isExpanded ? "mt-4" : "mt-0"}`}>
          <button
            className="text-base font-bold text-green-primary1 hover:opacity-60 transition duration-300 ease-in-out"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "See Less" : "Read More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewMessage;
