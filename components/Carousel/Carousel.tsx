import React, { ReactNode } from "react";
import Marquee from "react-fast-marquee";

const Carousel = ({ children }: { children: ReactNode }) => (
  <Marquee>
    {children}
  </Marquee>
);

export default Carousel;