import React from "react";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <div className="about_section section-padding padding-top" id='about'>
      <div className="container px-sm-2 px-4">
        <div className="row">
          {/* IMAGE SECTION */}
          <div className="col-lg-6">
            <div className="about_image">
              <Tilt>
                <img src="/image/about-img.jpg" alt="" />
              </Tilt>
            </div>
          </div>
          {/* CONTENT SECTION */}
          <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-5">
            <div className="about_content">
              <h2 className="text-white ">ABOUT ME</h2>
              <div className="line"></div>
              <p className="about_descrpition text-white mt-5">
                As a dedicated Front-End Web Developer, my expertise lies in
                crafting visually engaging and user-friendly web applications.
                Proficient in HTML, CSS, Bootstrap, Github, JavaScript, and
                TypeScript, I specialize in creating dynamic and responsive web
                interfaces.
              </p>
              <p className="about_descrpition mt-4 text-white">
                With a rich history of achievements in the computer software
                industry, I've had the privilege of making significant
                contributions to various projects. My core objective is to
                design captivating online experiences, ranging from sleek small
                business websites to dynamic and interactive web applications.
                Let's collaborate to bring your digital vision to life
              </p>
              <div className="d-flex gap-5 mt-lg-5 mt-4">
                <div className="project d-flex align-items-center gap-3">
                  <h2 className="fw-bold ">10+</h2>
                  <p className="text-white mb-0">
                    Projects <br /> completed
                  </p>
                </div>
                <div className="project d-flex align-items-center gap-3">
                  <h2 className="fw-bold ">5+</h2>
                  <p className="text-white mb-0">
                    Satisfied <br /> Clients
                  </p>
                </div>
              </div>
              <div className="mt-lg-5 mt-4">
                <a href="/image/my-cv.pdf" download={'/image/my-cv.pdf'} className="btn btn-primary">download cv</a>
                <a href="#portfolio" className="btn btn-secondary ms-3">portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
