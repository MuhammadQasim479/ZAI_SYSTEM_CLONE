import React from 'react'
import { processData, steps } from '../../Data/Mockdata'

const WhyChosedot = () => {
  return (
    <div className='w-full h-full max-w-5xl mx-auto'>
        <div className="relative flex justify-between items-center h-full min-h-60  bg-[#F5F8FA] rounded-2xl shadow-md">
        <div className="absolute top-25 left-1/2 -translate-x-1/2  w-full max-w-3xl mx-auto h-[6px] bg-red-800"></div>
        {processData.map((step) => (
          <div key={step.id} className="flex-1 text-center  relative">
             <h3 className="py-6 text-lg font-medium text-gray-900">
              {step.title}
            </h3>
            <div className="relative flex justify-center">
              <div className="w-7 h-7 bg-[#000] rounded-full border-8 border-[#800000] z-10"></div>
            </div>
            <p className="py-4 mt-2 text-gray-600 w-full sm:w-4/5 h-full mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>
         
    </div>

  )
}

export default WhyChosedot



