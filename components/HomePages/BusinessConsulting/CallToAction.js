import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <>
      <div className="call-to-action-area bg-image ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div 
                className="call-to-action-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <h2>
                  We Open for You 24 Hours a Day to Growing Our Partnerships in
                  a Better Way
                </h2>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div 
                className="call-to-action-btn"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Link href="/contact-us/" className="default-btn-two">
                  Contact Us <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
