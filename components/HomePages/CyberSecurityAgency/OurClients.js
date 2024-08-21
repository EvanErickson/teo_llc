import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const OurClientsData = [
  {
    image: "/images/cyber-security/partner/partner-1.png",
  },
  {
    image: "/images/cyber-security/partner/partner-2.png",
  },
  {
    image: "/images/cyber-security/partner/partner-3.png",
  },
  {
    image: "/images/cyber-security/partner/partner-4.png",
  },
  {
    image: "/images/cyber-security/partner/partner-5.png",
  },
  {
    image: "/images/cyber-security/partner/partner-6.png",
  },
  {
    image: "/images/cyber-security/partner/partner-7.png",
  },
  {
    image: "/images/cyber-security/partner/partner-8.png",
  },
  {
    image: "/images/cyber-security/partner/partner-6.png",
  },
];

const OurClients = () => {
  return (
    <>
      <div className="cs-partner-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="section-title white-color">
            <span className="sub-title">OUR CLIENTS</span>
            <h2>
              Taiker Has Been Trusted <span>Over 2300+</span> Companies In The
              World
            </h2>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 7,
              },
              1400: {
                slidesPerView: 8,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="cs-partner-slides"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {OurClientsData &&
              OurClientsData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="cs-partner-item text-center">
                    <Image
                      src={value.image}
                      alt="image"
                      width={100}
                      height={100}
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurClients;
