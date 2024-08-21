import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const clientFeedbackData = [
  {
    image: "/images/app/user1.jpg",
    name: "Deanna Hodges",
    designation: "Spotify Developer",
    feedbackText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    category: "Theme Customization",

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
    image: "/images/app/user2.jpg",
    name: "Londynn Vargas",
    designation: "PHP Developer",
    feedbackText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    category: "Customer Support",

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
    image: "/images/app/user3.jpg",
    name: "James Andy",
    designation: "Moodle Developer",
    feedbackText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    category: "Theme Customization",

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
    image: "/images/app/user4.jpg",
    name: "David Warner",
    designation: "Python Developer",
    feedbackText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    category: "Theme Customization",

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

const ClientFeedback = () => {
  return (
    <>
      <div className="pb-100">
        <div className="container">
          <div className="section-title">
            <span className="app-sub-title">CLIENT REVIEWS</span>
            <h2>Some of Our Happy Customer Reviews About Our Products</h2>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
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
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="app-screenshots-slides"
          >
            {clientFeedbackData &&
              clientFeedbackData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="app-feedback-box">
                    <div className="client-info">
                      <div className="d-flex align-items-center">
                        <Image
                          src={value.image}
                          alt="user"
                          width={300}
                          height={300}
                        />

                        <div className="title">
                          <h3>{value.name}</h3>
                          <span>{value.designation}</span>
                        </div>
                      </div>
                    </div>
                    <p>
                      <q>{value.feedbackText}</q>
                    </p>
                    <div className="rating d-flex align-items-center justify-content-between">
                      <h5>{value.category}</h5>
                      <div>
                        {value.rating.map((value, i) => (
                          <i className={value.iconName} key={i}></i>
                        ))}
                      </div>
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

export default ClientFeedback;
