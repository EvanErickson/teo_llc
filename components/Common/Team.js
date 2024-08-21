import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/circle-team1.jpg",
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
    image: "/images/team/circle-team2.jpg",
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
    image: "/images/team/circle-team3.jpg",
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
  {
    image: "/images/team/circle-team4.jpg",
    name: "David Miller",
    designation: "Reactjs Specialist",
    aosDelay: "400",

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

const Team = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Skilled Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="team-card text-center"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="Image"
                      className="rounded-circle"
                      width={260}
                      height={260}
                    />

                    <div className="team-caption">
                      <h3>{value.name}</h3>
                      <p>{value.designation}</p>

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
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
