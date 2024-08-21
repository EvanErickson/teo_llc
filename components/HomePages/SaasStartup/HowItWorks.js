import React from "react";
import Image from "next/image";

import howItWorksImg from "../../../public/images/saas-startup/how-it-works.png";

const howItWorksData = [
  {
    iconName: "fa-solid fa-chart-line",
    title: "Advanced Analytics",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-user-lock",
    title: "High Scalability",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-arrows-rotate",
    title: "Automatic Updates",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    aosDelay: "300",
  },
];

const HowItWorks = () => {
  return (
    <>
      <div className="bg-dark ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">HOW IT WORKS</span>
            <h2>One Of The Three Main Categories Of SaaS Solution</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="saas-how-it-works-content white-color">
                <ul>
                  {howItWorksData &&
                    howItWorksData.slice(0, 3).map((value, i) => (
                      <li
                        key={i}
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay={value.aosDelay}
                      >
                        <i className={`icon ${value.iconName}`}></i>
                        <h3>{value.title}</h3>
                        <p>{value.shortText}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="saas-how-it-works-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image
                  src={howItWorksImg}
                  alt="image"
                  width={600}
                  height={444}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
