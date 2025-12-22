import React from "react";
import contacts from "../../Data/Mockdata";

const Contactaddress = () => {
  return (
    <section className="py-10">
      <div className="w-full max-w-screen-xl px-4 mx-auto">
        <div className="text-center space-y-3">
          <button className=" font-semibold text-[#800000] bg-white px-3 py-1.5s">
            Contact With Us
          </button>
          <h2 className="text-xl py-2 md:text-3xl font-bold">Our Contact Address Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {contacts.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-7 bg-white hover:transition-all hover:-translate-y-1 duration-300  shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {
                  item.img ? (
                    <img
                    src={item.img}
                    className="w-12 h-12"
                    />
                  )
                  :
                  (
                    <div className="text-[#800000]">{item.icon}</div>
                  )
                }
                <div>
                  <h3 className="font-semibold text-gray-800 text-xl">
                    {item.title}
                  </h3>
                  <p className=" text-gray-500 text-lg hover:text-[#800000] cursor-pointer">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
    
        </div>
      </div>
    </section>
  );
};

export default Contactaddress;
