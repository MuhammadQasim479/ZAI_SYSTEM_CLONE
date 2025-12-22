import React from "react";
import { ServicesfeaturesData } from "../../Data/Mockdata";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full max-w-screen-xl mx-auto py-16">
         <div className='text-center space-y-4'>
            <button className='bg-[#F5F8FA] text-red px-4 py-2 rounded-md text-[#800000] font-semibold'>What we can do for you?</button>
            <h1 className='text-xl sm:text-3xl font-bold py-2'>Why SMBs, E-commerce & Web Agencies choose us?</h1>
            <p className='text-gray-600 text-lg leading-relaxed mb-4'>Our customized approach is to help your business find the right service, so you can achieve your goals faster and more efficiently</p>
        </div>
      <div className="px-4 grid gap-10 md:grid-cols-3 text-center">
        { ServicesfeaturesData.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center space-y-4 hover:translate-y-1 transition-transform duration-300"
          >
            <div
              className={`w-25 h-25 flex items-center justify-center rounded-full ${feature.bgColor}`}
            >
              {feature.icon}
            </div>
            <h3
            onClick={() => navigate(`/detail/${detail.id}`)}
            className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 text-lg text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
