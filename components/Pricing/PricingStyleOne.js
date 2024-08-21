import React from "react";
import Link from "next/link";

const pricingData = [
  {
    title: "Basic Plan",
    price: "59",
    duration: "/Monthly",
    aosDelay: "100",
    activeClass: "",

    priceList: [
      {
        title: "5 GB Bandwidth",
      },
      {
        title: "Highest Speed",
      },
      {
        title: "1 GB Storage",
      },
      {
        title: "Unlimited Website",
      },
      {
        title: "Unlimited Users",
      },
      {
        title: "24x7 Great Support",
      },
      {
        title: "Data Security and Backups",
      },
      {
        title: "Monthly Reports and Analytics",
      },
    ],
  },
  {
    title: "Advanced Plan",
    price: "79",
    duration: "/Monthly",
    aosDelay: "200",
    activeClass: "active-plan",

    priceList: [
      {
        title: "10 GB Bandwidth",
      },
      {
        title: "Highest Speed",
      },
      {
        title: "5 GB Storage",
      },
      {
        title: "Unlimited Website",
      },
      {
        title: "Unlimited Users",
      },
      {
        title: "24x7 Great Support",
      },
      {
        title: "Data Security and Backups",
      },
      {
        title: "Monthly Reports and Analytics",
      },
    ],
  },
  {
    title: "Expert Plan",
    price: "99",
    duration: "/Monthly",
    aosDelay: "300",
    activeClass: "",

    priceList: [
      {
        title: "15 GB Bandwidth",
      },
      {
        title: "Highest Speed",
      },
      {
        title: "10 GB Storage",
      },
      {
        title: "Unlimited Website",
      },
      {
        title: "Unlimited Users",
      },
      {
        title: "24x7 Great Support",
      },
      {
        title: "Data Security and Backups",
      },
      {
        title: "Monthly Reports and Analytics",
      },
    ],
  },
];

const PricingStyleOne = () => {
  return (
    <>
      <div className="pricing-area ptb-100 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Pricing Plans</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {pricingData &&
              pricingData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className={`pricing-table ${value.activeClass}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="pricing-header">
                      <h3>{value.title}</h3>
                    </div>

                    <div className="price">
                      <span>
                        <sup>$</sup>
                        {value.price}
                        <span>{value.duration}</span>
                      </span>
                    </div>

                    <div className="pricing-features">
                      <ul>
                        {value.priceList.map((value, i) => (
                          <li key={i}>{value.title}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pricing-footer">
                      <Link href="#" className="btn btn-primary">
                        Select Plan
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

export default PricingStyleOne;
