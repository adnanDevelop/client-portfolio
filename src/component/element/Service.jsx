import React from "react";
import { FaCode } from "react-icons/fa";
import { LiaCogsSolid } from "react-icons/lia";
import { MdOutlineImportantDevices } from "react-icons/md";

const Service = () => {
  const serviceContent = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      content:
        " Dynamic user interfaces, flawless functionality. React.js, JavaScript for engaging web experiences.",
    },
    {
      icon: <LiaCogsSolid />,
      title: "Custom Web Design",
      content:
        "Craft captivating website designs that elevate your online presence. Responsive layouts in HTML, CSS, and Bootstrap.",
    },
    {
      icon: <MdOutlineImportantDevices />,
      title: "UI/UX",
      content:
        "Transform your online identity with captivating WordPress designs. Elevate your website with my expertise.",
    },
  ];

  return (
    <div className="service_section section-padding position-relative" id="service">
      <div className="container px-sm-2 px-4">
        <div className="row g-4">
        <div className="col-12 padding-bottom ">
            <h2 className="mb-3" data-aos='zoom-in'>Serivces</h2>
            <div className="line" data-aos='fade-up' ></div>
          </div>

          {serviceContent.map((element, index) => {
            return (
              <div className="col-lg-4 col-sm-6 mb-lg-0 mb-5" key={index} data-aos='fade-up'>
                <div className="service-card position-relative p-4  rounded-4 ">
                  <div className="service-icon">
                    <p className="icon">{element.icon}</p>
                  </div>
                  <h4 className="text-white   heading mb-4">{element.title}</h4>
                  <p className="content">
                    {element.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
