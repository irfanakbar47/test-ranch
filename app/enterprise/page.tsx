'use client';

import { useState, useEffect } from "react";
import { Hero, SectionLayoutV1, SectionV2 } from "@/components";
import { winning_solutions } from "@/constants";

export default function Enterprise() {
  const [isSectionV5Visible, setIsSectionV5Visible] = useState(false);
  const [transitionClass, setTransitionClass] = useState('transition-fade-slide-hide');

  const toggleSectionV5 = () => {
    setIsSectionV5Visible(prevState => !prevState);
  };

  useEffect(() => {
    setTransitionClass(isSectionV5Visible ? 'transition-fade-slide-show' : 'transition-fade-slide-hide');
  }, [isSectionV5Visible]);

  return (
    <main className="">
      <Hero
        background="https://acdn.dnamicro.net/instaprotek/instaprotek-enterprise-banner.mp4"
        heroTitle="instaProtek has Strategically Partnered with Industry Leaders to Deliver the most Robust, Flexible, Comprehensive Enterprise Device Fleet Management Program Ever Developed."
        customTitle="mb-10"
        scrollTarget="winning-solutions"
      />
      <SectionLayoutV1
        id="winning-solutions"
        topTitle="Winning Solutions"
        description="Our plans provide flexible differentiators, reduced costs, and the right solutions for your customers’ mobile fleets and their employee-owned devices."
				containerStyle="!py-0 !mt-[3em]"
				contentStyle="!mb-10"
				contentInnerStyle="!pb-0"
      >
        {winning_solutions.map((a) => (
          <SectionV2
            key={a.id}
            id={a.id}
            title={a.label}
            description={a.description}
            btnLabel={a.btnLabel}
            imgUrl={a.imgUrl}
            imgAlt={a.imgAlt}
            rowReverse={a.rowReverse}
            onButtonClick={toggleSectionV5}
          />
        ))}
      </SectionLayoutV1>
    </main>
  );
}