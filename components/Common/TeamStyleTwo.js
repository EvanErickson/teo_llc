import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/team9.jpg",
    name: "James White",
    designation: "CEO & Founder",
    aosDelay: "100",

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
    aosDelay: "200",

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
    aosDelay: "300",

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

const TeamStyleTwo = () => {
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

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div
                    className="team-card text-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
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
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamStyleTwo;
