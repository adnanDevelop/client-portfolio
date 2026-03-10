import React, { useState, useEffect } from "react";

const educationContent = [
  // EXPERIENCE SECTION
  {
    img: "/image/education/logo-1.png",
    title: "ICONAF",
    month: "Jan 2026 - Present",
    content: "Frontend Developer",
    category: "experience",
  },
  {
    img: "/image/education/logo-1.png",
    title: "Octaloop Technologies",
    month: "Oct 2024 - May 2025",
    content: "Frontend Developer",
    category: "experience",
  },
  {
    img: "/image/education/logo-1.png",
    title: "Atlantis Tech",
    year: "1 year",
    month: "April 2023 - Sep 2024",
    content: "Frontend Developer",
    category: "experience",
  },
  {
    img: "/image/education/logo-2.png",
    title: "Pakistan Software Export Board (PSEB)",
    year: "6 Months",
    month: "Oct 2022 - Mar 2023",
    content: "Frontend Developer",
    category: "experience",
  },
  {
    img: "/image/education/logo-3.png",
    title: "National Vocational And Technical Training Commission",
    year: "6 Months",
    month: "Apr 2022 - Sep 2022",
    content: "Frontend Developer",
    category: "experience",
  },
  // EDUCATION SECTION
  {
    img: "/image/education/logo-1.png",
    title: "BS in Computer Science",
    year: "4 Years",
    month: "2017 - 2021",
    content: "University of Wah",
    category: "education",
  },
  {
    img: "/image/education/logo-2.png",
    title: "FSC",
    year: "2 Years",
    month: "2015 - 2017",
    content: "Sir Syed College Wah Cantt",
    category: "education",
  },
  {
    img: "/image/education/logo-3.png",
    title: "Matric",
    year: "2 Years",
    month: "2013 - 2015",
    content: "Public School Wah Cantt",
    category: "education",
  },
];

const skillContent = [
  { title: "HTML5", percentage: "95%", color: "#FFE600", img: "/image/skill/html.svg" },
  { title: "CSS", percentage: "92%", color: "#59c378", img: "/image/skill/css.svg" },
  { title: "SASS / SCSS", percentage: "80%", color: "#59c378", img: "/image/skill/node-sass.svg" },
  { title: "Tailwind CSS", percentage: "80%", color: "#59c378", img: "/image/skill/featured.png" },
  { title: "Ant Design", percentage: "80%", color: "#59c378", img: "/image/skill/ant.svg" },
  { title: "Bootstrap", percentage: "95%", color: "#ff9a00", img: "/image/skill/bootstrap3.png" },
  { title: "WordPress", percentage: "80%", color: "#00bfe7", img: "/image/skill/wordpress.svg" },
  { title: "JavaScript", percentage: "85%", color: "#dd584f", img: "/image/skill/javascript.svg" },
  { title: "React.js", percentage: "90%", color: "#ad00ff", img: "/image/skill/react.svg" },
  { title: "Next.js", percentage: "90%", color: "#ad00ff", img: "/image/skill/react.svg" },
  { title: "Git", percentage: "85%", color: "#FFE600", img: "/image/skill/git.svg" },
];

const Skill = () => {
  const [education, setEducation] = useState([...educationContent]);

  // Show only experience
  const showExperience = () => {
    setEducation(educationContent.filter((item) => item.category === "experience"));
  };

  // Show only education
  const showEducation = () => {
    setEducation(educationContent.filter((item) => item.category === "education"));
  };

  useEffect(() => {
    showExperience(); // Default view
  }, []);

  return (
    <div className="skill_section section-padding" id="skill">
      <div className="container px-sm-2 px-4">
        <div className="row d-flex align-items-center">
          {/* HEADING */}
          <div className="col-lg-6">
            <h2 className="mb-3" data-aos="zoom-in">Education & Experience</h2>
            <div className="line" data-aos="fade-up"></div>
          </div>
          {/* FILTER BUTTONS */}
          <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-5">
            <div className="skill_btn d-flex" data-aos="zoom-in">
              <button
                className="filter_btn btn btn-primary d-block w-100"
                onClick={showExperience}
              >
                Experience
              </button>
              <button
                className="filter_btn btn btn-secondary ms-4 d-block w-100"
                onClick={showEducation}
              >
                Education
              </button>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-5 skill_padding">
          {/* LEFT COLUMN - Skills */}
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="row d-flex align-items-center justify-content-center">
              {skillContent.map((skill, index) => (
                <div className="col-6 mb-4 mt-3" key={index}>
                  <div className="skill_card" data-aos="fade-up">
                    <div className="skill_img">
                      <img src={skill.img} alt={skill.title} />
                    </div>
                    <div className="skill_content">
                      <h5 className="fw-light text-capitalize">
                        {skill.title}{" "}
                        <span className="ms-2 skill">{skill.percentage}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Education & Experience */}
          <div className="col-lg-6 ps-lg-5 order-lg-2 order-1">
            <div className="education_section">
              {education.map((item, index) => (
                <div
                  className="exprience_card p-4 rounded-3 d-flex align-items-center justify-content-between mb-4"
                  key={index}
                  data-aos="fade-up"
                >
                  <div className="content_section d-flex align-items-center gap-sm-4 gap-3">
                    <div className="img_section">
                      <img src={item.img} className="img-fluid" alt={item.title} />
                    </div>
                    <div className="img_content">
                      <h5 className="text-white text-capitalize">{item.title}</h5>
                      <p className="mb-0 content">{item.content}</p>
                    </div>
                  </div>
                  <div className="content_right_section text-end">
                    <p className="text-blue">{item.year}</p>
                    <p className="month mb-0">{item.month}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;