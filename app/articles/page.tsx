"use client";

import { CustomImage } from "@/components";
import { articles } from "@/data";
import Link from "next/link";
import { useState } from "react";

export default function AllArticles() {
  const [onHover, setOnHover] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setOnHover(index);
  };

  const handleMouseOut = () => {
    setOnHover(null);
  };

  return (
    <main className="maxContent flex flex-col mt-[10em] gap-y-10">
      <h1 className="text-3.7xl text-blue-primary1 font-bold px-3 lg:px-0">
        News & Articles
      </h1>
      <div className="maxArticle flex flex-wrap items-center gap-5 sm:justify-center">
        {articles.map((article, index) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="relative flex w-full h-full max-w-[398px] max-h-[263px] rounded-[20px] overflow-hidden sm:max-w-[425px] sm:max-h-[280px]"
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            <CustomImage
              src={article.imgUrl}
              alt={article.imgAlt}
              width={424}
              height={280}
              className={`w-full object-cover m-auto transition-transform duration-500 ease-in-out ${
                onHover === index ? "scale-105" : ""
              }`}
              priority
            />
            <div className="flex flex-col justify-end px-4 py-5 gap-y-1 absolute bg-card-overlay w-full h-full cursor-pointer">
              <p className="text-gray-5 text-xs font-medium lg:font-normal lg:text-sm">
                {article.date}
              </p>
              <h2 className="text-white text-sm font-medium leading-[22px] lg:font-normal lg:leading-[24px] lg:text-base">
                {article.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
