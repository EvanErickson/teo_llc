import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "../../../public/images/cyber-security/banner/main.png";
import shape from "../../../public/images/cyber-security/banner/shape.png";
import lock from "../../../public/images/cyber-security/banner/lock.png";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="cs-banner-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="cs-banner-content">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  No #1 Cyber Security Company Of The World
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  We Provide The Best Cyber Security
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Cybersecurity is the protection from the theft to protect of
                  our computer systems and networks or being damaged of our
                  hardware, software and more.
                </p>

                <ul
                  className="banner-btn"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <li>
                    <Link href="/contact-us/" className="default-btn-two">
                      Contact Us <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="cs-banner-image"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Image src={bannerImg} alt="image" width={1187} height={87} />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="cs-banner-shape">
          <Image
            src={shape}
            alt="image"
            width={350}
            height={385}
          />
        </div>
        <div className="cs-lock">
          <Image
            src={lock}
            alt="image"
            width={40}
            height={46}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
