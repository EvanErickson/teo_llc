import React from "react";
import Image from "next/image";

import appDownload from "../../../public/images/software/app-download.png";
import playStore from "../../../public/images/software/play-store.png";
import appleStore from "../../../public/images/software/apple-store.png";

const AppDownload = () => {
  return (
    <>
      <div className="softeware-app-download-area overflow-hidden pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="softeware-app-download-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image src={appDownload} alt="app Download" width={550} height={494} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="softeware-app-download-content">
                <span
                  className="sub-title"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Download App
                </span>

                <h2
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Let&apos;s get your free copy from Apple and Play store
                </h2>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <a
                    href="https://play.google.com/store/apps"
                    className="playstore-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="img">
                      <Image
                        src={playStore}
                        alt="image"
                        width={27}
                        height={30}
                      />
                    </div>
                    Get It On
                    <span>Google Play</span>
                  </a>

                  <a
                    href="https://www.apple.com/itunes/"
                    className="applestore-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="img">
                      <Image
                        src={appleStore}
                        alt="image"
                        width={34}
                        height={35}
                      />
                    </div>
                    Download on the
                    <span>Apple Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
