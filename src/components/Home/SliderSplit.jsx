import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import swiper1 from "../../assets/images/slider/swiper1.webp";
import slider1 from "../../assets/images/Slider1/slider1.webp"
import slider2 from "../../assets/images/Slider1/slider2.webp"
import slider3 from "../../assets/images/Slider1/slider3.webp"
import slider4 from "../../assets/images/Slider1/slider4.webp"
import slider5 from "../../assets/images/Slider1/slider5.webp"


const SliderSplit = () => {
  const slides = [
    {
        id:1,
      title: "Payrolls",
      subtitle: "Tailored payroll solutions that are adaptable to your specific requirements. Effortlessly transfer salaries to bank accounts and upload wage files via Mudad with a single click. Moreover, seamlessly integrate payroll data with accountant systems such as Qoyod or Odoo, among others.",
      description: [
        "Salary Transfers via Mudad","Contract-Based Payrolls","Export Capability for Local Banks","Generation of WPS Files","Customizable Excel Templates","Comprehensive Reporting Features"
      ],
      image: slider1,
    },
    {
        id:2,
      title: "Attendance Tracking",
      subtitle:"Efficiently monitor employee attendance records and facilitate In/Out punches through either a mobile application or fingerprint device. Additionally, streamline reporting processes and automate calculations for overtime, absences, and tardiness.",
      description:[
        "Overtime Management","Integration with Official Holidays","Mobile App Punch In/Out","Compatibility with Fingerprint Devices","Automated Absence and Tardiness","Flexible Work Shift Scheduling"
      ],
      image:slider2,
    },
    {
        id:3,
      title: "Leave Management",
      subtitle: "Define and customize organizational leave policies to suit your specific requirements. Configure leave balance calculations based on individual employee contracts and manage various leave types effectively.",
      description:[
        "Versatile Leave Policy Configuration","Flexible Balance Customization","Flexible Balance Customization","Attachment Support for Leave Requests","Advance Salary Options","Leave Encashment Facilities"
      ],
      image: slider3,
    },
    {
        id:4,
      title: "Employee Self-Services",
      subtitle: "Empower your workforce with over 10 self-service options and request functionalities. Enjoy a flexible workflow, enabling easy customization and adjustment according to organizational needs.",
      description:[
        "Adaptable Workflow Processes","Diverse Array of Self-Service","Option to Enable/Disable Services as Required","Seamless Mobile App Request Submission","Customizable Workflow Structures","Prompt Notifications for Enhanced Communication"
      ],
      image: slider4,
    },
    {
      id:5,
      title: "Approval Workflow",
      subtitle: "Flexible approval workflows designed to accommodate various organizational requirements, offering limitless approval stages, statuses, and actions.",
      description:[
        "Unlimited Approval Hierarchies","Intuitive Configuration Process","Extensive Status Options","Tailored Workflows for Individual Services","Instant Notification System"
      ],
      image: slider5,
    },

  ];

  return (
    <div className="mt-10 w-full max-w-screen-xl mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        className="w-full"
        style={{
          '--swiper-pagination-color': '#800000',
          '--swiper-pagination-bullet-size': '9px',
          '--swiper-pagination-bullet-horizontal-gap': '12px'
        }}
      >
        <div className="w-full">
 {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Text Side */}
              <div className="md:w-1/2 text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                  {slide.title}
                </h2>
                <h4 className="text-base text-[#65676b] leading-7 tracking-wider text-justify  mb-4">
                  {slide.subtitle}
                </h4>
                <ul className="list-disc list-inside text-[#65676b] space-y-1.5">
                    {
                        slide.description.map((des, index) =>(
                            <li key={index}>{des}</li>
                        ))
                    }
                </ul>
              </div>
              {/* Image Side */}
              <div className="w-full md:w-1/2 flex justify-center min-h-1/2 sm:h-auto">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg w-full h-auto max-w-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        </div>
       
      </Swiper>
     <hr className="text-gray-400 mt-7"/>
    </div>
  );
};

export default SliderSplit;
