import React from "react";
import { featuresData } from "../../Data/Mockdata";
import { useNavigate } from "react-router-dom";

const FeatureDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full container mx-auto px-3 sm:px-34 py-10">
      <div className="text-center">
        <button className="px-4 py-1 font-bold bg-[#F5F8FA] text-[#800000] rounded-md">
          Our Services
        </button>
        <h1 className="text-xl md:text-3xl my-4 font-bold">What We Offer?</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {featuresData.map((feature, index) => (
          <div
            className="shadow-md rounded-3xl p-3 text-center bg-[#F5F8FA] space-y-2 hover:-translate-y-1 transition-all duration-300"
            key={index}
          >
            <div className="flex justify-center cursor-pointer p-3">
              <img src={feature.image} alt="" className="w-16 h-auto" />
            </div>
            <h1 
            onClick={() => navigate(`/feature/${feature.id}`)}
            className="text-xl sm:text-2xl font-semibold cursor-pointer hover:text-[#800000]">
              {feature.title}
            </h1>
            <p className="py-2 text-lg text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureDetail;
