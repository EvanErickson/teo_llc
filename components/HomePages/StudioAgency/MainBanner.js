import React, { useState, useEffect, useRef } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);

  // Auto Play Video
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="hero-banner video-studio overly-6">
        <div className="video-background">
          <video
            playsInline
            loop
            muted
            alt="App Promo"
            src="/video/promo-video.mp4"
            ref={videoEl}
          />
        </div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="main-banner-content">
                    <h1
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      Welcome to our video studio!
                    </h1>

                    <p
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <Link 
                      href="/contact-us/" 
                      className="btn btn-primary"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="600"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div 
                    className="video-box"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                  >
                    <button
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
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
