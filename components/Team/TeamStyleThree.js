import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/team9.jpg",
    name: "James White",
    designation: "CEO & Founder",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://linkedin.com/",
      },
      {
        iconName: "fa-brands fa-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "fa-brands fa-facebook-f",
        url: "https://facebook.com/",
      },
      {
        iconName: "fa-brands fa-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "fa-brands fa-dribbble",
        url: "https://dribbble.com/",
      },
    ],
  },
  {
    image: "/images/team/team10.jpg",
    name: "Johnson Lee",
    designation: "Backend Specialist",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://linkedin.com/",
      },
      {
        iconName: "fa-brands fa-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "fa-brands fa-facebook-f",
        url: "https://facebook.com/",
      },
      {
        iconName: "fa-brands fa-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "fa-brands fa-dribbble",
        url: "https://dribbble.com/",
      },
    ],
  },
  {
    image: "/images/team/team11.jpg",
    name: "Williams Smith",
    designation: "Front-end Specialist",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://linkedin.com/",
      },
      {
        iconName: "fa-brands fa-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "fa-brands fa-facebook-f",
        url: "https://facebook.com/",
      },
      {
        iconName: "fa-brands fa-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "fa-brands fa-dribbble",
        url: "https://dribbble.com/",
      },
    ],
  },
  {
    image: "/images/team/team12.jpg",
    name: "Johnson",
    designation: "Marketing Manager",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://linkedin.com/",
      },
      {
        iconName: "fa-brands fa-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "fa-brands fa-facebook-f",
        url: "https://facebook.com/",
      },
      {
        iconName: "fa-brands fa-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "fa-brands fa-dribbble",
        url: "https://dribbble.com/",
      },
    ],
  },
  {
    image: "/images/team/team13.jpg",
    name: "Thomas",
    designation: "Office Manager",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://linkedin.com/",
      },
      {
        iconName: "fa-brands fa-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "fa-brands fa-facebook-f",
        url: "https://facebook.com/",
      },
      {
        iconName: "fa-brands fa-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "fa-brands fa-dribbble",
        url: "https://dribbble.com/",
      },
    ],
  },
];

const TeamStyleThree = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Expert Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
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
            }}
            modules={[Navigation]}
            className="team-slider"
          >
            {teamMemberData &&
              teamMemberData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="team-card text-center">
                    <div className="team-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={510}
                        height={550}
                      />

                      <div className="social-links">
                        <div className="d-table">
                          <div className="d-table-cell">
                            <ul>
                              {value.socialLinks.map((value, i) => (
                                <li key={i}>
                                  <a href={value.url} target="_blank">
                                    <i className={value.iconName}></i>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="team-caption">
                      <h3>{value.name}</h3>
                      <p>{value.designation}</p>
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

export default TeamStyleThree;
