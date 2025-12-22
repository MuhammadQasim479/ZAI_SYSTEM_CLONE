import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
  PrinterCheckIcon,
} from "lucide-react";
import { footerData } from "../../Data/Mockdata";
import ziasystem from "../../assets/images/ziasystem.webp"
import footer from "../../assets/images/footer.webp"


const Footer = () => {
  const iconMap = {
    Facebook: <FacebookIcon size={18} />,
    Instagram: <InstagramIcon size={18} />,
    Linkedin: <LinkedinIcon size={18} />,
    Youtube: <YoutubeIcon size={18} />,
    Twitter: <TwitterIcon size={18} />,
    // Pinterest: <Pinterest size={18} />,
    Pinterest: <PrinterCheckIcon size={18}/>
  };

  return (
    <footer className="bg-gray-50 w-full py-12 px-4">
      <div className="container px-4 md:px-8 mx-auto">
      <div className='w-full h-full'>
            <img src={footer} alt="footer image" className='w-full h-full' />
        </div>
      <div className=" grid gap-10 lg:grid-cols-5 md:grid-cols-2 py-12">
        {/* Logo & About */}
        <div className="md:col-span-2">
          <img
            src={ziasystem}
            alt="Zai Systems Logo"
            className="mb-4 w-15"
          />
          <p className="leading-relaxed text-gray-500 tracking-tighter text-justify text-base">{footerData.about}</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl">
            Our Services
          </h3>
          <ul className="space-y-2  text-gray-600 pt-11">
            {footerData.services.map((item, i) => (
              <li
                key={i}
                className="hover:text-[#800000] transition-colors  duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl">
            We Also Provide
          </h3>
          <ul className="space-y-2 text-gray-600 pt-11">
            {footerData.provides.map((item, i) => (
              <li
                key={i}
                className="hover:text-[#800000] transition-colors duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Working Hours */}
        <div>
          <h3 className="text-lg font-normal mb-3 text-gray-900">
            Follow Us
          </h3>
          <div className="flex flex-wrap gap-8 mb-5">
            {footerData.socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="w-14 h-14 flex text-2xl items-center justify-center bg-black text-white rounded-full hover:bg-[#800000] transition-colors duration-300"
              >
                {iconMap[item.icon]}
              </a>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-1 text-gray-900">
            Working Hours
          </h3>
          <p className="text-sm text-gray-600">{footerData.workingHours.days}</p>
          <p className="text-sm text-gray-600">{footerData.workingHours.time}</p>
        </div>
      </div>
            
      </div>
      <div className="border-t text-center text-lg text-gray-600">
        © 2024 – Zai Systems – All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
