import React from "react";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
  {
    image: "/images/business-consulting/services-img1.jpg",
    title: "Sales & Marketing",
    shortText:
      "Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit, sed do eiu smod.",
    serviceDetailsLink: "/services/service-details/",
    aosDelay: "100",
  },
  {
    image: "/images/business-consulting/services-img2.jpg",
    title: "Cost Transformation",
    shortText:
      "Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit, sed do eiu smod.",
    serviceDetailsLink: "/services/service-details/",
    aosDelay: "200",
  },
  {
    image: "/images/business-consulting/services-img3.jpg",
    title: "Sustainability",
    shortText:
      "Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit, sed do eiu smod.",
    serviceDetailsLink: "/services/service-details/",
    aosDelay: "300",
  },
  {
    image: "/images/business-consulting/services-img4.jpg",
    title: "Strategy",
    shortText:
      "Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit, sed do eiu smod.",
    serviceDetailsLink: "/services/service-details/",
    aosDelay: "400",
  },
  {
    image: "/images/business-consulting/services-img5.jpg",
    title: "Customer Experience",
    shortText:
      "Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit, sed do eiu smod.",
    serviceDetailsLink: "/services/service-details/",
    aosDelay: "500",
  },
  {
    image: "/images/business-consulting/services-img6.jpg",
    title: "Profit Planning",
    shortText:
      "Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit, sed do eiu smod.",
    serviceDetailsLink: "/services/service-details/",
    aosDelay: "600",
  },
];

const Services = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR SERVICES</span>
            <h2>Consulting Services</h2>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="bc-services-item"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="image"
                      width={860}
                      height={463}
                    />
                    <h3>{value.title}</h3>
                    
                    <div className="hover-content">
                      <h3>
                        <Link href={value.serviceDetailsLink}>
                          {value.title}
                        </Link>
                      </h3>
                      <p>{value.shortText}</p>
                      <Link
                        href={value.serviceDetailsLink}
                        className="link-btn"
                      >
                        Read More <i className="fas fa-chevron-right"></i>
                      </Link>
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

export default Services;
