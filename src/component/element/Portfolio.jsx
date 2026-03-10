import React from "react";
import { FaEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

const Portfolio = () => {
  const portfolioContent = [
    {
      img: "/image/portfolio/invnt.PNG",
      name: "Invnt Website",
      content:
        "Built with Next.js and React.js, fully responsive, optimized performance, and modern frontend design.",
      link: "https://invnttech.com/",
    },
    {
      img: "/image/portfolio/img-1.PNG",
      name: "Healthcare Website",
      content:
        "Next.js + React.js project, responsive design, bug-free UI, and visually engaging user interface.",
      link: "https://mslabtestlive.com/",
    },
    {
      img: "/image/portfolio/img-2.PNG",
      name: "Atlantis RCM Website",
      content:
        "React.js and Next.js based website, fully responsive layout, high performance, and clean frontend code.",
      link: "https://www.atlantisrcm.com/",
    },
    {
      img: "/image/portfolio/img-3.PNG",
      name: "TriLink Internet Website",
      content:
        "Developed using React.js and Next.js, responsive design across devices, and optimized frontend performance.",
      link: "https://trilinkinternet.com/",
    },
    {
      img: "/image/portfolio/img-4.PNG",
      name: "Atlantis Tech Website",
      content:
        "React.js + Next.js project with responsive layouts, modern UI, and high-performance front-end implementation.",
      link: "https://www.atlantis.tech/",
    },
  ];

  return (
    <div className="portfolio_section section-padding" id="portfolio">
      <div className="container px-sm-2 px-4">
        <div className="row">
          {/* HEADING */}
          <div className="col-lg-5 padding-bottom">
            <h2 className="mb-3" data-aos="zoom-in">
              My Portfolio
            </h2>
            <div className="line" data-aos="fade-up"></div>
          </div>
        </div>

        {/* PORTFOLIO SWIPER */}
        <div className="row">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              572: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {portfolioContent.map((element, index) => (
              <SwiperSlide key={index} className="my-5">
                <div className="porfolio_card h-100 d-flex flex-column">
                  <a
                    className="text-decoration-none"
                    href={element.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* Image */}
                    <div className="portfolio_img position-relative overflow-hidden rounded-4">
                      <img
                        src={element.img}
                        className="img-fluid rounded-4"
                        alt={element.name}
                      />
                      <span className="view_icon">
                        <FaEye />
                      </span>
                    </div>

                    {/* Content */}
                    <div className="portfolio_content pb-4 mt-4 flex-grow-1">
                      <h5 className="text-white">{element.name}</h5>
                      <p className="content mt-3">{element.content}</p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;