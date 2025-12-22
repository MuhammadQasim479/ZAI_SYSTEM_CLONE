import React from "react";
import { coreValuesData } from "../../Data/Mockdata";

const CoreValues = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-5">
      <div className="text-center">
        <button className="text-[#800000] font-semibold rounded-sm text-lg bg-white px-3 py-1 mx-auto">
          About
        </button>
        <div>
          <h1 className="text-center text-xl sm:text-3xl font-bold py-3">
            Core Values that Drive Us
          </h1>
          <p className="text-gray-600 text-lg">
            By concentrating on the requirements of our customers and developing
            long-term, mutually beneficial partnerships, we grow as a
            successful, sustainable company that supports and mentors our
            customers throughout the whole lifespan of their solutions and
            products.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-8">
        {coreValuesData.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center space-y-2 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-44 md:h-52 object-contain cursor-pointer"
            />
            <h3 className="text-2xl font-bold text-gray-900 hover:text-[#800000]">{feature.title}</h3>
            <p className="text-[#65676B] leading-6 md:leading-7 text-lg">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
