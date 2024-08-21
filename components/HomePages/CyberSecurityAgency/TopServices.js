import React from "react";
import Link from "next/link";

const topServicesData = [
  {
    image: "/images/cyber-security/features/features-1.jpg",
    title: "Application Security",
    shortText:
      "Lorem ipsum dolor sit amLorem ipsum dolor sit amet is consectetur adipiscing elit sed do.",
    btnText: "GET STARTED",
    btnLink: "/services/service-details/",
    bgIconName: "fa-solid fa-lock",
    aosDelay: "100",
  },
  {
    image: "/images/cyber-security/features/features-2.jpg",
    title: "Cloud Security",
    shortText:
      "Lorem ipsum dolor sit amLorem ipsum dolor sit amet is consectetur adipiscing elit sed do.",
    btnText: "GET STARTED",
    btnLink: "/services/service-details/",
    bgIconName: "fa-solid fa-cloud",
    aosDelay: "200",
  },
  {
    image: "/images/cyber-security/features/features-3.jpg",
    title: "Infrastructure Security",
    shortText:
      "Lorem ipsum dolor sit amLorem ipsum dolor sit amet is consectetur adipiscing elit sed do.",
    btnText: "GET STARTED",
    btnLink: "/services/service-details/",
    bgIconName: "fa-solid fa-shield",
    aosDelay: "300",
  },
];

const TopServices = () => {
  return (
    <>
      <div className="cs-features-area">
        <div className="container-fluid">
          <div className="row justify-content-center">
            {topServicesData &&
              topServicesData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-sm-6 p-0" key={i}>
                  <div
                    className="cs-features-item"
                    style={{
                      backgroundImage: `url(${value.image})`,
                    }}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="content">
                      <h3>{value.title}</h3>
                      <p>{value.shortText}</p>
                      <Link href={value.btnLink} className="get-started-btn">
                        {value.btnText}
                      </Link>
                    </div>
                    <div className="bg-icon">
                      <i className={value.bgIconName}></i>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopServices;
