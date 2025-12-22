import React, { useState } from "react";
import { categories, courses } from "../../Data/Mockdata";

const Courseslist = () => {
  const [activefilter, setactivefilter] = useState("All");

  const FilteredCourses =
    activefilter === "All"
      ? courses
      : courses.filter((courses) => courses.category === activefilter);

  return (
    <div className="py-6 mx-auto w-full max-w-7xl px-4">
      <div className="flex items-center justify-center flex-col space-y-2">
        <button className="text-[#800000] bg-white px-4 py-2 rounded-md font-semibold text-center">
          Courses
        </button>
        <h1 className="font-semibold text-xl sm:text-4xl text-center">
          Comprehensive List of Professional Development Courses
        </h1>
      </div>

      <div>
        <section className="py-8 hidden sm:block">
          <div className="filter1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setactivefilter(category)}
                  className={` fadein2 px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activefilter === category
                      ? "bg-[#800000] text-white shadow-lg "
                      : "text-gray-600 hover:text-white  cursor-pointer hover:bg-[#800000]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* courses section start from here...*/}

        <section className="py-8 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-25">
            {FilteredCourses.map((courses, index) => (
              <div
                className="space-y-3 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
                key={index}
              >
                <div className="w-full h-full rounded-full flex justify-center">
                  <img src={courses.img} alt="courses_img" className="w-40" />
                </div>
                <h1 className="text-xl font-bold hover:text-[#800000] cursor-pointer">{courses.title}</h1>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-[#800000] text-white hover:text-black cursor-pointer rounded-md px-7 py-4 transition-all duration-300">
              Explore More Courses
            </button>
          </div>
        </section>
      <hr className="text-gray-400" />

      </div>
    </div>
  );
};

export default Courseslist;
