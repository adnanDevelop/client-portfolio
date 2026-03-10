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
        "Build dynamic, responsive, and user-friendly web applications using React.js and Next.js, delivering seamless user experiences and high-performance code.",
    },
    {
      icon: <LiaCogsSolid />,
      title: "API Integration & Dashboard",
      content:
        "Integrate RESTful APIs and FastAPI to fetch and display dynamic data. Develop interactive dashboards with real-time updates and analytics.",
    },
    {
      icon: <MdOutlineImportantDevices />,
      title: "Responsive Web Design",
      content:
        "Craft fully responsive layouts that adapt across devices using HTML5, CSS3, Bootstrap, Tailwind CSS, Ant Design, and SASS for a consistent UX.",
    },
    {
      icon: <BiBug />,
      title: "Bug Fixing & Debugging",
      content:
        "Identify, debug, and resolve front-end issues quickly to ensure smooth functionality, seamless performance, and error-free applications.",
    },
    {
      icon: <TbDeviceDesktopAnalytics />,
      title: "Cross-Browser & Device Testing",
      content:
        "Test and optimize websites across multiple browsers and devices to guarantee consistent behavior and high-quality user experience everywhere.",
    },
    {
      icon: <AiOutlineThunderbolt />,
      title: "Performance Optimization",
      content:
        "Boost speed and responsiveness with optimized code, lazy loading, caching strategies, and modern best practices for frontend performance.",
    },
  ];

  return (
    <div
      className="service_section section-padding position-relative"
      id="service"
    >
      <div className="container px-sm-2 px-4">
        <div className="row g-4">
          {/* Heading */}
          <div className="col-12 padding-bottom">
            <h2 className="mb-3" data-aos="zoom-in">
              Services
            </h2>
            <div className="line" data-aos="fade-up"></div>
          </div>

          {/* Service Cards */}
          {serviceContent.map((element, index) => (
            <div
              className={`col-lg-4 col-sm-6 ${index >= 3 ? "mt-4 mt-lg-5" : ""}`}
              key={index}
              data-aos="fade-up"
            >
              <div className="service-card d-flex flex-column h-100 position-relative p-4 rounded-4">
                {/* Icon */}
                <div className="service-icon mb-3">
                  <p className="icon">{element.icon}</p>
                </div>

                {/* Title */}
                <h4 className="text-white heading mb-3">{element.title}</h4>

                {/* Content */}
                <p className="content flex-grow-1">{element.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;