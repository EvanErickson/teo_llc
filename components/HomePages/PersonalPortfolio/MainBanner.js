import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerProfile from "../../../public/images/personal-portfolio/banner-profile.jpg";
import shape1Img from "../../../public/images/personal-portfolio/shape1.png";

const MainBanner = () => {
  return (
    <>
      <div className="personal-portfolio-banner-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="personal-portfolio-banner-content">
                <span
                  className="sub-title"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Hello I'm
                </span>

                <h1
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Kathleen Lavelle
                </h1>

                <h4
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Digital Product Designer
                </h4>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
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
                  data-aos-delay="400"
                >
                  Connect With Me
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="personal-portfolio-banner-image"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <Image
                  src={bannerProfile}
                  alt="image"
                  width={616}
                  height={620}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pp-shape1">
          <Image
            src={shape1Img}
            alt="image"
            width={503}
            height={507}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
