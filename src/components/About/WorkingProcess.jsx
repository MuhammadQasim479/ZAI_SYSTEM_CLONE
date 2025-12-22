import React from "react";
import { steps } from "../../Data/Mockdata";

const WorkingProcess = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-3 py-10 space-y-8">
      <div className="text-center space-y-2">
        <button className="bg-white text-[#800000] rounded-md px-3 py-1.5 font-semibold">Timeline</button>
        <h1 className="text-xl md:text-3xl font-bold">Working Process</h1>
        <p className="text-[#65676b] text-lg py-3">ZAI SYSTEMS (SMC-PVT) LTD maintains a network of strategic partnerships with top-tier manufacturers, technology companies, and system integrators on a worldwide scale.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className=" md:col-span-1 relative hidden xl:block ">
          <div className="absolute w-[3px] h-full bg-gray-300">
          </div>
        </div>

        <div className="md:col-span-11 space-y-6">
          {steps.map((step, index) => (
        <div
          key={step.id}
          className={`relative flex md:flex-row flex-col-reverse ${
            index % 2 == 0 ? "" : ""
          } bg-white rounded-2xl p-3 items-center gap-8 shadow-sm`}
        > 
          <div className="md:w-3/5 w-full text-left space-y-3 sm:space-y-8 py-4">
            <p className="italic text-gray-700">Step-{step.id}</p>
            <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
              <div className="absolute -left-29 h-[30px] w-[30px] rounded-full bg-[#800000] duration-500 animate-ping opacity-75"></div>
            <div className="absolute border-white border-5 h-[30px] w-[30px] -left-[118px] rounded-full bg-[#800000]"></div>
            <p className="text-gray-600 leading-relaxed text-justify">{step.description}</p>
            <button className="bg-[#800000] text-white px-4 py-2 md:px-8 md:py-4 cursor-pointer rounded-full transition">
              {step.buttonText}
            </button>
          </div>

          <div className="md:w-7/12 w-full">
            <img
              src={step.image}
              alt={step.title}
              className="rounded-3xl w-full h-auto object-cover shadow-md"
            />
          </div>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
