import React, { useState } from "react";
import abouttabs from "../../assets/images/abouttabs.webp";

const Abouttabs = () => {
  const [activetab, setActiveTabs] = useState("Partner");

  return (
    <div className="py-6">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="text-center spcae-y-2">
          <button className="px-5 py-2 bg-white text-sm sm:lg text-[#800000] font-bold rounded-md">
            BUSINESS PHILOSOPHY
          </button>
          <h1 className="text-lg sm:text-3xl py-3 font-bold">
            Our Strategic Business Approach
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-7 gap-10 pt-8">
          <div className="w-fit h-full sm:col-span-3">
            <img
              src={abouttabs}
              alt="About tabs left image"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col items-start justify-center sm:col-span-4 rounded-md">
  {/* Tabs buttons */}
  <div className="flex gap-5 mb-5">
    {["Partner", "Approach", "Deliver"].map((tab, index) => (
      <button
        key={index}
        onClick={() => setActiveTabs(tab)}
        className={`py-1.5 px-3 cursor-pointer text-xs sm:text-lg rounded-sm transition-all duration-300 ${
          activetab === tab
            ? "bg-[#F5F8FA] text-black shadow-md"
            : "text-gray-500 hover:text-black"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  <div className="pt-2 bg-[#F5F8FA] p-6 rounded-md shadow-sm cursor-pointer">
    {activetab === "Partner" && (
      <div>
        <h1 className="font-semibold text-xl sm:text-2xl mb-2">Partner With Clients</h1>
        <p className="text-gray-500 leading-relaxed">
          Our clients find us a true companion in every business deal. Our
          priority is to provide best practices for your business.
        </p>
      </div>
    )}

    {activetab === "Approach" && (
      <div>
        <h1 className="font-semibold text-xl sm:text-2xl mb-2">Our Approach</h1>
        <p>
          We follow a strategic methodology to ensure the highest quality and
          reliability in every project we deliver.
        </p>
      </div>
    )}

    {activetab === "Deliver" && (
      <div>
        <h1 className="font-semibold text-xl sm:text-2xl mb-2">Deliver</h1>
        <p>
          Our fundamental corporate values aim to provide quality services that
          ultimately lead towards business success.
        </p>
      </div>
    )}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Abouttabs;
