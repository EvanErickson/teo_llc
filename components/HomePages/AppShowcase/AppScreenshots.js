import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const appScreenshotsData = [
  {
    image: "/images/app/screenshots1.png",
  },
  {
    image: "/images/app/screenshots2.png",
  },
  {
    image: "/images/app/screenshots3.png",
  },
  {
    image: "/images/app/screenshots4.png",
  },
  {
    image: "/images/app/screenshots5.png",
  },
  {
    image: "/images/app/screenshots4.png",
  },
];

const AppScreenshots = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="app-sub-title">APP SCREENS</span>
            <h2>Beautifully Crafted All App Screenshots</h2>
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
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="app-screenshots-slides"
          >
            {appScreenshotsData &&
              appScreenshotsData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="app-screenshot-item">
                    <Image
                      src={value.image}
                      alt="screenshots"
                      width={528}
                      height={1114}
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

export default AppScreenshots;
