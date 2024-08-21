import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import VisibilitySensor from "react-visibility-sensor";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="hero-slider"
      >
        <SwiperSlide>
          <div 
            className="hero-banner overly"
            style={{ 
              backgroundImage: `url(/images/hero-banner11.jpg)` 
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content left">
                        <h1
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Business Agency
                        </h1>

                        <p
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>

                        <div
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          <Link href="/contact-us/" className="btn btn-primary">
                            Contact Us
                          </Link>

                          <button
                            onClick={() => setToggler(!toggler)}
                            className="btn btn-secondary"
                          >
                            <i className="fa-solid fa-play me-1"></i> How it works
                          </button>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div 
            className="hero-banner overly"
            style={{ 
              backgroundImage: `url(/images/hero-banner12.jpg)` 
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content left">
                        <h1
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Grow Your Business
                        </h1>

                        <p
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>

                        <div
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          <Link href="/contact-us/" className="btn btn-primary">
                            Contact Us
                          </Link>

                          <button
                            onClick={() => setToggler(!toggler)}
                            className="btn btn-secondary"
                          >
                            <i className="fa-solid fa-play me-1"></i> How it works
                          </button>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div 
            className="hero-banner overly"
            style={{ 
              backgroundImage: `url(/images/hero-banner13.jpg)` 
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content left">
                        <h1
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Start Your Business
                        </h1>

                        <p
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>

                        <div
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          <Link href="/contact-us/" className="btn btn-primary">
                            Contact Us
                          </Link>

                          <button
                            onClick={() => setToggler(!toggler)}
                            className="btn btn-secondary"
                          >
                            <i className="fa-solid fa-play me-1"></i> How it works
                          </button>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
