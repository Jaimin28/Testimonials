import React from "react";
import Testinomials from "./componets/Testinomials";
import reviews from "./data";

function App() {
  return (
    <div className="bg-gray-300 w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">Our Testimonials</h1>
      <div className="w-36 h-1 bg-violet-500 rounded-md mt-2"></div>
      <Testinomials reviews={reviews} />
    </div>
  );
}

export default App;
