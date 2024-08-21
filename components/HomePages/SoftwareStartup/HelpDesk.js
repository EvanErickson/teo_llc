import React from "react";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
  {
    icon: "/images/software/icon1.png",
    title: "Zero Configuration",
    shortText:
      "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis, donec.",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    icon: "/images/software/icon2.png",
    title: "Code Security",
    shortText:
      "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis, donec.",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    icon: "/images/software/icon3.png",
    title: "Team Management",
    shortText:
      "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis, donec.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    icon: "/images/software/icon4.png",
    title: "Access Controlled",
    shortText:
      "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis, donec.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
];

const HelpDesk = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">How Can Help You!</span>
            <h2>We’re helping teams do their best work</h2>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 4).map((value, i) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="software-single-help-desk-box">
                    <div className="icon">
                      <Image
                        src={value.icon}
                        alt="icon"
                        width={80}
                        height={80}
                      />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>
                    <Link href={value.viewDetails} className="link-btn">
                      Learn More <i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpDesk;
