//Sectiov2.tsx
"use client";

import React from "react";
import { CustomImage } from "@/components";
import { solution_suite } from '@/constants';
import { ISectionV2Props } from "./SectionInterface";

const SectionV2 = (props: ISectionV2Props) => {
  const {
    id,
    title,
    description,
    imgUrl,
    imgAlt,
    rowReverse,
    btnLabel,
    containerStyle,
    contentStyle,
    onButtonClick,
    withList,
  } = props;

  return (
    <section
      id={id}
      className={`relative overflow-hidden my-10 lg:my-[5em] ${containerStyle}`}
    >
      <div
        className={`flex maxContent items-center flex-col-reverse gap-y-7 ${
          rowReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } ${contentStyle}`}
      >
        <div
          className={`flex lg:flex-col mb-auto mx-auto gap-y-5 lg:gap-y-10 ${
            withList && "flex-col"
          } ${rowReverse ? "px-[1em] lg:pl-[2em]" : "lg:pr-[2em]"} `}
        >
          <div className="flex flex-col">
            <h3 className="text-xl text-center font-semibold mb-7 text-blue-primary1 ml-[-3px] leading-[24px] capitalize md:text-1xl lg:text-5xl lg:text-left">
              {title}
            </h3>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className={`text-base text-center font-regular text-blue-primary1 mb-5 md:text-lg lg:text-left lg:text-medium lg:mb-0 ${
                withList && "mb-0"
              }`}
            ></p>
            {/* {btnLabel && (
							<Button type='button' label={btnLabel} customStyle='mx-auto lg:ml-0' onClick={onButtonClick} />
						)} */}
          </div>
          {withList && (
            <ul className="flex flex-col gap-y-2 mx-auto lg:mx-0">
              {solution_suite.map((e) =>
                e.list?.map((ee, index) => (
                  <li
                    key={index}
                    className="flex gap-x-3 items-center text-blue-primary1"
                  >
                    <CustomImage
                      src="https://acdn.dnamicro.net/instaprotek/gradient-check-bullet-v2.png"
                      width={24}
                      height={24}
                      alt="Gradient Check Bullet"
                      className="w-auto h-[24px] lg:h-[30px]"
                      priority
                    />
                    {ee.item}
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
        <CustomImage
          src={imgUrl}
          width={660}
          height={550}
          alt={imgAlt}
          style={{ height: `auto`, borderRadius: "20px" }}
          className="w-auto max-w-[340px] lg:w-[660px] lg:max-w-[660px]"
          priority
        />
      </div>
    </section>
  );
};

export default SectionV2;
