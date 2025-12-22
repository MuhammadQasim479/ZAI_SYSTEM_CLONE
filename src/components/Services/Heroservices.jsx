import React from 'react'
import servicesbg from "../../assets/images/servicesbg.jpg"
import { Link } from 'react-router-dom'

const Heroservices = () => {
  return (
    <div className='w-full min-h-screen py-10'>
        <div className='flex items-center bg-top bg-no-repeat bg-cover w-full h-[88vh]'style={{backgroundImage:  `url(${servicesbg})`}}>
            <div className='flex flex-col w-full space-y-2 mx-auto px-4 md:px-30'>
            <div className='flex items-center gap-6 '>
            <span className='text-[#65676B]'>About Services </span> <span className='w-28 h-[2px] bg-[#800000]'></span>
            </div>
            <p className='text-[#65676B] text-3xl sm:text-5xl font-semibold w-full sm:w-6/10 leading:12 md:leading-16'>Delivering the Best IT Servicesfor Your Business Needs
            </p>
            <span className='text-[#65676B] py-8'>Choose Zai Systems, a reliable IT services provider for your business growth.</span>
            <Link to="/contactus">
            <button className='bg-[#800000] text-white rounded-md px-2 py-2.5 w-fit cursor-pointer'>Contact Us</button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Heroservices