import { useState } from "react";
import React from "react";
import { tabsData } from "../../Data/Mockdata";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-screen-xl">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side - Tabs */}
          <div className="w-full md:col-span-1 space-y-4">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={`w-full text-left relative transition-all duration-300 ease-in-out ${
                  activeTab === index
                    ? 'bg-gray-50 shadow-md rounded-xl after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-[-20px] after:border-y-[25px] after:border-l-[25px] after:border-y-transparent after:border-l-gray-50'
                    : "hover:bg-white hover:shadow-sm rounded-xl duration-300 border-none"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="p-4">
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      activeTab === index ? "text-gray-800" : "text-gray-700"
                    }`}
                  >
                    {tab.title}
                  </h3>
                  <p
                    className={`text-base tracking-wide ${
                      activeTab === index ? "text-gray-600" : "text-gray-500"
                    }`}
                  >
                    {tab.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="w-full md:col-span-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg h-52 md:h-[600px]">
              {tabsData.map((tab, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    activeTab === index
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={tab.img}
                    alt={tab.title}
                    className="w-full h-52 md:h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <button className="flex items-center gap-1 hover:bg-[#800000] cursor-pointer font-medium text-xs sm:text-base hover:text-white transition-all duration-300 m-12 mr-4 px-4 py-1.5 sm:px-7 sm:py-3 rounded-full border border-gray-400">
                Explore Courses
                 <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6"/>
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}
