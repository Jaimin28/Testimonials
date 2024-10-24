import React, { useState } from "react";
import Card from "./Card";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Testinomials({ reviews }) {
  const [index, SetIndex] = useState(0);

  function lefthandler() {
    if (index - 1 < 0) {
      SetIndex(reviews.length - 1);
    } else {
      SetIndex(index - 1);
    }
  }
  function righthandler() {
    if (index >= reviews.length - 1) {
      SetIndex(0);
    } else SetIndex(index + 1);
  }
  function submithandler() {
    let random = Math.floor(Math.random() * reviews.length);
    SetIndex(random);
  }

  return (
    <div className="w-[500px]  min-h-[380px] bg-white mt-10 rounded-md m-10 p-10 hover:shadow-md transition-all duration-700 flex flex-col ">
      <Card review={reviews[index]} />
      <div className="flex   justify-center items-center gap-3 mt-5 text-violet-600 text-xl">
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={lefthandler}
        >
          <FaAngleLeft />
        </button>
        <button onClick={righthandler}>
          <FaAngleRight />
        </button>
      </div>
      <div className="text-center mt-5">
        <button
          onClick={submithandler}
          className=" hover:bg-violet-500 px-4 py-1 rounded-md bg-violet-400 text-white font-semibold"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testinomials;
