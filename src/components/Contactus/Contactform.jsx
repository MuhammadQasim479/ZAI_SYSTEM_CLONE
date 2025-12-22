import React from 'react'
import contact from "../../assets/images/contact.webp"


const Contactform = () => {
  return (
     <section className='py-20'>
        <div className='w-full max-w-screen-xl px-4 mx-auto'>
            <div className='flex items-center flex-col-reverse md:flex-row justify-between gap-10'>
                <div className='space-y-5 flex-1'>
                    <h1 className='text-2xl sm:text-5xl font-semibold text-[#800000]'>Contact Us</h1>
                    <p className='text-gray-500 text-lg'>Whether you have a project in mind, need IT solutions, or want to enhance your skills through professional training, Zai Systems is your trusted partner. Our dedicated team is here to assist you.</p>
                    <h2 className='text-gray-500 text-lg'>Contact us today and kickstart your IT profession towards greatness!</h2>
                </div>
                <div className='animate-floating flex items-center justify-center transition-all duration-300 transform -translate-y-2'>
                <img src={contact} alt="" />
                </div>
            </div>
            <hr className='text-gray-400 my-4 '/>
            <div className='py-10'>
             <div className='text-center'>
              <button className='bg-white text-[#800000] cursor-pointer rounded-md px-2 py-1.5 font-semibold'>Contact Form</button>
              <h1 className='text-xl md:text-3xl font-bold py-3'>Connect With Us</h1>
             </div>
             <form className='flex flex-col gap-5 max-w-5xl mx-auto'>
              <input type="text"
              placeholder='Your Name'
              required
              className='p-2 md:p-5 border-2 border-gray-400 rounded-xl md:rounded-3xl w-full focus:outline-none'
              />
              <input type="text"
              required
              placeholder='Your Email Address'
              className='p-2 md:p-5 border-2 border-gray-400 rounded-xl md:rounded-3xl w-full focus:outline-none'
              />
              <input type="text"
              placeholder='Phone Number'
              required
              className='p-2 md:p-5 border-2 border-gray-400 rounded-xl md:rounded-3xl w-full focus:outline-none'
              />
               <input type="text"
              placeholder='Subject'
              required
              className='p-2 md:p-5 border-2 border-gray-400 rounded-xl md:rounded-3xl w-full focus:outline-none'
              />
              <textarea className='p-5 border-2 border-gray-400 rounded-3xl w-full focus:outline-none' placeholder='Your Message' rows={6}>
              </textarea>
              <button className='bg-[#800000] text-white rounded-md px-10 py-4 w-fit cursor-pointer'>Submit Now</button>
             </form>
            </div>
        </div>
        
    </section>
  )
}

export default Contactform;