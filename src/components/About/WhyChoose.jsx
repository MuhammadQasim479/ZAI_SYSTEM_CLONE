import React from "react";
import { processData } from "../../Data/Mockdata";

const WhyChoose = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-5">
      <div div className="text-center">
        <button className="text-[#800000] font-semibold rounded-sm text-center bg-white px-3 py-1 mx-auto">
          Working Process
        </button>
        <div>
          <h1 className="text-center text-xl md:text-3xl font-bold py-3">
            Why Choose Zai Systems ?
          </h1>
          <p className="text-[#65676B]  font-medium leading-6 md:leading-7">
            We have highly skilled engineers with excellent technical knowledge
            and experience in using the latest software standards, tools,
            platforms, frameworks and technologies and we invest continuously in
            training and education, to be able to respond to any new technology
            challenges and demands from our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
