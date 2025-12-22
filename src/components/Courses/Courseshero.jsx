import React from 'react'
import coursespagebg from "../../assets/images/coursespagebg.webp"
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Courseshero = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-full h-[100vh] sm:h-[90vh]'>
            <div className='w-full h-full space-y-2 pt-36 pb-10 md:pt-0 bg-cover bg-no-repeat bg-center flex flex-col items-center  justify-center overflow-x-hidden' style={{backgroundImage : `url(${coursespagebg})`}}>
                 <h1 className='text-xl sm:text-3xl lg:text-5xl font-semibold text-white text-center pt-10'>Jumpstart your Career with Our</h1>
                 <span className='text-xl sm:text-5xl font-semibold text-[#800000]'>Online IT Courses</span>
                 <p className='text-white text-lg font-normal text-center w-full px-2 sm:w-10/12 '>Zai Systems brought an amazing opportunity for all students and professionals who want to master skills online. We offer certified IT training courses online, including online WordPress course, online course for graphic designing, web and app development course, and much more. Willing to learn? Register your seat now in our IT courses and get certified in your good to go skill.</p>
                 <button className='flex items-center justify-center mt-5 hover:bg-[#800000] transition-all duration-300 hover:border-[#800000] gap-2 bg-transparent px-5 sm:px-7 py-2 sm:py-3.5 text-base text-white backdrop:blur-xl border border-gray-300 rounded-md cursor-pointer'>Contact Us
                  <ArrowRight  className='w-5 h-5'/>
                 </button>
            </div>
        </div>
    </div>
  )
}

export default Courseshero;