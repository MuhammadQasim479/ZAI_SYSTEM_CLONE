import React from 'react'
import { ServiceprocessData } from '../../Data/Mockdata';

const Servicesapproach = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-4">
        <div className='text-center space-y-2'>
            <button className='bg-white text-red px-4 py-2 rounded-md text-[#800000] font-semibold'>Services</button>
            <h1 className='text-xl sm:text-3xl font-bold py-2'>Our Services Approach</h1>
            <p className='text-gray-600 text-lg leading-relaxed'>Our customized approach is to help your business find the right service, so you can achieve your goals faster and more efficiently</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10S py-4'>
              {ServiceprocessData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center space-y-4"
          >
            <div
              className={`w-44 h-44 flex items-center justify-center rounded-full ${item.color}`}
            >
              <span className="text-6xl text-white/80">{item.number}</span>
            </div>
            <div className='w-10/12 text-center space-y-3'>
            <h3 className="text-lg sm:text-2xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 md:text-lg text-sm py-3">{item.description}</p>
            </div>
          </div>
        ))}
        </div>
      <hr className="text-gray-400" />
    </section>
)
}

export default Servicesapproach;