import React from "react";

const funFactsData = [
  {
    iconName: "pe-7s-like",
    number: "799",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-diamond",
    number: "499",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-portfolio",
    number: "799",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    aosDelay: "300",
  },
];

const FunFacts = () => {
  return (
    <>
      <div className="pt-100 pb-70 bg-fcfbfb">
        <div className="container">
          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div
                    className="funfact-card"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>
                      {value.number} <span>k</span>
                    </h3>
                    <p>{value.shortText}</p>
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
