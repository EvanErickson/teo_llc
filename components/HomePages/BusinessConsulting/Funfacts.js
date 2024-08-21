import React from "react";

const funfactsData = [
  {
    number: "275",
    title: "Clients Served Globally",
    aosDelay: "100",
  },
  {
    number: "499",
    title: "Successful Projects",
    aosDelay: "200",
  },
  {
    number: "20",
    title: "Years in Business",
    aosDelay: "300",
  },
  {
    number: "100%",
    title: "Success Rate",
    aosDelay: "400",
  },
];

const Funfacts = () => {
  return (
    <>
      <div className="bc-funfacts-area bg-image pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {funfactsData &&
              funfactsData.slice(0, 4).map((value, i) => (
                <div 
                  className="col-lg-3 col-sm-6 col-md-3 col-6" 
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="bc-funfacts-box text-center">
                    <h3>{value.number}</h3>
                    <span className="sub-title">{value.title}</span>
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
