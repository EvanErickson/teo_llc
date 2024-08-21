import React from "react";
import Link from "next/link";
import Image from "next/image";

const overviewData = [
  {
    image: "/images/cyber-security/overview-1.png",
    title: "Personal Online Protection Everywhere We Go",
    url: "/contact-us/",
    aosDelay: "100",
  },
  {
    image: "/images/cyber-security/overview-2.png",
    title: "Simple Solution For Your Business's Security",
    url: "/contact-us/",
    aosDelay: "200",
  },
];

const Overview = () => {
  return (
    <>
      <div className="cs-overview-area pb-70">
        <div className="container">
          <div className="row align-items-center">
            {overviewData &&
              overviewData.slice(0, 2).map((value, i) => (
                <div className="col-lg-6 col-md-12" key={i}>
                  <div
                    className="cs-overview-item"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-4 col-md-6">
                        <div className="cs-overview-image">
                          <Image
                            src={value.image}
                            alt="image"
                            width={200}
                            height={155}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-6">
                        <div className="cs-overview-content">
                          <h3>{value.title}</h3>
                          <Link href={value.url} className="get-started-btn">
                            GET STARTED
                          </Link>
                        </div>
                      </div>
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

export default Overview;
