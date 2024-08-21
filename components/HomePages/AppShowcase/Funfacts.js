import React from "react";

const funFactsData = [
  {
    iconName: "fa-solid fa-cloud-arrow-down",
    title: "Total Downloads",
    number: "10M",
    aosDelay: "100",
    bgColor: "",
  },
  {
    iconName: "fa-solid fa-star",
    title: "Total Reviews",
    number: "799K",
    aosDelay: "200",
    bgColor: "bg1",
  },
  {
    iconName: "fa-solid fa-globe",
    title: "Worldwide Countries",
    number: "150+",
    aosDelay: "300",
    bgColor: "bg2",
  },
  {
    iconName: "fa-solid fa-user-check",
    title: "Active Users",
    number: "5M",
    aosDelay: "400",
    bgColor: "bg3",
  },
];

const Funfacts = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.map((value, i) => (
                <div className="col-lg-3 col-sm-6 col-md-6" key={i}>
                  <div
                    className={`app-funfacts-box ${value.bgColor}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="icon">
                      <i className={value.iconName}></i>
                    </div>
                    <p>{value.title}</p>
                    <h3>{value.number}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Funfacts;
