import React from "react";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <div className="about_section section-padding padding-top" id='about'>
      <div className="container px-sm-2 px-4">
        <div className="row">
          {/* IMAGE SECTION */}
          <div className="col-lg-6">
            <div className="about_image" data-aos='zoom-in'>
              <Tilt>
                <img src="/image/about-img.jpg" alt="" />
              </Tilt>
            </div>
          </div>
          {/* CONTENT SECTION */}
          <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-5">
            <div className="about_content">
              <h2 data-aos='fade-up' className="text-white " >ABOUT ME</h2>
              <div className="line"  data-aos='zoom-in'></div>
            <p data-aos="fade-up" className="about_descrpition text-white mt-5">
  As a passionate Front-End Web Developer, I specialize in building 
  responsive, visually engaging, and user-friendly web applications. 
  With expertise in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, 
  and TypeScript, I focus on delivering clean, scalable, and 
  performance-optimized solutions using modern tools like Ant Design.
</p>

<p data-aos="fade-up" className="about_descrpition mt-4 text-white">
  Beyond crafting attractive websites, I excel at identifying and 
  resolving bugs, integrating smooth animations, and developing 
  powerful dashboards that extend functionality. My experience 
  includes collaborating with teams on GitHub, ensuring efficient 
  version control and seamless teamwork. From sleek business sites 
  to fully interactive platforms, my goal is to transform ideas into 
  impactful digital experiences that truly stand out.
</p>

              <div className="d-flex gap-5 mt-lg-5 mt-4" data-aos='fade-up'>
                <div className="project d-flex align-items-center gap-3">
                  <h2 className="fw-bold ">15+</h2>
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
              <div className="mt-lg-5 mt-4" data-aos='fade-up'>
                <a href="/image/cv.pdf" download={'/image/cv.pdf'} target="_blank" rel="noreferrer" className="btn btn-primary">download cv</a>
                <a href="#portfolio" className="btn btn-secondary ms-3" rel="noreferrer">portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
