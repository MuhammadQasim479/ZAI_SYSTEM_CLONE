import React from 'react'
import TabComponent from './Tabcomponent'

export const Courses = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-5 py-10">
      <div className="text-center">
        <button className="text-[#800000] font-semibold rounded-sm text-lg text-center bg-white px-3 py-1 mx-auto">
          COURSES
        </button>
        <div>
          <h1 className="text-center text-lg md:text-3xl font-bold py-3">
            Learn & Grow with our Online IT Courses
          </h1>
          <p className="text-gray-600 text-lg">
            Our training courses offer a wide range of professional skills that you can learn from our experts.
          </p>
        </div>
      </div>
      <div className='py-6'>
      <TabComponent />
      </div>
      <hr className="text-gray-400" />
    </div>
    
  )
}
