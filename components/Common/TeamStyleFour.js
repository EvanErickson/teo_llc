import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/team1.jpg",
    name: "Jos Buttler",
    designation: "UI/UX Designer",
    email: "contactJosButtler@gmail.com",
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
    image: "/images/team/team2.jpg",
    name: "Smith John",
    designation: "Marketing Specialist",
    email: "contactJohn@gmail.com",
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
    image: "/images/team/team3.jpg",
    name: "Nick Leaver",
    designation: "QA Specialist",
    email: "contactNick@gmail.com",
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
    image: "/images/team/team4.jpg",
    name: "David Miller",
    designation: "Creative Director",
    email: "contactMiller@gmail.com",
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

const TeamStyleFour = () => {
  return (
    <>
      <div className="team-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Creative Team</h2>
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
                    className="single-team"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="team-img">
                      <Image
                        src={value.image}
                        alt="Team Image"
                        width={263}
                        height={290}
                      />

                      <div className="overlay">
                        <p>
                          Email: <span>{value.email}</span>
                        </p>

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

                    <div className="team-content">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
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

export default TeamStyleFour;
