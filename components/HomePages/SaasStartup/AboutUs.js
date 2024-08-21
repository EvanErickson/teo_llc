import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/saas-startup/about-img.png";

const AboutUs = () => {
  return (
    <>
      <div className="about-area bg-dark pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="saas-about-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image src={aboutImg} alt="image" width={524} height={473} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="saas-about-content white-color">
                <span className="sub-title">ABOUT US</span>
                <h2>
                  We Provide Our Business Services According To The Needs Of The
                  Customer
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>

                <ul className="features-list">
                  <li>
                    <i className="fas fa-check-circle"></i> Stet clita kasd
                    gubergren no sea takimata sanctus
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Duis autem vel eum
                    iriure dolor in hendrerit.
                  </li>
                </ul>

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

export default AboutUs;
