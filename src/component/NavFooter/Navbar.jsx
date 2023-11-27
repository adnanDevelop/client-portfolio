import React, { useState } from "react";

const Navbar = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 100 ? setScrollAnimation(true) : setScrollAnimation(false);
  });

 


  return (
    <nav
      id="navbar-section"
      className={`navbar navbar-expand-lg ${
        scrollAnimation ? "nav-scroll" : ""
      }`}
    >
      <div className="container d-flex align-item-center">
        <a className="navbar-brand order-0" href="#" data-aos='zoom-in'>
          <h3 className="fw-bold">Nimra</h3>
          {/* <img src="Images/logo.png" alt="" /> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          {/* <i className="fa-solid fa-bars-staggered "></i> */}
        </button>
        <div
          className="collapse navbar-collapse order-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" data-aos='zoom-in'>
            <li className="nav-item">
              <a className="nav-link  active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#about">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#skill">
                skill
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#service">
                service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#portfolio">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#contact">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
