import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/images/about-img3.jpg";

const WhyChooseUs = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two pl-0 mt-0"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="section-title">
                  <h2>Why Choose Us</h2>
                  <p>
                  Your trusted partner in technology solutions, delivering excellence with every project.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                  We are a team of passionate IT professionals dedicated to 
                  helping businesses thrive in the digital age. With a blend of 
                  creativity and technical expertise, we provide solutions that drive success.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                  Founded on a commitment to innovation, we have been delivering cutting-edge technology solutions for 20 years. Our journey is marked by continuous growth, client satisfaction, and a track record of successful projects across various industries.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <p>
                  To empower businesses with technology solutions that are not only 
                  effective but also transformative. We strive to build lasting relationships 
                  by delivering exceptional service and measurable results.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image right-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
