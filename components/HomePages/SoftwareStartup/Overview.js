import React from "react";
import Image from "next/image";

// Software Intregrations
const softwareIntregrationsData = [
  {
    image: "/images/software/overview1.png",
    subTitle: "Software Intregrations",
    title: "Your valuable helping hand will find here",
    aosDelay: "100",

    overviewList: [
      {
        title: "Marketplace System",
        aosDelay: "200",
      },
      {
        title: "Management System",
        aosDelay: "300",
      },
      {
        title: "Remote System",
        aosDelay: "400",
      },
      {
        title: "File System",
        aosDelay: "500",
      },
    ],
  },
];

// Team Intregrations
const teamIntregrationsData = [
  {
    image: "/images/software/overview2.png",
    subTitle: "Team Intregrations",
    title: "It is an easy solution for a very large solution",
    aosDelay: "100",

    overviewList: [
      {
        title: "Business Solution",
        aosDelay: "200",
      },
      {
        title: "Management Support",
        aosDelay: "300",
      },
      {
        title: "Enterprise Account",
        aosDelay: "400",
      },
      {
        title: "Market Analysis",
        aosDelay: "500",
      },
    ],
  },
];

const Overview = () => {
  return (
    <>
      <div className="software-overview-area ptb-100 bg-f9f9f9">
        <div className="container">
          {softwareIntregrationsData &&
            softwareIntregrationsData.map((value, i) => (
              <div className="software-overview-box" key={i}>
                <div className="row align-items-center">
                  <div
                    className="col-lg-6 col-md-12 overview-image left-img"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={value.image}
                      alt="Software Intregrations"
                      width={642}
                      height={704}
                    />
                  </div>

                  <div className="col-lg-6 col-md-12 overview-content">
                    <span className="sub-title">{value.subTitle}</span>

                    <h2>{value.title}</h2>

                    <ul className="overview-list">
                      {value.overviewList.map((value, i) => (
                        <li
                          key={i}
                          data-aos="fade-in"
                          data-aos-duration="1000"
                          data-aos-delay={value.aosDelay}
                        >
                          <span>
                            <i className="fa-solid fa-check"></i>
                            {value.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

          {teamIntregrationsData &&
            teamIntregrationsData.map((value, i) => (
              <div className="software-overview-box" key={i}>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 overview-content">
                    <span className="sub-title">{value.subTitle}</span>

                    <h2>{value.title}</h2>

                    <ul className="overview-list">
                      {value.overviewList.map((value, i) => (
                        <li
                          key={i}
                          data-aos="fade-in"
                          data-aos-duration="1000"
                          data-aos-delay={value.aosDelay}
                        >
                          <span>
                            <i className="fa-solid fa-check"></i>
                            {value.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="col-lg-6 col-md-12 overview-image right-img"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={value.image}
                      alt="Software Intregrations"
                      width={697}
                      height={697}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Overview;
