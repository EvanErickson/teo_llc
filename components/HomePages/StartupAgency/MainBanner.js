import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from '../../../public/images/banner-img2.png';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="main-banner startup-agency">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      Start your startup agency with Pungent
                    </h1>

                    <p
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>

                    <Link 
                      href="/contact-us/" 
                      className="btn btn-primary"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      Get Started
                    </Link>

                    <button
                      onClick={() => setToggler(!toggler)}
                      className="btn btn-secondary"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="500"
                    >
                      <i className="fa-solid fa-play me-1"></i> How it works
                    </button>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="banner-image"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                  >
                    <Image src={bannerImg} alt="image" width={700} height={436} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default MainBanner;
