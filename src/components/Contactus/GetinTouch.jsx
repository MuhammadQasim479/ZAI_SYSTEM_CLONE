import React from 'react'
import contact24 from "../../assets/images/contactimg/contact24.webp"

const GetinTouch = () => {
  return (
    <section className="py-5 pb-10">
      <div className="w-full max-w-screen-xl px-3 mx-auto">
        <div className='flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-[#F5F8FA] via-[#F5F8FA] to-[#800000]/15 rounded-3xl shadow-xl'>
        <div className='flex-1 p-5 md:p-12 space-y-3'>
            <h1 className='text-2xl md:text-4xl font-bold'>Get in Touch</h1>
            <p className='w-full md:w-9/12 text-gray-500'>You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
        </div>
        <div className='items-start p-7 flex-1'>
            <img src={contact24} alt="" className='w-48 h-48' />
        </div>
         </div>

        </div>
        </section>
  )
}

export default GetinTouch