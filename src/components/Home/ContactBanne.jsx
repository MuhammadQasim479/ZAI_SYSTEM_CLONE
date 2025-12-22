import React from 'react';
import contact1 from '../../assets/images/contact1.png';
import { Mail, PhoneCall } from 'lucide-react';

const ContactBanner = () => {
  return (
    <div className="relative">
      {/* Outer Container */}
      <div className="w-full md:max-w-screen-xl mx-auto px-4">
        <div className="relative bg-white rounded-3xl shadow-md overflow-hidden bg-gradient-to-r from-white via-white to-[#E0CCCD]">
          {/* Inner Content — Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center p-5 lg:p-6 gap-6 md:gap-8">
            {/* Left Side - Text */}
            <div className="text-left col-span-1 lg:col-span-1">
              <h2 className="text-2xl text-center md:text-left md:text-3xl font-bold text-gray-900 mb-2">
                Need Help? Let's Talk!
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                We're here to answer your questions and discuss your needs.
                Contact us today for a free consultation.
              </p>
            </div>
              <div className="space-y-3 md:col-span-1">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Mail className="h-8 w-8 text-[#800000] cursor-pointer"/>
                  <span className='text-base cursor-pointer font-medium'>zaisystems@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <PhoneCall className="h-8 w-8 text-[#800000] cursor-pointer" />
                  <span className='text-base cursor-pointer font-medium hover:animate-pulse'>+92 334 6906960</span>
                </div>
              </div>

            <div className="hidden sm:hidden md:block flex-shrink-0 justify-self-end pr-6">
              <img
                src={contact1}
                alt="Hand pointing at @ symbol"
                className="w-40 h-auto md:w-52 lg:w-90 object-contain mx-auto pl-0 xl:pr-24 md:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;