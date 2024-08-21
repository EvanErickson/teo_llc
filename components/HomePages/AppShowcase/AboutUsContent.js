import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutAppImg from "../../../public/images/app/about-app.png";

const AboutUsContent = () => {
  return (
    <>
      <div className="pb-100 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="app-about-img"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Image src={aboutAppImg} alt="about" width={732} height={727} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-about-content">
                <span className="app-sub-title">ABOUT APP</span>
                <h2>Most Probably You Are Getting Best App Ever</h2>
                <p>
                  Cloud based storage for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy text. Never missyour
                  chance its just began.
                </p>

                <div className="features-text">
                  <h6>Trusted and Reliable</h6>
                  <p>
                    Most provabily best you can trust on it, just log in with
                    your mail account from play store and using whatever you
                    want for your business.
                  </p>
                </div>

                <div className="features-text">
                  <h6>Cloud Storage</h6>
                  <p>
                    Cloud based storage for your data backup just log in with
                    your mail account from play store and using whatever you
                    want for your business purpose orem ipsum dummy of your
                    business purpose text.
                  </p>
                </div>

                <div className="btn-box">
                  <Link href="#" className="app-default-btn">
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
