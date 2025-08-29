import React, { useState, useEffect } from "react";

const educationContent = [
  // EXPERIENCE SECTION
   {
    img: "/image/education/logo-1.png",
    title: "Octaloop Technologies",
    month: "Oct 2024 - Feb 2025 ",
    content: "Frontend Developer",
    category: "experience",
  },
  {
    img: "/image/education/logo-1.png",
    title: "Atlantis Tech ",
    year: "1 year Years",
    month: "April 2023 - Sep 2024 ",
    content: "Frontend Developer",
    category: "experience",
  },
  {
    img: "/image/education/logo-2.png",
    title: "Pakistan Software Export Board (PSEB).",
    year: "6 Months",
    month: "Oct 2022 - March 2023",
    content: "Frontend Developer",
    category: "experience",
  },
  {
    img: "/image/education/logo-3.png",
    title: "National Vocational And Technical  Training  Commissoin.",
    year: "6 Months",
    month: "April 2022 - September 2022",
    content: "Frontend Developer",
    category: "experience",
  },
  // EDUCATION SECTION
  {
    img: "/image/education/logo-1.png",
    title: "BS in Computer Science",
    year: "4 Years",
    month: "2017 - 2021",
    content: "University of wah",
    category: "education",
  },
  {
    img: "/image/education/logo-2.png",
    title: "FSC",
    year: "2 Years",
    month: "2015 -  2017",
    content: "Sir Syed college wah cantt",
    category: "education",
  },
  {
    img: "/image/education/logo-3.png",
    title: "Matric",
    year: "2 Years",
    month: " 2013 - 2015",
    content: "Public school wah cantt",
    category: "education",
  },
];

const Skill = () => {
  const [education, setEducation] = useState([...educationContent]);

  const skillContent = [
    {
      title: "html5",
      percentage: "95%",
      color: "#FFE600",
      img: "/image/skill/html.svg",
      class: "skill-card active",
    },
    {
      title: "Css",
      percentage: "92%",
      color: "#59c378",
      img: "/image/skill/css.svg",
      class: "skill-card",
    },
     {
      title: "Sass",
      percentage: "80%",
      color: "#59c378",
      img: "/image/skill/node-sass.svg",
      class: "skill-card",
    },
      {
      title: "Tailwind Css",
      percentage: "80%",
      color: "#59c378",
      img: "/image/skill/featured.png",
      class: "skill-card",
    },
       {
      title: "Ant Design",
      percentage: "80%",
      color: "#59c378",
      img: "/image/skill/ant.svg",
      class: "skill-card",
    },
    {
      title: "bootstrap",
      percentage: "95%",
      color: "#ff9a00",
      img: "/image/skill/bootstrap3.png",
      class: "skill-card",
    },
    {
      title: "Wordpress",
      percentage: "80%",
      color: "#00bfe7",
      img: "/image/skill/wordpress.svg",
      class: "skill-card",
    },
    {
      title: "javascript",
      percentage: "85%",
      color: "#dd584f",
      img: "/image/skill/javascript.svg",
      class: "skill-card",
    },
    {
      title: "react js",
      percentage: "90%",
      color: "#ad00ff",
      img: "/image/skill/react.svg",
      class: "skill-card",
    },
    {
      title: "Git",
      percentage: "85%",
      color: "#FFE600",
      img: "/image/skill/git.svg",
      class: "skill-card",
    },
  ];

  // EXPERIENCE SECTION DATA
  const showExperience = () => {
    setEducation(
      educationContent.filter((item) => item.category === "experience")
    );
  };

  // EDECATION SECTION DATA
  const showEducation = () => {
    setEducation(
      educationContent.filter((item) => item.category === "education")
    );
  };

  //  BY DEFAULT IT SHOW EXPERIENCE DATA
  useEffect(() => {
    setEducation(
      educationContent.filter((item) => item.category === "experience")
    );
  }, []);

  return (
    <div className="skill_section section-padding" id="skill">
      <div className="container px-sm-2 px-4">
        <div className="row d-flex align-items-center">
          {/* HEADING SECTION */}
          <div className="col-lg-5 ">
            <h2 className="mb-3" data-aos='zoom-in'>Education & Experience</h2>
            <div className="line" data-aos='fade-up'></div>
          </div>
          {/* FILTER BUTTONS SECTION */}
          <div className="col-lg-7 ps-lg-5 mt-lg-0 mt-5">
            <div className="skill_btn d-flex" data-aos='zoom-in'>
              <button
                className=" filter_btn btn btn-primary d-block w-100"
                onClick={showExperience}
              >
                experience
              </button>
              <button
                className=" filter_btn btn btn-secondary ms-4 d-block w-100"
                onClick={showEducation}
              >
                education
              </button>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-5 skill_padding">
          <div className="col-lg-5 order-lg-1 order-2">
            <div className="row d-flex align-items-center justify-content-center">
              {skillContent.map((element, index) => {
                return (
                  <div className="col-6 mb-5 mt-lg-0 mt-4" key={index}>
                    <div className="skill_card" data-aos='fade-up'>
                      <div className="skill_img">
                        <img src={element.img} alt="" />
                      </div>
                      <div className="skill_content">
                        <h5 className="fw-light text-capitalize">
                          {element.title}{" "}
                          <span className="ms-2 skill">
                            {element.percentage}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-7 ps-lg-5 order-lg-2 order-1">
            <div className="education_section">
              {education.map((element, index) => {
                return (
                  <div
                    className="exprience_card p-4 rounded-3 d-flex align-items-center justify-content-between mb-4 "
                    key={index}
                    data-aos='fade-up'
                  >
                    <div className="content_section d-flex align-items-center gap-sm-4 gap-3">
                      <div className="img_section">
                        <img src={element.img} className="img-fluid" alt="" />
                      </div>
                      <div className="img_content">
                        <h5 className="text-white text-capitalize">
                          {element.title}
                        </h5>
                        <p className="mb-0 content">{element.content}</p>
                      </div>
                    </div>
                    <div className="content_right_section text-end">
                      <p className="text-blue">{element.year}</p>
                      <p className="month mb-0">{element.month}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
