import React from "react";
import Link from "next/link";

const CtaAreaThree = () => {
  return (
    <>
      <div className="cta-area-two dark-style ptb-100">
        <div className="container">
          <div 
            className="cta-content"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <span>So What is Next?</span>
            <h3>Are You Ready? Let's get to work!</h3>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <Link href="/contact-us/" className="default-btn-two">
              Contact Us <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaThree;
