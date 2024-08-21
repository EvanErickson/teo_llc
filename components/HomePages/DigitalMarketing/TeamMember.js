import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/digital-marketing/team-img1.jpg",
    name: "Mary K. Austin",
    designation: "CEO",
    aosDelay: "100",

    socialLinks: [
      {
        iconName: "fab fa-facebook-f",
        link: "https://www.facebook.com/",
      },
      {
        iconName: "fab fa-instagram",
        link: "https://www.instagram.com/",
      },
      {
        iconName: "fab fa-twitter",
        link: "https://www.twitter.com/",
      },
    ],
  },
  {
    image: "/images/digital-marketing/team-img2.jpg",
    name: "Christopher Lindsey",
    designation: "Business Consultant",
    aosDelay: "200",

    socialLinks: [
      {
        iconName: "fab fa-facebook-f",
        link: "https://www.facebook.com/",
      },
      {
        iconName: "fab fa-instagram",
        link: "https://www.instagram.com/",
      },
      {
        iconName: "fab fa-twitter",
        link: "https://www.twitter.com/",
      },
    ],
  },
  {
    image: "/images/digital-marketing/team-img3.jpg",
    name: "Douglas Burgess",
    designation: "Manager",
    aosDelay: "300",

    socialLinks: [
      {
        iconName: "fab fa-facebook-f",
        link: "https://www.facebook.com/",
      },
      {
        iconName: "fab fa-instagram",
        link: "https://www.instagram.com/",
      },
      {
        iconName: "fab fa-twitter",
        link: "https://www.twitter.com/",
      },
    ],
  },
];

const TeamMember = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">MEET THE TEAM</span>
            <h2>Meet Members Of Our Exclusive Team For Startup Business</h2>
          </div>

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <div
                    className="dm-team-member"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="image"
                      width={500}
                      height={526}
                    />

                    <div className="content">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>

                      <ul className="social">
                        {value.socialLinks.map((value, i) => (
                          <li key={i}>
                            <a href={value.link} target="_blank">
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

export default TeamMember;
