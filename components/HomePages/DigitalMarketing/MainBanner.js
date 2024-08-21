import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "../../../public/images/digital-marketing/banner-img.png";
import shapeImg from "../../../public/images/digital-marketing/shape1.png";

const MainBanner = () => {
  return (
    <>
      <div className="marketing-banner-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="marketing-banner-content">
                <span
                  className="sub-title"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  MARKETING AGENCY
                </span>

                <h1
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  We Help You Take Your Business to The Next Level
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link
                  href="/contact-us/"
                  className="default-btn-two"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Contact Us <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="marketing-banner-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image src={bannerImg} alt="image" width={703} height={652} />
              </div>
            </div>
          </div>
        </div>

        <div className="dm-shape1">
          <Image src={shapeImg} alt="image" width={600} height={533} />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
