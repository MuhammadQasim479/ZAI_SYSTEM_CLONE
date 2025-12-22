

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Servicespage } from '../Data/Mockdata';

const ServicesDetailpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = Servicespage.find((item) => item.id === Number(id));

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl mb-4">Page not found :)</h1>
        <button
          className="px-4 py-2 rounded-md bg-[#800000] text-white"
          onClick={() => navigate("/")}
        >
          Go To Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10">


      {/* Sections */}
 <div className="space-y-20">
  {service.sections?.map((section, index) => {
    const hasImage = section.img && section.img !== "";
    const isReversed = index % 2 === 1; // true for odd indexes (2nd, 4th, ...)

    const textOrderClass = isReversed ? "order-1 lg:order-2" : "order-1 lg:order-1";
    const imageOrderClass = isReversed ? "order-2 lg:order-1" : "order-2 lg:order-2";

    return (
      <div
        key={section.id}
        className="scroll-up grid lg:grid-cols-2 gap-16 items-center"
      >
        <div className={`${textOrderClass} flex flex-col justify-center space-y-4`}>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            {section.title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            {section.description}
          </p>
          {section.btn && (
            <button className="mt-2 px-5 py-3 bg-[#800000] text-gray-200 rounded-lg hover:bg-[#660000] transition">
              {section.btn}
            </button>
          )}
        </div>

        {/* Image block */}
        {hasImage && (
          <div className={`${imageOrderClass} flex items-center justify-center`}>
            <img
              src={section.img}
              alt={section.title}
              className="  w-full  object-contain"
            />
          </div>
        )}
      </div>
    );
  })}
</div>


    </div>
  );
};

export default ServicesDetailpage;