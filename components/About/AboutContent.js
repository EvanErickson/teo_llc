import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../public/images/about-img2.jpg";

const AboutContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                  Welcome to TEOLLC, where innovation meets expertise. We’re dedicated to providing top-notch IT consultancy services tailored to your business needs.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                  At TEOLLC, we are a passionate team of IT professionals with years of experience in the industry. Our diverse skill set and dedication to excellence empower us to deliver cutting-edge solutions that drive success. We pride ourselves on our ability to understand our clients’ unique challenges and deliver strategies that lead to tangible results.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                  Founded in 2010, TEOLLC began with a vision to transform the IT consultancy landscape in China. What started as a small team of enthusiastic tech experts has grown into a leading firm known for its innovative solutions and client-centric approach. Over the years, we’ve successfully partnered with numerous businesses, helping them navigate the complexities of the digital world.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      We strive to provide exceptional IT solutions that exceed our clients' expectations and help them achieve their business goals.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      By staying ahead of industry trends and leveraging the latest technologies, we aim to drive innovation and ensure our clients are at the forefront of their industries.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Our commitment to transparency, integrity, and outstanding service allows us to build strong, long-term relationships with our clients and partners.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
