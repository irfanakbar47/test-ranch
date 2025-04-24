"use client";

import { FaStar } from "react-icons/fa";

const StarRating = (rating: number, color1: string, color2:string) =>
  Array.from({ length: 5 }, (_, i) => (
    <FaStar key={i} color={i < rating ? color1 : color2} />
  ));

export default StarRating;
