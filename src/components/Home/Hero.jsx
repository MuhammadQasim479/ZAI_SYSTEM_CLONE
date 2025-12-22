import React from "react";
import ziahero from "../../assets/images/ziahero.png";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-3">
      <h1 className="text-center pt-6 text-base py-5 mt-3 sm:text-3xl font-bold w-full  lg:w-5/12 mx-auto tracking-wider">
        Software Development Solutions IT Services & Certified Trainings
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-18 py-6">
        <div className="md:col-span-1 sm:w-1/2 md:w-full mx-auto h-full ">
          <img
            src={ziahero}
            alt="heri-img"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 w-full">
          <div>
            <h1 className="text-lg md:text-3xl font-bold">Welcome To</h1>
            <span className="text-base md:text-2xl text-[#800000] font-bold">
              <Typewriter
                words={["ZAI SYSTEMS (SMC-PRIVATE) LIMITED"]}
                loop={0}
                cursor
                typeSpeed={80}
                deleteSpeed={10}
                delaySpeed={1500}
              />
            </span>
          </div>
          <div className="text-justify">
            <div className="py-4">
              <p className="py-2 text-[#65676b] text-base leading-7 tracking-tighter">
                Zai Systems (SMC-PVT) Ltd is a multi-dimensional IT company
                specializing in product and project-based solutions for business
                clients worldwide. We provide comprehensive set of IT Trainings
                and development solutions, including, Customer Relationship
                Management System (CRMS), Human Resource Management System
                (HRMS), Enterprise Resource Planning Management System (ERPMS),
                Data Center solutions, Mobile & Web App Development, UI/UX
                Design, Custom Development, Digital Marketing, Content Writing,
                Graphic Designing, Blockchain Development, and E-commerce
                Consultation.
              </p>
              <p className=" text-[#65676b] text-base tracking-tighter leading-7">
                We are proud to be one of the Top Leading Desktop and Web-Based
                Software Solution Providers; we design software solutions that
                assist our local and international clients in outperforming the
                competition and remaining ahead in today's competitive business
                marketplace.
              </p>
              <h1 className="text-xl font-semibold py-2">
                Founder & CEO of Zai Systems
              </h1>
              <p className=" text-[#65676b] text-base tracking-tighter">
                Owais Ahmad Khan has an entrepreneurial mindset and exceptional
                management skills, with over 18 years of experience in the IT
                industry. He has worked with renowned clients and has received
                several awards for his innovative solutions.
              </p>
            </div>
          </div>
          <Link to="/about">
            <button className="text-lg bg-[#800000] cursor-pointer text-gray-200 px-4 py-2 rounded-md leading-7">
              More About Us
            </button>
          </Link>
        </div>
      </div>
      <hr className="text-gray-400" />
    </div>
  );
};

export default Hero;
