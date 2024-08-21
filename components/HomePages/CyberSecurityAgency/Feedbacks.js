import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import lineBg from "../../../public/images/cyber-security/line-bg.png";

const feedbacskData = [
  {
    image: "/images/cyber-security/user1.jpg",
    name: "Jason Roy",
    designation: "CEO & Founder, Envato",
    feedbackText:
      "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.",

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
    image: "/images/cyber-security/user2.jpg",
    name: "James Anderson",
    designation: "ReactJS Developer",
    feedbackText:
      "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.",

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
    image: "/images/cyber-security/user3.jpg",
    name: "Gilbert",
    designation: "Marketing Manager",
    feedbackText:
      "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.",

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
    image: "/images/cyber-security/user2.jpg",
    name: "Nathaniel",
    designation: "Web Developer",
    feedbackText:
      "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.",

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
    image: "/images/cyber-security/user1.jpg",
    name: "Lewis",
    designation: "Web Developer",
    feedbackText:
      "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.",

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

const Feedbacks = () => {
  return (
    <>
      <div className="cs-feedback-area pb-100">
        <div className="container">
          <div className="section-title white-color">
            <span className="sub-title">THOUGHTS OF OUR CLIENT</span>
            <h2>
              These People Have <span>Already</span> Experienced Our Review
            </h2>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="cs-feedback-slides"
          >
            {feedbacskData &&
              feedbacskData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="cs-single-feedback with-black-color">
                    <ul className="rating">
                      {value.rating.map((value, i) => (
                        <li key={i}>
                          <i className={value.iconName}></i>
                        </li>
                      ))}
                    </ul>

                    <p>
                      <q>{value.feedbackText}</q>
                    </p>

                    <div className="client-info">
                      <Image
                        src={value.image}
                        alt="image"
                        width={150}
                        height={150}
                      />
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>

                    <div className="quote">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="cs-feedback-line-bg">
          <Image src={lineBg} alt="image" width={1920} height={315} />
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
