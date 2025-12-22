import React from "react";
import hcm from "../../assets/images/hcm.png";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-10 items-center">
          
          {/* TEXT SECTION */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900">
              Impulse HCM 360°
            </h1>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              Zai Systems Impulse HCM 360° is an innovative and customized Human
              Capital Management (HCM) software solution. It is designed to
              streamline and automate your company’s various HR roles. We offer a
              range of features and tools to help businesses effectively manage
              their workforce, from recruitment and onboarding to payroll,
              performance management, and employee self-service.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="px-6 py-3 bg-[#800000] hover:bg-[#660000] transition text-white rounded-md text-sm sm:text-base font-medium">
                Request a Demo
              </button>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">
              <img
                src={hcm}
                alt="Impulse HCM"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
