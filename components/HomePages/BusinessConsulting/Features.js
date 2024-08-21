import React from "react";

const featuresData = [
  {
    iconName: "fa-solid fa-chart-bar",
    title: "Advanced Analytics",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-lightbulb",
    title: "Business Innovation",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-arrow-up-right-dots",
    title: "Growth Consulting",
    aosDelay: "300",
  },
  {
    iconName: "fa-solid fa-users-rays",
    title: "Sales Consulting",
    aosDelay: "400",
  },
];

const Features = () => {
  return (
    <>
      <div className="bg-1b2232 pt-70 pb-40">
        <div className="container">
          <div className="row justify-content-center">
            {featuresData &&
              featuresData.slice(0, 4).map((value, i) => (
                <div
                  className="col-lg-3 col-md-3 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="bc-features-item">
                    <i className={`icon ${value.iconName}`}></i>
                    <h3>{value.title}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
