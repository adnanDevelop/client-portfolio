import React from "react";
import { FaCode } from "react-icons/fa";
import { LiaCogsSolid } from "react-icons/lia";
import { MdOutlineImportantDevices } from "react-icons/md";
import { BiBug } from "react-icons/bi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Service = () => {
  const serviceContent = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      content:
        "Dynamic user interfaces, flawless functionality. React.js, JavaScript for engaging web experiences.",
    },
  {
  icon: <LiaCogsSolid />,
  title: "Custom Web Design",
  content:
    "Craft captivating website designs that elevate your online presence. Responsive layouts in HTML, CSS, Bootstrap, Tailwind CSS, Ant Design, and SASS.",
},
    {
      icon: <MdOutlineImportantDevices />,
      title: "UI/UX",
      content:
        "Design intuitive and visually appealing user interfaces that provide seamless experiences for your audience.",
    },
    {
      icon: <BiBug />,
      title: "Bug Fixing & Debugging",
      content:
        "Identify and resolve front-end issues quickly to ensure smooth user experiences and error-free functionality.",
    },
    {
      icon: <TbDeviceDesktopAnalytics />,
      title: "Cross-Browser Testing",
      content:
        "Test and optimize websites across multiple browsers and devices for consistent performance everywhere.",
    },
    {
      icon: <AiOutlineThunderbolt />,
      title: "Performance Optimization",
      content:
        "Boost website speed and responsiveness through optimized code, images, and modern best practices.",
    },
  ];

  return (
    <div
      className="service_section section-padding position-relative"
      id="service"
    >
      <div className="container px-sm-2 px-4">
        <div className="row g-4">
          <div className="col-12 padding-bottom ">
            <h2 className="mb-3" data-aos="zoom-in">
              Services
            </h2>
            <div className="line" data-aos="fade-up"></div>
          </div>

          {serviceContent.map((element, index) => (
            <div
              className={`col-lg-4 col-sm-6 ${index >= 3 ? "mt-4 mt-lg-5" : ""}`}
              key={index}
              data-aos="fade-up"
            >
              <div className="service-card position-relative p-4 rounded-4">
                <div className="service-icon">
                  <p className="icon">{element.icon}</p>
                </div>
                <h4 className="text-white heading mb-4">{element.title}</h4>
                <p className="content">{element.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
