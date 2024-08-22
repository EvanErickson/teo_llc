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
  {
    iconName: "pe-7s-headphones bg-6610f2",
    title: "IT Consultancy",
    shortText:
    "Professional IT consulting to address technical challenges and implement innovative technology solutions.",
    viewDetails: "/services/service-details/",
    aosDelay: "700",
  },
  {
    iconName: "pe-7s-users bg-13c4a1",
    title: "Social Marketing",
    shortText:
    "Effective social media strategies to enhance brand visibility and engagement across all platforms.",
    viewDetails: "/services/service-details/",
    aosDelay: "800",
  },
  {
    iconName: "pe-7s-comment bg-fc3549",
    title: "Admin Support",
    shortText:
    "Efficient administrative support services to manage tasks, streamline processes, and boost productivity.",
    viewDetails: "/services/service-details/",
    aosDelay: "900",
  },
];
const ServicesStyleTwo = () => {
  return (
    <>
      <div className="bg-fcfbfb ptb-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {servicesData &&
              servicesData.map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-up"
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

export default ServicesStyleTwo;
