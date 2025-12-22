import React from "react";
import { services } from "../../Data/Mockdata";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-3 py-5">
      <div className="text-center">
        <button className="text-[#800000] font-semibold rounded-sm text-lg text-center bg-white px-3 py-1 mx-auto">
          IT Services
        </button>
        <div>
          <h1 className="text-center text-xl md:text-3xl font-bold py-3">
            Explore Our IT Services
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-xl text-center shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Card Header */}
            <div className="py-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-base font-medium">
                {service.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="relative rounded-md pt-2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 md:h-68 object-cover rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
      <div className="flex items-center justify-center p-8">
        <button className="flex items-center justify-center gap-2 hover:bg-[#800000] cursor-pointer font-medium text-xs sm:text-base hover:text-white transition-all duration-300 px-7 py-3 rounded-full border border-gray-400">
        View More
        <ArrowRight className="h-5 w-5" />
      </button>
      </div>
      

      <hr className="text-gray-400" />
    </div>
  );
};

export default Services;
