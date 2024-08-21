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

import leftQuote from '../../public/images/left-quote-white.png';

const feedbacskData = [
  {
    name: "John Smith",
    designation: "CEO & Founder, Envato",
    feedbacskText:
    "Partnering with this agency has been a transformative experience. Their deep understanding of our needs and their innovative solutions have taken our operations to the next level. We’ve seen significant improvements in efficiency and productivity, thanks to their expertise.",
  },
  {
    name: "Oliver Smith",
    designation: "React JS Specialist",
    feedbacskText:
    "The team went above and beyond to deliver a tailored solution that perfectly fits our requirements. Their dedication, attention to detail, and outstanding support made all the difference. We couldn’t have asked for a better experience.",
  },
  {
    name: "Thomas John",
    designation: "Angular JS Specialist",
    feedbacskText:
    "From the start, they impressed us with their professionalism and technical know-how. Their solutions have streamlined our processes and brought real value to our business. We’re grateful for their partnership and highly recommend their services.",
  },
];

const Feedback = () => {
  return (
    <>
      <div className="feedback-area ptb-100">
        <div className="container">
          <div className="feedback-list">
            <div className="quotes-icon">
              <Image src={leftQuote} alt="icon" width={53} height={39} />
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
              slidesPerView={1}
              modules={[Autoplay, Pagination]}
              className="feedback-slides"
            >
              {feedbacskData &&
                feedbacskData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="single-feedback">
                      <p><q>{value.feedbacskText}</q></p>

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
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            width={234}
            height={235}
          />

          <Image
            src={clientImg2}
            className="client2"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            width={195}
            height={195}
          />

          <Image
            src={clientImg3}
            className="client3"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
            width={199}
            height={199}
          />

          <Image
            src={clientImg4}
            className="client4"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            width={196}
            height={197}
          />

          <Image
            src={clientImg5}
            className="client5"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="600"
            width={201}
            height={202}
          />

          <Image
            src={clientImg6}
            className="client6"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="700"
            width={169}
            height={170}
          />

          <Image
            src={clientImg7}
            className="client7"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="800"
            width={174}
            height={175}
          />

          <Image
            src={clientImg8}
            className="client8"
            alt="client"
            data-aos="zoom-in"
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

export default Feedback;
