import React from "react";

const funFactsData = [
  {
    no: "01.",
    number: "2,250",
    title: "Cybersecurity Projects",
    aosDelay: "100",
  },
  {
    no: "02.",
    number: "15,000",
    title: "All Time Clients",
    aosDelay: "200",
  },
  {
    no: "03.",
    number: "160",
    title: "Attacks Blocked",
    aosDelay: "300",
  },
  {
    no: "04.",
    number: "80",
    title: "Experts Team",
    aosDelay: "400",
  },
];

const FunFacts = () => {
  return (
    <>
      <div className="cs-fun-facts-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="cs-single-fun-facts"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="number">{value.no}</div>
                    <h3>
                      {value.number}
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>{value.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
