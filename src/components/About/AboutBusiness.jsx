import { Check, CheckCircle, Play, Video } from "lucide-react";
import React from "react";
import  bgabout from "../../assets/images/bgabout.jpg"

export default function BusinessPhilosophy() {


  const statsData = [
  { id: 1, value: "200+", label: "Delivered Projects" },
  { id: 2, value: "15+", label: "Year Experience" },
  { id: 3, value: "300+", label: "Delighted Clients" },
  { id: 4, value: "50+", label: "Team Members" },
  { id: 5, value: "5+", label: "Global Offices" },
  { id: 6, value: "95+", label: "Client Retention Rate" },
];
  return (
    <section className="py-10 w-full max-w-screen-xl mx-auto">
      <div className=" grid md:grid-cols-2 gap-10 items-center px-4">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Our Business Philosophy
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-red-700 mt-2">
            Corporate Business.
          </h3>
          <div className="mt-8">
            <div className="flex items-center gap-2">
              <Check className="text-white bg-[#800000] rounded-full w-7 p-0.5 h-7" />
              <h4 className="font-semibold text-lg text-gray-800">
                A good traveler has no fixed plans
              </h4>
            </div>
            <p className="text-gray-600 mt-2 leading-relaxed text-justify">
              At Zai Systems, we bring combined strategic IT services, software
              solutions and business domain knowledge that facilitates our
              business clients and build their trust in us. The largest corporate
              business agency who is a vast hub of technology bundled with cloud
              computing, web and app development services, that all works for
              betterment of your business growth.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-2">
              <Check className="text-white bg-[#800000] rounded-full w-7 p-0.5 h-7" />
              <h4 className="font-semibold text-lg text-gray-800">Who are we?</h4>
            </div>
            <p className="text-gray-600 mt-2 text-justify leading-relaxed">
              Zai Systems is the leading technology company that was established
              in 2017. It excels in software development, e-commerce, and
              cloud-based solutions. The company was formed with the aim to
              provide end-to-end solutions to the people. Zai Systems innovative
              and research-based approach enables it to deliver excellence and
              financial growth for its customers.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={bgabout}
              alt="Zai Systems"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-[#800000] text-white p-10 rounded-full shadow-lg transition">
                <Play />
              </button>
            </div>
          </div>
        </div>
        

      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 py-10 lg:grid-cols-6 gap-y-6 text-center w-full max-w-7xl">
        {statsData.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center justify-between">
            <h3 className="text-4xl font-bold text-[#800000]">{stat.value}</h3>
            <p className="text-gray-700 text-sm sm:text-lg font-medium mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <hr className="text-gray-400" />
    </section>
  );
}
