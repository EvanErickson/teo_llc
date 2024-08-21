import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import whoWeAreImg from "../../../public/images/business-consulting/who-we-are.jpg";

const WhoWeAre = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="bc-who-we-are-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="bc-who-we-are-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <span className="sub-title">WHO WE ARE</span>
                <h2>
                  Pungent global consulting firm is working with more than 1200+
                  people that are working from more than 15 countries to help
                  our clients to meet his/her desirable goal in such a great
                  way.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspend sghisse ultrices gravida.
                </p>
                <Link href="/about" className="default-btn-two">
                  Read More <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="bc-who-we-are-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image src={whoWeAreImg} alt="image" width={720} height={577} />
                <div
                  onClick={() => setToggler(!toggler)}
                  className="video-btn popup-video"
                >
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
