import React from "react";

const topFeaturesData = [
  {
    title: "1. High Quality Services",
    aosDelay: "100"
  },
  {
    title: "2. Effective Protection",
    aosDelay: "200"
  },
  {
    title: "3. Provide Advanced Security",
    aosDelay: "300"
  },
  {
    title: "4. Complete Website Security",
    aosDelay: "400"
  },
];

const TopFeatures = () => {
  return (
    <>
      <div className="cs-card-area">
        <div className="container">
          <div className="row justify-content-center">
            {topFeaturesData &&
              topFeaturesData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div 
                    className="cs-card-content"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
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

export default TopFeatures;
