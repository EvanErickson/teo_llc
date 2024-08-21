import React from "react";
import Image from "next/image";

const marketingProcessData = [
  {
    image: "/images/digital-marketing/process1.png",
    title: "Marketing Plan",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    aosDelay: "100",
  },
  {
    image: "/images/digital-marketing/process2.png",
    title: "Marketing Execution",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    aosDelay: "200",
  },
  {
    image: "/images/digital-marketing/process3.png",
    title: "Growth & Scale",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    aosDelay: "300",
  },
];

const MarketingProcess = () => {
  return (
    <>
      <div className="dm-process-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title marketing-color">MARKETING PROCESS</span>
            <h2>We Have The Main Process to Run The Marketing</h2>
          </div>

          <div className="row justify-content-center">
            {marketingProcessData &&
              marketingProcessData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <div
                    className="dm-process-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="image"
                      width={280}
                      height={228}
                    />
                    <h3>{value.title}</h3>
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

export default MarketingProcess;
