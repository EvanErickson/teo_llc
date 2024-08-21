import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import bannerImg1 from '../../../public/images/banner-img3.png';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div
        className="main-banner main-banner2"
        style={{
          backgroundImage: `url(/images/main-banner-shape.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <span
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                    >
                      A Digital Agency
                    </span>

                    <h1
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      We're a full-range digital agency.
                    </h1>

                    <p
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      <Link href="/contact-us/" className="btn btn-primary">
                        Get Started
                      </Link>

                      <button
                        onClick={() => setToggler(!toggler)}
                        className="btn btn-secondary"
                      >
                        <i className="fa-solid fa-play me-1"></i> How it works
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="banner-animation-image2"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    <Image
                      src={bannerImg1}
                      className="main-pic"
                      alt="image"
                      width={640}
                      height={570}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
