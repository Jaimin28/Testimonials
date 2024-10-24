import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Card({ review }) {
  return (
    <div className="flex flex-col  md:relative">
      <div className="absolute top-[-5rem] z-10 mx-auto ">
        <img
          className="w-[120px] h-[120px] rounded-full z-25 aspect-square left-[10px] "
          src={review.image}
        />
        <div className="w-[120px] h-[120px] bg-violet-500 rounded-full absolute top-[-10px] z-[-10] left-[10px]"></div>
      </div>
      <h2 className="font-bold text-xl tracking-wide mt-8 text-center">
        {review.name}
      </h2>
      <p className="capitalize text-xs text-violet-400 text-center">
        {review.job}
      </p>
      <div className="mt-5  text-violet-600 mx-auto">
        <FaQuoteLeft className="" />
      </div>
      <p className="text-center text-slate-500 mt-2">{review.text}</p>
      <div className="mt-5 text-violet-500 mx-auto">
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
