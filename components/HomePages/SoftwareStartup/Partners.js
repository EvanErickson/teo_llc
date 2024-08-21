import React from "react";
import Image from "next/image";

const partnersData = [
  {
    image: "/images/software/partner1.png",
    aosDelay: "200",
  },
  {
    image: "/images/software/partner2.png",
    aosDelay: "300",
  },
  {
    image: "/images/software/partner3.png",
    aosDelay: "400",
  },
  {
    image: "/images/software/partner4.png",
    aosDelay: "500",
  },
];

const Partners = () => {
  return (
    <>
      <div className="software-partner-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="partner-title"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Trusted by world famous companies:
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="row justify-content-center align-items-center">
                {partnersData &&
                  partnersData.slice(0, 4).map((value, i) => (
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6" key={i}>
                      <div
                        className="software-partner-item"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay={value.aosDelay}
                      >
                        <Image
                          src={value.image}
                          alt="partner image"
                          width={125}
                          height={35}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
