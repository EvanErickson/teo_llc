import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const feedbacskData = [
  {
    name: "Richard Turner",
    designation: "Director",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur apiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus com modo viverra accumsan lacus vel facilisis.",
    quoteIconBg: "",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    name: "Mary K. Austin",
    designation: "Law Consultant",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur apiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus com modo viverra accumsan lacus vel facilisis.",
    quoteIconBg: "bg-ca83ff",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    name: "Christopher Lindsey",
    designation: "Finance Consultant",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur apiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus com modo viverra accumsan lacus vel facilisis.",
    quoteIconBg: "bg-ff9f07",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    name: "Johnson",
    designation: "React Developer",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur apiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus com modo viverra accumsan lacus vel facilisis.",
    quoteIconBg: "bg-ca83ff",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>Testimonials</h2>
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
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="pp-testimonials-slides"
          >
            {feedbacskData &&
              feedbacskData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className={`pp-testimonials-box ${value.quoteIconBg}`}>
                    <i className="icon fa-solid fa-quote-left"></i>
                    <p>
                      <q>{value.feedbackText}</q>
                    </p>

                    <div className="rating">
                      {value.rating.map((value, i) => (
                        <i className={value.iconName} key={i}></i>
                      ))}
                    </div>

                    <div className="info">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
