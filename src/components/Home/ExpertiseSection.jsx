import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const expertiseData = [
  { title: "Custom Software Solutions", percentage: 95 },
  { title: "IT Training and Development", percentage: 90 },
  { title: "Creative and Technical Services", percentage: 95 },
  { title: "Digital Transformation", percentage: 80 },
  { title: "HCM System", percentage: 90 },
];

const ExpertiseSection = () => {
  const [animatedValues, setAnimatedValues] = useState(
    expertiseData.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues((prev) =>
        prev.map((val, i) => {
          const target = expertiseData[i].percentage;
          if (val < target) return val + 1;
          return target;
        })
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-16">
      <div className="text-center space-y-2">
        <button className="text-xl font-semibold bg-white text-[#800000] rounded-sm px-3 py-1">Expertise</button>
      <h2 className="text-xl md:text-4xl font-bold mb-8">Area of Expertise</h2>
      </div>
      <div className="flex flex-wrap gap-12 justify-center max-w-5xl mx-auto">
  {expertiseData.map((item, index) => (
    <div
      key={index}
      className="flex flex-col justify-evenly items-center text-center space-y-3 w-full sm:w-[calc(50%-24px)] md:w-[calc(33.333%-32px)]"
    >
      <div className="w-40 h-40 custom-progress">
        <CircularProgressbar
          value={animatedValues[index]}
          text={`${animatedValues[index]}%`}
          styles={buildStyles({
            textColor: "#000",
            pathColor: "#800000",
            trailColor: "#252525",
            textSize: "18px",
          })}
        />
      </div>
      <p className="text-lg text-center">{item.title}</p>
    </div>
  ))}
</div>
    </div>
  );
};

export default ExpertiseSection;
