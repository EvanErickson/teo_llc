import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import clientImg1 from '../../public/images/clients/client1.png';
import clientImg2 from '../../public/images/clients/client2.png';
import clientImg3 from '../../public/images/clients/client3.png';
import clientImg4 from '../../public/images/clients/client4.png';
import clientImg5 from '../../public/images/clients/client5.png';
import clientImg6 from '../../public/images/clients/client6.png';
import clientImg7 from '../../public/images/clients/client7.png';
import clientImg8 from '../../public/images/clients/client8.png';

const feedbacskData = [
  {
    name: "John Smith",
    designation: "CEO & Founder, Envato",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",

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
    name: "Oliver Smith",
    designation: "React JS Specialist",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",

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
    name: "Thomas John",
    designation: "Angular JS Specialist",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",

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

const FeedbackThree = () => {
  return (
    <>
      <div className="feedback-area feedback-style-3 ptb-100">
        <div className="container">
          <div className="section-title white-color">
            <h2>Trusted by Users</h2>
          </div>

          <div className="feedback-list">
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              modules={[Autoplay, Pagination]}
              className="feedback-slides"
            >
              {feedbacskData &&
                feedbacskData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="single-feedback">
                      <div className="rating">
                        {value.rating.map((value, i) => (
                          <i className={value.iconName} key={i}></i>
                        ))}
                      </div>

                      <p><q>{value.feedbackText}</q></p>

                      <div className="bar"></div>

                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        {/* Client image */}
        <div className="client-image-box">
          <Image
            src={clientImg1}
            className="client1"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            width={234}
            height={235}
          />

          <Image
            src={clientImg2}
            className="client2"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            width={195}
            height={195}
          />

          <Image
            src={clientImg3}
            className="client3"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="400"
            width={199}
            height={199}
          />

          <Image
            src={clientImg4}
            className="client4"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            width={196}
            height={197}
          />

          <Image
            src={clientImg5}
            className="client5"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="600"
            width={201}
            height={202}
          />

          <Image
            src={clientImg6}
            className="client6"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="700"
            width={169}
            height={170}
          />

          <Image
            src={clientImg7}
            className="client7"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="800"
            width={174}
            height={175}
          />

          <Image
            src={clientImg8}
            className="client8"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="900"
            width={218}
            height={218}
          />
        </div>
      </div>
    </>
  );
};

export default FeedbackThree;
