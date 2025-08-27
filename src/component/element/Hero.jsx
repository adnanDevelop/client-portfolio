import React from "react";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div
      className="hero_section d-flex align-items-center justify-content-center"
      id="home"
    >
      <div className="container px-sm-2 px-4">
        <div className="row d-flex align-items-center ">
          {/* CONTENT SECTION */}
          <div className="col-lg-6 col-md-10 mx-auto pe-lg-5 order-lg-1 order-2">
            <div
              className="  hero_content text-lg-start text-center"
              data-aos="fade-up"
            >
              <h5 className="text-white">Hello, I'm</h5>
              <h1 className="fw-bold">Nimraa</h1>
              <h5 className="text-white text-capitalize">
                And I'm a
                <span className="ms-2 typewriter">
                  <Typewriter
                    cursor
                    cursorStyle="|"
                    words={[
                      "Frontend Developer",
                      "Wordpress Designer",
                     
                    ]}
                    typeSpeed={120}
                    deleteSpeed={90}
                  />
                </span>
              </h5>
              <p className="hero_description mt-lg-5 mt-4 text-white pe-lg-5">
                As a Frontend Developer with 2 years of hands-on experience. I
                craft pixel-perfect, user-friendly interfaces that make the web
                come alive. Let's build something awesome together!
              </p>
              <div className="hero_icons mt-lg-4 mt-4">
                <a
                  href="https://join.skype.com/invite/p4n238ehlBYG"
                  target="_blank"
                >
                  <i className="fa-brands fa-skype"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nimra-khan-%E2%AD%90-625128218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100070446526449&mibextid=9R9pXO"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://github.com/cutenimragithub" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          {/* IMAGE SECTION */}
          <div className="col-lg-6 order-lg-2 order-1 mb-lg-0 mb-5 ">
            <Tilt>
              <div className="hero_img" data-aos="zoom-in">
                <img src="/image/hero-img.jpg" className="img-fluid" alt="" />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
