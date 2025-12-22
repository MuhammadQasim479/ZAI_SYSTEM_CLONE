import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import swiper1 from "../../assets/images/slider/swiper1.webp";
import {MoveLeft, MoveRight } from "lucide-react";

const Slider1 = () => {
  return (
    <div className="mt-5 relative">
     <div
        className="custom-prev hidden lg:block absolute left-3 top-1/2 -translate-y-1/2 z-50 
       hover:bg-[#800000] border border-gray-50/20 p-4 hover:-translate-x-1 hover:duration-300 transition-all duration-300 hover:text-white text-white rounded-full cursor-pointer"
      >
        <MoveLeft size={30} className="hover:text-gray-50" />
      </div>
      <div className="custom-next hidden lg:block absolute right-3 top-1/2 -translate-y-1/2 z-500 hover:translate-x-1 transition-all duration-300  hover:bg-[#800000] border border-gray-50/20 p-4 rounded-full cursor-pointer text-white hover:text-gray-200">
      <MoveRight size={30} className="hover:text-gray-50" />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full h-full">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            className="swiper"
          >
            <SwiperSlide>
              <div
                className="relative text-white flex items-center justify-center w-full 
                 h-[60vh] sm:h-[70vh] md:h-full 
                 rounded-lg shadow-md"
              >
                <img
                  className="w-full h-full object-cover"
                  src={swiper1}
                  alt="Slide 1"
                />
                <div className="absolute bg-black/80 inset-0" />
                <div className="absolute text-center px-4 py-2 space-y-4">
                  <h2 className="font-bold text-xl md:text-5xl leading-snug">
                    Quadient Inspire Services
                  </h2>
                  <h4 className="text-sm md:text-xl font-semibold">
                    Your Trusted Partner in Building Powerful Customer
                    Communications Management (CCM) Solution
                  </h4>
                  <p className="w-full md:w-10/12 mx-auto text-gray-300 text-base md:text-2xl leading-8 text-center md:leading-10">
                    Increase engagement and streamline communication workflows
                    with our expertise in Robotic Process Automation (RPA),
                    Process Mining, Web Scraping, and Document Processing
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
               <div
                className="relative text-white flex items-center justify-center w-full 
                 h-[50vh] sm:h-[70vh] md:h-full 
                 rounded-lg shadow-md"
              >
                <img
                  className="w-full h-full object-cover"
                  src={swiper1}
                  alt="Slide 1"
                />
                <div className="absolute bg-black/80 inset-0" />
                <div className="absolute text-center px-4 py-2 space-y-4">
                  <h2 className="font-bold text-xl md:text-5xl leading-snug">
                    Development Teams
                  </h2>
                  <h4 className="text-sm md:text-2xl font-semibold">
                    Staff Up Quickly with Our Cost-Effective IT Staffing Solutions
                  </h4>
                  <p className="w-full md:w-10/12 mx-auto text-gray-300 text-base md:text-2xl leading-8 md:leading-10">
                   Zai Systems provides flexible, pre-vetted developers for both onsite and virtual needs.
                   We build strong partnerships to connect you with the right talent, maximizing your project's success.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
               <div
                className="relative text-white flex items-center justify-center w-full 
                 h-[50vh] sm:h-[70vh] md:h-full 
                 rounded-lg shadow-md"
              >
                <img
                  className="w-full h-full object-cover"
                  src={swiper1}
                  alt="Slide 1"
                />
                <div className="absolute bg-black/80 inset-0" />
                <div className="absolute text-center px-4 py-2 space-y-4">
                  <h2 className="font-bold text-xl md:text-5xl leading-snug">
                    Process Automation
                  </h2>
                  <h4 className="text-sm md:text-xl font-semibold">
                    Innovative Process Automation Solutions
                  </h4>
                  <p className="w-full md:w-10/12 mx-auto text-gray-300 text-base md:text-2xl leading-8 md:leading-10">
                     Our team of automation specialists leverages leading technologies like RPA and Process
                     Mining to optimize your workflows, improve accuracy, and free up valuable resources.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative text-white flex items-center justify-center w-full 
                 h-[50vh] sm:h-[70vh] md:h-full 
                 rounded-lg shadow-md"
              >
                <img
                  className="w-full h-full object-cover"
                  src={swiper1}
                  alt="Slide 1"
                />
                <div className="absolute bg-black/80 inset-0" />
                <div className="absolute text-center px-4 py-2 space-y-4">
                  <h2 className="font-bold text-xl md:text-5xl leading-snug">
                    CallMiner Solutions
                  </h2>
                  <h4 className="text-sm md:text-xl font-semibold">
                   Your Certified CallMiner Partner for Maximized Value
                  </h4>
                  <p className="w-full md:w-10/12 mx-auto text-gray-300 text-base md:text-2xl leading-8 md:leading-10">
                    Zai Systems empowers you to leverage the full spectrum of CallMiner's capabilities,
     unlocking actionable insights to enhance customer experience and drive business growth.
                  </p>
                </div>
              </div>
            </SwiperSlide>  
            <SwiperSlide>
              <div
                className="relative text-white flex items-center justify-center w-full 
                 h-[50vh] sm:h-[70vh] md:h-full 
                 rounded-lg shadow-md"
              >
                <img
                  className="w-full h-full object-cover"
                  src={swiper1}
                  alt="Slide 1"
                />
                <div className="absolute bg-black/80 inset-0" />
                <div className="absolute text-center px-4 py-2 space-y-4">
                  <h2 className="font-bold text-xl md:text-5xl leading-snug">
                    Legacy Migration
                  </h2>
                  <h4 className="text-sm md:text-xl font-semibold">
                   Modernize Your Legacy Applications with .NET Migration
                  </h4>
                  <p className="w-full md:w-10/12 mx-auto text-gray-300 text-base md:text-2xl leading-8 md:leading-10">
                    Breathe new life into your outdated VFP, VB6, and Classic ASP applications. Zai Systems
     offers expert migration services to .NET, ensuring improved security, performance, and a competitive edge for your business.
                  </p>
                </div>
              </div>
            </SwiperSlide> 
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
