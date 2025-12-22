import React from "react";

const statsData = [
  { id: 1, value: "200+", label: "Delivered Projects" },
  { id: 2, value: "15+", label: "Year Experience" },
  { id: 3, value: "300+", label: "Delighted Clients" },
  { id: 4, value: "50+", label: "Team Members" },
  { id: 5, value: "5+", label: "Global Offices" },
  { id: 6, value: "95+", label: "Client Retention Rate" },
];

const CompanyStats = () => {
  return (
    <div className="w-full bg-gray-50 py-10 flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 text-center w-full max-w-6xl">
        {statsData.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-[#800000]">{stat.value}</h3>
            <p className="text-gray-700 text-sm sm:text-base font-medium mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyStats;
