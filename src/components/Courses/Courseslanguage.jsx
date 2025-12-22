import React from "react";
import { Frontendpages } from "../../Data/Mockdata";
import { Link } from "react-router-dom";

const Courseslanguage = () => {
  return (
    <section className="py-4">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="text-center space-y-4 py-4">
          <button className="text-[#800000] bg-white px-4 rounded-md py-2 font-semibold text-center">
            Courses
          </button>
          <h1 className="text-xl sm:text-3xl font-semibold">Full Stack Web Development</h1>
          </div>
          <section>
            <h1 className="text-lg sm:text-4xl font-semibold py-8">Front-End Languages</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Frontendpages.map((frontend, index) => (
                <div className=" rounded-4xl shadow-2xl" key={index}>
                  <div className="w-full h-full">
                    <img
                      src={frontend.img}
                      alt="frontend_images"
                      className=" w-full rounded-t-3xl"
                    />
                    <a
                      target=""
                      href="https://docs.google.com/forms/d/e/1FAIpQLSenssk7l7IpxMPIbX2HWXYhNi4ntz1HSyDLO-ereA0ypTCFpg/viewform"
                    >
                      <h1 className="P-4 text-xl py-2 text-center font-semibold cursor-pointer hover:text-[#800000]">
                        Register Now
                      </h1>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-4">
            <h1 className="text-lg sm:text-4xl font-semibold py-8 hidden sm:block">Backend Languages</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {Frontendpages.map((frontend, index) => (
                <div className=" rounded-4xl shadow-2xl" key={index}>
                  <div className="w-full h-full">
                    <img
                      src={frontend.img}
                      alt="frontend_images"
                      className=" w-full rounded-t-3xl"
                    />
                    <a
                      target=""
                      href="https://docs.google.com/forms/d/e/1FAIpQLSenssk7l7IpxMPIbX2HWXYhNi4ntz1HSyDLO-ereA0ypTCFpg/viewform"
                    >
                      <h1 className="P-8 py-2 text-xl text-center font-semibold cursor-pointer hover:text-[#800000]">
                        Register Now
                      </h1>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
      </div>
    </section>
  );
};

export default Courseslanguage;
