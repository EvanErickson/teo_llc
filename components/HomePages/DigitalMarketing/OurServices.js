import React from "react";
import Link from "next/link";
import Image from "next/image";

const ourServicesData = [
  {
    image: "/images/digital-marketing/services-img1.jpg",
    title: "Digital Marketing",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.",
    viewDetailsLink: "/services/service-details/",
    aosDelay: "100",
  },
  {
    image: "/images/digital-marketing/services-img2.jpg",
    title: "Strategy & Planning",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.",
    viewDetailsLink: "/services/service-details/",
    aosDelay: "200",
  },
  {
    image: "/images/digital-marketing/services-img3.jpg",
    title: "Search Engine Optimization",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.",
    viewDetailsLink: "/services/service-details/",
    aosDelay: "300",
  },
];

const OurServices = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">WHAT WE DO</span>
            <h2>All The Services That We Provide to Our Clients</h2>
          </div>

          <div className="row justify-content-center">
            {ourServicesData &&
              ourServicesData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="dm-services-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Link href={value.viewDetailsLink}>
                      <Image
                        src={value.image}
                        alt="image"
                        width={600}
                        height={630}
                      />
                    </Link>
                    <div className="content">
                      <h3>
                        <Link href={value.viewDetailsLink}>{value.title}</Link>
                      </h3>
                      <p>{value.shortText}</p>
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

export default OurServices;
