import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "Business Consultancy",
    shortText:
    "Strategic advice to streamline operations, enhance efficiency, and achieve business goals effectively.",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Web Development",
    shortText:
    "Custom web solutions designed to build engaging and responsive websites tailored to your needs.",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Digital Marketing",
    shortText:
    "Comprehensive digital marketing strategies to increase your online presence and drive targeted traffic.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Mobile App Development",
    shortText:
    "Expertly crafted mobile applications that provide seamless user experiences across all devices.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "eCommerce Development",
    shortText:
    "Build and optimize your online store with robust eCommerce solutions to drive sales and growth.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Marketing & Reporting",
    shortText:
    "Data-driven marketing campaigns with detailed reporting to measure success and refine strategies.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
];

const Services = () => {
  return (
    <>
      <div className="bg-fcfbfb ptb-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 
                  col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one white-bg">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
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
