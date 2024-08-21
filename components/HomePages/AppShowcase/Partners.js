import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const partnersData = [
  {
    image: "/images/app/partner1.png",
  },
  {
    image: "/images/app/partner2.png",
  },
  {
    image: "/images/app/partner3.png",
  },
  {
    image: "/images/app/partner4.png",
  },
  {
    image: "/images/app/partner5.png",
  },
  {
    image: "/images/app/partner6.png",
  },
  {
    image: "/images/app/partner7.png",
  },
  {
    image: "/images/app/partner8.png",
  },
];

const Partners = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
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
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="partner-slides"
          >
            {partnersData &&
              partnersData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="app-partner-item">
                    <Image
                      src={value.image}
                      alt="partner"
                      width={175}
                      height={35}
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

export default Partners;
