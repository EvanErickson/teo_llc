import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

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
              backgroundImage: `url(/images/hero-banner1.jpg)` 
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content text-center">
                        <span
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          We are a
                        </span>

                        <h1
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Creative agency
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
              backgroundImage: `url(/images/hero-banner2.jpg)` 
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content text-center">
                        <span
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          We are a
                        </span>

                        <h1
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Startup agency
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
              backgroundImage: `url(/images/hero-banner3.jpg)` 
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content text-center">
                        <span
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          We are a
                        </span>

                        <h1
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Smart agency
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
