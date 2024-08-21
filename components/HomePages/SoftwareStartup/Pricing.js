import React from "react";
import Link from "next/link";

const pricingData = [
  {
    title: "Small Team",
    shortText: "Powerful & awesome elements",
    price: "49",
    duration: "/Monthly",
    btnText: "Purchage Plan",
    btnLink: "/contact-us/",
    aosDelay: "100",

    priceList: [
      {
        title: "Up to 10 Website",
      },
      {
        title: "Lifetime Free Support",
      },
      {
        title: "10 GB Dedicated Hosting Free",
      },
      {
        title: "24/7 Support",
      },
      {
        title: "SEO Optimized",
      },
      {
        title: "Live Support",
      },
    ],
  },
  {
    title: "Business Plan",
    shortText: "Powerful & awesome elements",
    price: "69",
    duration: "/Monthly",
    btnText: "Purchage Plan",
    btnLink: "/contact-us/",
    aosDelay: "200",

    priceList: [
      {
        title: "Up to 80 Website",
      },
      {
        title: "Lifetime Free Support",
      },
      {
        title: "80 GB Dedicated Hosting Free",
      },
      {
        title: "24/7 Support",
      },
      {
        title: "SEO Optimized",
      },
      {
        title: "Live Support",
      },
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <div className="ptb-100 pb-70 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div
                className="section-title text-start"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <span className="sub-title">Pricing Table</span>
                <h2>No Hidden Charge Applied, Choose Your Plan</h2>
              </div>
            </div>

            <div className="col-xl-8 col-lg-12 col-md-12">
              <div className="row justify-content-center">
                {pricingData &&
                  pricingData.slice(0, 2).map((value, i) => (
                    <div className="col-lg-6 col-md-6" key={i}>
                      <div
                        className="software-pricing-box"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={value.aosDelay}
                      >
                        <h3>{value.title}</h3>
                        <p>{value.shortText}</p>

                        <div className="price">
                          ${value.price}
                          <span>{value.duration}</span>
                        </div>

                        <Link href={value.btnLink} className="software-btn">
                          {value.btnText}{" "}
                          <i className="fa-solid fa-angles-right"></i>
                        </Link>

                        <ul className="features-list">
                          {value.priceList.map((value, i) => (
                            <li key={i}>
                              <i className="fa-solid fa-check"></i>
                              {value.title}
                            </li>
                          ))}
                        </ul>
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

export default Pricing;
