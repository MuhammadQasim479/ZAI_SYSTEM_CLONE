import React from 'react'
import aboutimg1 from '../../assets/images/aboutimg1.jpg';

const Herobg = () => {
  return (
    <div className=''>
      <div
        className='relative bg-cover bg-center bg-no-repeat overflow-hidden h-[55vh] md:h-[86vh]  flex items-center justify-center'
        style={{ backgroundImage: `url(${aboutimg1})` }}
      >
        {/* Content */}
        <div className='relative z-20 flex flex-col items-center justify-center gap-3 text-center'>
          <button className='bg-white text-xl font-bold text-[#800000] px-4 py-1 rounded-md shadow-lg'>
            About Zai Systems
          </button>

          <h2 className='text-white text-xl md:text-4xl pt-2 md:pt-22 font-bold leading-snug'>
            We are a Corporate <br /> Business Agency
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Herobg;
