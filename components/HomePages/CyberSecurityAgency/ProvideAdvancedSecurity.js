import React from "react";
import Image from "next/image";

const provideAdvancedSecurityData = [
  {
    image: "/images/cyber-security/leading-technology.png",
    subTitle: "LEADING TECHNOLOGY FIRM",
    title: "Provide Advanced Security For Threat And Effective Protection",
    shortText:
      "We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential.",
    features: [
      {
        text: "Network Detection",
        aosDelay: "100",
      },
      {
        text: "Managing Cloud Security",
        aosDelay: "200",
      },
      {
        text: "Website Hack Repair",
        aosDelay: "300",
      },
      {
        text: "Network Trafic Analysis",
        aosDelay: "400",
      },
      {
        text: "Hybrid Cloud Security",
        aosDelay: "500",
      },
      {
        text: "24/7 Security Support",
        aosDelay: "600",
      },
    ],
  },
];

const ProvideAdvancedSecurity = () => {
  return (
    <>
      {provideAdvancedSecurityData &&
        provideAdvancedSecurityData.map((value, i) => (
          <div className="leading-technology-area pb-100" key={i}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div
                    className="leading-technology-image"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                  >
                    <Image src={value.image} alt="image" width={1135} height={885} />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="leading-technology-content">
                    <span
                      className="sub-title"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      {value.subTitle}
                    </span>

                    <h3
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    >
                      {value.title}
                    </h3>

                    <p
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      {value.shortText}
                    </p>

                    <div className="row justify-content-center mt-2">
                      {value.features.map((value, i) => (
                        <div className="col-lg-6 col-sm-6" key={i}>
                          <div
                            className="features-list"
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay={value.aosDelay}
                          >
                            {value.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProvideAdvancedSecurity;
