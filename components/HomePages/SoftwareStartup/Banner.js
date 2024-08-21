import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "../../../public/images/software/banner-img.png";

const Banner = () => {
  return (
    <>
      <div className="software-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="software-banner-content">
                <span
                  className="sub-title fw-bold"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Get your 14 days free trail!
                </span>

                <h1
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Manage All of Your Stuff Using a Pungent
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  tincidunt eifend odio viverra diam aliquet donec again.
                </p>

                <Link
                  href="/contact-us/"
                  className="software-btn"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Get Started Now <i className="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="software-banner-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image
                  src={bannerImg}
                  alt="banner-image"
                  width={1081}
                  height={1012}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
