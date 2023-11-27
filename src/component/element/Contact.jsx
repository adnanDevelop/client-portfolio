import React from "react";

const Contact = () => {
  return (
    <div className="contact_section section-padding" id="contact">
      <div className="container px-sm-2 px-4">
        <div className="row contact_bg_color">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="contact_content ">
              <h3 className="text-white text-center mb-5 " data-aos='fade-up'>Get In Touch</h3>
              <form action="https://formspree.io/f/myyqqjyn" method='POST' className="mt-4">
                <div data-aos='fade-up'>
                  <label htmlFor="name" className="text-white fs-3" >Name: </label>
                  <input
                    type="text"
                    required
                    className="form-control d-inline-block mt-3 rounded-0 mb-4 p-3"
                    name="name"
                    id="name"
                  />
                </div>
                <div data-aos='fade-up'>
                  <label htmlFor="email" className="text-white fs-3" >Email:</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="form-control d-inline-block mt-3 rounded-0 mb-4 p-3"
                    name="email"
                  />
                </div>
                <div data-aos='fade-up'>
                  <label htmlFor="description" className="text-white fs-3" >Project:</label>
                  <textarea
                    name="description"
                    id="description"
                    className="form-control d-inline-block mt-3 rounded-0 mb-4 p-3"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" data-aos='fade-up'  >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* MAP SECTION */}
          <div className=" ps-lg-5 col-lg-6">
            <div className="map_section rounded-4" data-aos='zoom-in' >
              <iframe
                className="rounded-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165418.84766403463!2d72.52094912788066!3d33.76803461382173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa654df8cb00d%3A0xcfc4650d8d975fb3!2sWah%20Cantt.%2C%20Wah%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1701094952607!5m2!1sen!2s"
                style={{ width: "100%", height: "80vh" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
