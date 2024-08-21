import React from "react";
import Image from "next/image";

const workProcessData = [
  {
    title: "Our Work Process",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/man-with-mobile.png",
    circleImage: "/images/circle.png",

    list: [
      {
        iconName: "pe-7s-display1",
        title: "Surface",
        text: "Visual Design",
        aosDelay: "100",
      },
      {
        iconName: "pe-7s-display2",
        title: "Skeleton",
        text: "Wireframes",
        aosDelay: "200",
      },
      {
        iconName: "pe-7s-airplay",
        title: "Structure",
        text: "Screen Flow",
        aosDelay: "300",
      },
      {
        iconName: "pe-7s-note2",
        title: "Scope",
        text: "Requirements",
        aosDelay: "400",
      },
      {
        iconName: "pe-7s-light",
        title: "User Research",
        text: "User Research",
        aosDelay: "500",
      },
      {
        iconName: "pe-7s-sun",
        title: "Implement",
        text: "Lunch/Analyse",
        aosDelay: "600",
      },
    ],
  },
];

const WorkProcess = () => {
  return (
    <>
      {workProcessData &&
        workProcessData.map((value, i) => (
          <section className="work-process-area ptb-100" key={i}>
            <div className="container">
              <div className="section-title">
                <h2>{value.title}</h2>
                <p>{value.shortText}</p>
              </div>

              <div className="work-process">
                <div
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <Image
                    src={value.image}
                    alt="image"
                    width={492}
                    height={941}
                  />
                </div>

                <div className="work-process-list">
                  {value.list.slice(0, 6).map((value, i) => (
                    <div
                      className="single-work-process"
                      key={i}
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay={value.aosDelay}
                    >
                      <div className="icon">
                        <i className={value.iconName}></i>
                      </div>
                      <h3>{value.title}</h3>
                      <span>{value.text}</span>
                    </div>
                  ))}
                </div>

                <Image
                  src={value.circleImage}
                  className="rotateme circle-image"
                  alt="image"
                  width={905}
                  height={908}
                />
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default WorkProcess;
