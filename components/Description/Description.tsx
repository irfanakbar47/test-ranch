"use client";

import { useState, useEffect, useRef } from "react";

const Description = ({ description }: { description: string }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const descriptionElement = descriptionRef.current;
    if (descriptionElement) {
      const lineHeight = parseInt(window.getComputedStyle(descriptionElement).lineHeight, 10);
      const maxHeight = lineHeight * 4;
      const isContentOverflowing = descriptionElement.scrollHeight > maxHeight;
      setIsOverflowing(isContentOverflowing);
    }
  }, [description]);

  return (
    <div className="flex flex-col mt-4">
      <div
        ref={descriptionRef}
        className={`prose text-blue-primary1 ${!isDescriptionExpanded ? "line-clamp-4 p-0" : ""}`}
        dangerouslySetInnerHTML={{
          __html: description || "",
        }}
      />
      {isOverflowing && (
        <button
          className={`flex text-base font-bold text-green-primary1 hover:opacity-60 transition duration-300 ease-in-out ${!isDescriptionExpanded ? "mt-4" : "mt-0"}`}
          onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
        >
          {isDescriptionExpanded ? "See Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default Description;
