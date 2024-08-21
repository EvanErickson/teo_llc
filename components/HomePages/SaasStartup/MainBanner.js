import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "../../../public/images/saas-startup/saas-banner.png";

const MainBanner = () => {
  return (
    <>
      <div className="saas-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="saas-banner-content">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Pungent is Most Powerful SaaS Solution
                </h1>
                
                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
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

            <div className="col-lg-6 col-md-12">
              <div
                className="saas-banner-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image
                  src={bannerImg}
                  alt="image"
                  width={928}
                  height={502}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
