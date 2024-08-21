import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/digital-marketing/about-img.png";

const AboutContent = () => {
  return (
    <>
      <div className="marketing-about-area overflow-hidden pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="marketing-about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  width={658}
                  height={591}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="marketing-about-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <span className="sub-title">ABOUT US</span>
                <h2>
                  We offer the World's Best <b>Digital Marketing</b> Services!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Global Reach</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Excellence Track Record</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>High-End Anaylizing</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Our Dedicated Support</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="default-btn-two">
                  Learn More <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
