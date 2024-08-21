import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "fa-solid fa-gear",
    title: "Product Engineering",
    shortText:
      "Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    serviceDetailsLink: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-building-lock",
    title: "Security Design",
    shortText:
      "Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    serviceDetailsLink: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-certificate",
    title: "License Management",
    shortText:
      "Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    serviceDetailsLink: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "fa-solid fa-file-pen",
    title: "Release Planning",
    shortText:
      "Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    serviceDetailsLink: "/services/service-details/",
    aosDelay: "400",
  },
];

const Services = () => {
  return (
    <>
      <div className="bg-dark with-black-border pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR SERVICES</span>
            <h2>Powerful Services Offered in SaaS Application Development</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 4).map((value, i) => (
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12" key={i}>
                  <div
                    className="saas-services-box color-white"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={`icon ${value.iconName}`}></i>
                    <h3>
                      <Link href={value.serviceDetailsLink}>{value.title}</Link>
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

export default Services;
