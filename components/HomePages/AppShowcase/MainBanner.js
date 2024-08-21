import React from "react";
import Link from "next/link";
import Image from "next/image";

import mobileApp from "../../../public/images/app/mobile-app.png";

import shapeImg1 from "../../../public/images/app/shape1.png";
import shapeImg2 from "../../../public/images/app/shape2.png";
import shapeImg3 from "../../../public/images/app/shape3.png";
import shapeImg4 from "../../../public/images/app/shape4.png";

const MainBanner = () => {
  return (
    <>
      <div className="app-main-banner">
        <div className="container">
          <div className="app-main-banner-inner">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="content">
                  <span className="sub-title">
                    # Get your 14 days free trail!
                  </span>
                  
                  <h1>
                    The Revolutionary App That Makes Your Life Easier Than
                    Others App
                  </h1>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    tincidunt eifend odio viverra diam aliquet donec again.
                  </p>

                  <Link href="#" className="app-banner-btn">
                    Start Free Trial{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Image
                    src={mobileApp}
                    alt="banner-img"
                    width={680}
                    height={708}
                  />
                </div>
              </div>
            </div>

            {/* Shape Images */}
            <div className="app-banner-shape1">
              <Image src={shapeImg1} alt="image" width={78} height={47} />
            </div>
            <div className="app-banner-shape2">
              <Image src={shapeImg2} alt="image" width={175} height={61} />
            </div>
            <div className="app-banner-shape3">
              <Image src={shapeImg2} alt="image" width={175} height={61} />
            </div>
            <div className="app-banner-shape4">
              <Image src={shapeImg3} alt="image" width={362} height={121} />
            </div>
            <div className="app-banner-shape5">
              <Image src={shapeImg4} alt="image" width={149} height={185} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
