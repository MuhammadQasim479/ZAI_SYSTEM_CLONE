import React from 'react'
import zia_video from "../../assets/video/zia_video.mp4"

const Bgvideo = () => {
  return (
    <div className='w-full overflow-x-hidden'>
         <div className='w-full pt-20 sm:pt-0 h-[55] sm:h-[62vh] md:h-[70] lg:h-[90vh]'> 
            <video 
            src={zia_video}
            autoPlay
            muted
            plays
            loop={true}
            className='w-full h-full object-cover'
            >
            </video>
         </div>
    </div>
  )
}

export default Bgvideo;