import React from 'react'
import { Servicespage } from '../../Data/Mockdata';
import { useNavigate } from 'react-router-dom';

const Serviceshero = () => {
  const navigate = useNavigate();
  return (
     <section className="py-1 w-full max-w-screen-xl mx-auto px-4">
        <div className='text-center space-y-4'>
            <button className='bg-white text-red px-4 py-2 rounded-md text-[#800000] font-semibold'>Services</button>
            <h1 className='text-xl sm:text-3xl font-bold py-2'>A Sneak Peek at Our Services</h1>
            <p className='text-gray-600 text-lg leading-relaxed'>We are a full-service IT company that provides customized solutions for your business needs. Whether you need software development, web design, cloud computing, or IT consulting, we have the expertise and experience to deliver high-quality results.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 py-7'>
            {
                Servicespage.map((serv, index) =>(
                    <div className="shadow-md rounded-3xl flex flex-col items-center p-2 sm:p-8 bg-white space-y-4 transform transition-transform duration-300 hover:-translate-y-1" key={index}>
                        <img src={serv.img} alt="" />

                        <h1
                          onClick={() => navigate(`/detail/${serv.id}`)}
                        className='font-semibold text-xl text-center hover:text-[#800000] cursor-pointer'>{serv.title}</h1>
                        <p className='text-center text-gray-500 leading-relaxed text-lg'>{serv.description}</p>
                    </div>
                ))
            }
        </div>
      <hr className="text-gray-400" />

    </section>
  )
}

export default Serviceshero;