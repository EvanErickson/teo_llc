import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import videoThumbImg from "../../../public/images/saas-startup/video-img.jpg";

const testimonialsData = [
  {
    image: "/images/saas-startup/user1.jpg",
    name: "Allan Morris",
    designation: "Director",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci dunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
  {
    image: "/images/saas-startup/user2.jpg",
    name: "Sarah Taylor",
    designation: "Manager",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci dunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
  {
    image: "/images/saas-startup/user3.jpg",
    name: "James Andy",
    designation: "CEO",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci dunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
];

const Testimonials = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="saas-testimonials-area bg-dark pb-100">
        <div className="container">
          <div className="saas-video-box">
            <Image src={videoThumbImg} alt="image" width={1230} height={450} />

            <div
              onClick={() => setToggler(!toggler)}
              className="video-btn popup-video"
            >
              <i className="fas fa-play"></i>
            </div>
          </div>

          <div className="saas-testimonials">
            <Swiper
              navigation={true}
              spaceBetween={20}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="saas-testimonials-slides"
            >
              {testimonialsData &&
                testimonialsData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="saas-testimonials-item">
                      <div className="info d-flex align-items-center">
                        <Image
                          src={value.image}
                          alt="image"
                          width={300}
                          height={300}
                        />
                        
                        <div className="title">
                          <h3>{value.name}</h3>
                          <span>{value.designation}</span>
                        </div>
                      </div>
                      <p>
                        <q>{value.feedbackText}</q>
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
