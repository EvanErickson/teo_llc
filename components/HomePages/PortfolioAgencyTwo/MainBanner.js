import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        className="hero-banner overly clip-path-one bg-fixed"
        style={{ 
          backgroundImage: `url(/images/hero-banner15.jpg)` 
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content text-center">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Portfolio Agency
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link 
                  href="/contact-us/" 
                  className="btn btn-primary"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                > 
                  Contact Us
                </Link>

                <button
                  onClick={() => setToggler(!toggler)}
                  className="btn btn-secondary"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <i className="fa-solid fa-play me-1"></i> How it works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
