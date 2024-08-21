import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const myBestClientData = [
  {
    image: "/images/digital-marketing/partner1.png",
  },
  {
    image: "/images/digital-marketing/partner2.png",
  },
  {
    image: "/images/digital-marketing/partner3.png",
  },
  {
    image: "/images/digital-marketing/partner4.png",
  },
  {
    image: "/images/digital-marketing/partner5.png",
  },
  {
    image: "/images/digital-marketing/partner6.png",
  },
  {
    image: "/images/digital-marketing/partner4.png",
  },
];

const MyBestClient = () => {
  return (
    <>
      <div className="pp-partner-area ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <h2>My Best Clients</h2>
          </div>

          <Swiper
            navigation={true}
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
            {myBestClientData &&
              myBestClientData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="partner-item text-center">
                    <Image
                      src={value.image}
                      alt="image"
                      width={155}
                      height={45}
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

export default MyBestClient;
