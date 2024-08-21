import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div 
        className="consulting-banner-area"
        style={{ 
          backgroundImage: `url(/images/business-consulting/consulting-banner-bg.jpg)` 
        }}
      >
        <div className="container">
          <div className="consulting-banner-content">
            <h1
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              We Are Always As Your Service For Any Business Consulting
            </h1>

            <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Link 
              href="/contact-us/" 
              className="default-btn-two"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Get Started <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
