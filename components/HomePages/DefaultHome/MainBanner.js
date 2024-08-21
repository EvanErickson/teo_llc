import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';
import Image from "next/image";

import bnShape1 from '../../../public/images/banner-shapes/bn-shape1.png';
import bnShape2 from '../../../public/images/banner-shapes/bn-shape2.png';
import bnShape3 from '../../../public/images/banner-shapes/bn-shape3.png';
import bnShape4 from '../../../public/images/banner-shapes/bn-shape4.png';
import bnShape5 from '../../../public/images/banner-shapes/bn-shape5.png';
import bnShape6 from '../../../public/images/banner-shapes/bn-shape6.png';
import bnShape7 from '../../../public/images/banner-shapes/bn-shape7.png';
import bnShape8 from '../../../public/images/banner-shapes/bn-shape8.png';
import bnShape9 from '../../../public/images/banner-shapes/bn-shape9.png';
import bnShape10 from '../../../public/images/banner-shapes/bn-shape10.png';
import bnShape11 from '../../../public/images/banner-shapes/bn-shape11.png';
import bnShape12 from '../../../public/images/banner-shapes/bn-shape12.png';
import bannerImg from '../../../public/images/banner-img1.png';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        className="main-banner" 
        style={{ 
          backgroundImage: `url(/images/main-banner-shape.jpg)` 
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
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
                  <div className="banner-animation-image">
                    {/* Shape Image */}
                    <Image
                      src={bnShape1}
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                      width={204}
                      height={143}
                    />

                    <Image
                      src={bnShape2}
                      className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                      alt="image"
                      width={134}
                      height={333}
                    />

                    <Image
                      src={bnShape3}
                      className="animate__animated animate__fadeInDown animate__delay-0.5s"
                      alt="image"
                      width={67}
                      height={135}
                    />

                    <Image
                      src={bnShape4}
                      className="animate__animated animate__fadeInDown animate__delay-0.5s"
                      alt="image"
                      width={68}
                      height={89}
                    />

                    <Image
                      src={bnShape5}
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                      width={70}
                      height={138}
                    />

                    <Image
                      src={bnShape6}
                      className="animate__animated animate__rollIn animate__delay-0.5s"
                      alt="image"
                      width={195}
                      height={277}
                    />

                    <Image
                      src={bnShape7}
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="image"
                      width={99}
                      height={76}
                    />

                    <Image
                      src={bnShape8}
                      className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                      alt="image"
                      width={181}
                      height={295}
                    />

                    <Image
                      src={bnShape9}
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                      width={231}
                      height={576}
                    />

                    <Image
                      src={bnShape10}
                      className="animate__animated animate__fadeInDown animate__delay-0.5s"
                      alt="image"
                      width={74}
                      height={231}
                    />

                    <Image
                      src={bnShape11}
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                      width={118}
                      height={284}
                    />

                    <Image
                      src={bnShape12}
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="image"
                      width={156}
                      height={140}
                    />

                    {/* Main Image */}
                    <Image
                      src={bannerImg}
                      className="main-pic animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                      width={633}
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
}

export default MainBanner;