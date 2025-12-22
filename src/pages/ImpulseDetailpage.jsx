import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { featuresData } from "../Data/Mockdata";

const ImpulseDetailpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const feature = featuresData.find((f) => f.id === Number(id));

  if (!feature) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-4">Feature not found.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#600000] transition"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const { title, sections } = feature;

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10">
      <div className="text-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-[#800000]">
          {title}
        </h1>
        <div className="mt-5 text-sm text-gray-600 flex justify-center items-center gap-2">
          <button
            onClick={() => navigate("/")}
            className="text-gray-500 font-medium hover:text-[#600000] cursor-pointer"
          >
            Home
          </button>
          <span className="text-gray-400">•</span>
          <span>Impulse 360°</span>
        </div>
      </div>
      <hr className="text-gray-400 py-4" />
      {sections && sections.length > 0 && (
        <div className="space-y-4">
          {sections.map((section, index) => (
            <React.Fragment key={index}>
            <div
              key={index}
              className={`scroll-up grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2":""}>
                <h2 className="text-3xl font-semibold text-center sm:text-left text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-lg text-justify">
                  {section.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="p-4">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full min-h-44 mx-auto mb-4 rounded-lg "
                  />
                </div>
              </div>
            </div>
            {
                index !== section.length -1 &&(
                    <hr className="border-gray-400"/>
                )
            }
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
export default ImpulseDetailpage;
