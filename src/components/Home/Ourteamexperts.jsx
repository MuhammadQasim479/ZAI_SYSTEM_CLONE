import React from "react";
import { teamMembers } from "../../Data/Mockdata";
import { User } from "lucide-react";

const Ourteamexperts = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-3 pt-10 ">
      <div className="text-center">
        <button className="text-[#800000] font-semibold rounded-md text-lg text-center bg-white px-3 py-1 mx-auto">
          Our Experts
        </button>
        <div>
          <h1 className="text-center text-xl md:text-3xl font-bold py-3">
            Our Team of Software Experts
          </h1>
          <p className="text-gray-600 text-lg leading-8 pb-10">
            Let our experienced designers and developers find out the perfect
            solution for your brand. We have over 10 years of experience
            building successful software solutions for businesses of all sizes.
            Schedule a consultation to discuss your ideas.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto space-y-14 md:space-y-2 gap-6 py-10">
        {teamMembers.map((team, index) => (
          <div
            className="relative  bg-white rounded-xl shadow-lg p-3"
            key={index}
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src={team.image}
                alt={team.name}
                className="rounded-full h-36 w-36 object-cover border-4 space-y-2 border-gray-200 shadow-md"
              />
            </div>
            <div className="text-center pt-20">
              <h1 className="text-3xl font-bold py-2">{team.name}</h1>
              <h2 className="text-2xl font-bold text-[#800000]">{team.role}</h2>
              <p className="text-[#65676B] font-medium leading-6 pt-4">{team.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteamexperts;
