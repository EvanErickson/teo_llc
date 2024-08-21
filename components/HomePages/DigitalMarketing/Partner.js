import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const partnersData = [
  {
    id: "1",
    image: "/images/digital-marketing/partner1.png",
    link: "#",
  },
  {
    id: "2",
    image: "/images/digital-marketing/partner2.png",
    link: "#",
  },
  {
    id: "3",
    image: "/images/digital-marketing/partner3.png",
    link: "#",
  },
  {
    id: "4",
    image: "/images/digital-marketing/partner4.png",
    link: "#",
  },
  {
    id: "5",
    image: "/images/digital-marketing/partner5.png",
    link: "#",
  },
  {
    id: "6",
    image: "/images/digital-marketing/partner6.png",
    link: "#",
  },
  {
    id: "7",
    image: "/images/digital-marketing/partner4.png",
    link: "#",
  },
  {
    id: "8",
    image: "/images/digital-marketing/partner5.png",
    link: "#",
  },
];

const Partner = () => {
  return (
    <>
      <div className="partner-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Clients</span>
            <h2>Our Clients</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {partnersData && (
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
                    <div className="partner-item text-center">
                      <a
                        href={value.link}
                        className="d-inline-block"
                        target="_blank"
                      >
                        <Image
                          src={value.image}
                          alt="image"
                          width={155}
                          height={55}
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default Partner;
