import React from "react";
import { FaEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const Portfolio = () => {
  const portfolioContent = [
    {
      img: "/image/portfolio/img-1.PNG",
      name: "health care website",
      content:
        "Trusted online destination for comprehensive healthcare services.",
      link: "https://mslabtestlive.com/",
    },
    {
      img: "/image/portfolio/img-2.PNG",
      name: " Health Care Website",
      content:
        "Explore a comprehensive range of healthcare solutions to optimize processes.",
      link: "https://www.atlantisrcm.com/",
    },
    {
      img: "/image/portfolio/img-3.PNG",
      name: "TriLink Website",
      content:
        "Discover the future of internet speed and cutting-edge devices at trilinkinternet.com. ",
      link: "https://trilinkinternet.com/",
    },
    {
      img: "/image/portfolio/img-4.PNG",
      name: "Atlantis Tech Website",
      content: "Hire the Best web developers, app developers, UI/UX designers.",
      link: "https://www.atlantis.tech/",
    },

    {
      img: "/image/portfolio/img-1.PNG",
      name: "health care website",
      content:
        "Trusted online destination for comprehensive healthcare services.",
      link: "https://mslabtestlive.com/",
    },
    {
      img: "/image/portfolio/img-2.PNG",
      name: " Health Care Website",
      content:
        "Explore a comprehensive range of healthcare solutions designed to  optimize processes.",
      link: "https://www.atlantisrcm.com/",
    },
    {
      img: "/image/portfolio/img-3.PNG",
      name: "TriLink Website",
      content:
        "Discover the future of internet speed and cutting-edge devices at trilinkinternet.com. ",
      link: "https://trilinkinternet.com/",
    },
    {
      img: "/image/portfolio/img-4.PNG",
      name: "Atlantis Tech Website",
      content: "Hire the Best web developers, app developers, UI/UX designers.",
      link: "https://www.atlantis.tech/",
    },
  ];

  return (
    <div className="portfolio_section section-padding" id="portfolio">
      <div className="container px-sm-2 px-4">
        <div className="row">
          {/* HEADING SECTION */}
          <div className="col-lg-5 padding-bottom">
            <h2 className="mb-3" data-aos='zoom-in' >My Portfolio</h2>
            <div className="line" data-aos='fade-up' ></div>
          </div>
        </div>

        {/* PORTFOLIO CONTENT */}
        <div className="row">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              572: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {portfolioContent.map((element, index) => {
              return (
                <SwiperSlide key={index} className="my-5">
                  <div className="porfolio_card">
                    <a
                      className="text-decoration-none"
                      href={element.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="portfolio_img position-relative overflow-hidden rounded-4">
                        <img
                          src={element.img}
                          className="img-fluid rounded-4"
                          alt=""
                        />
                        <span className="view_icon">
                          <FaEye />
                        </span>
                      </div>
                      <div className="portfolio_content pb-4 mt-4">
                        <h5 className="text-white">{element.name}</h5>
                        <p className="content mt-4 ">{element.content}</p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
