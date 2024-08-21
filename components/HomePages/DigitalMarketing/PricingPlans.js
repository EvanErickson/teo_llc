import React from "react";
import Link from "next/link";

const pricingData = [
  {
    price: "19",
    duration: "/Monthly",
    title: "Basic",
    aosDelay: "100",

    priceList: [
      {
        title: "Get a Free Account",
        iconName: "fas fa-check",
      },
      {
        title: "Own Analytics Platform",
        iconName: "fas fa-check",
      },
      {
        title: "Live Chat Support",
        iconName: "fas fa-check",
      },
      {
        title: "Optimize Hashtags",
        iconName: "fas fa-times close",
      },
      {
        title: "Account Manager",
        iconName: "fas fa-times close",
      },
      {
        title: "24/7 Support",
        iconName: "fas fa-times close",
      },
    ],
  },
  {
    price: "29",
    duration: "/Monthly",
    title: "Professional",
    aosDelay: "200",

    priceList: [
      {
        title: "Get a Free Account",
        iconName: "fas fa-check",
      },
      {
        title: "Own Analytics Platform",
        iconName: "fas fa-check",
      },
      {
        title: "Live Chat Support",
        iconName: "fas fa-check",
      },
      {
        title: "Optimize Hashtags",
        iconName: "fas fa-check",
      },
      {
        title: "Account Manager",
        iconName: "fas fa-times close",
      },
      {
        title: "24/7 Support",
        iconName: "fas fa-times close",
      },
    ],
  },
  {
    price: "39",
    duration: "/Monthly",
    title: "Enterprise",
    aosDelay: "300",

    priceList: [
      {
        title: "Get a Free Account",
        iconName: "fas fa-check",
      },
      {
        title: "Own Analytics Platform",
        iconName: "fas fa-check",
      },
      {
        title: "Live Chat Support",
        iconName: "fas fa-check",
      },
      {
        title: "Optimize Hashtags",
        iconName: "fas fa-check",
      },
      {
        title: "Account Manager",
        iconName: "fas fa-check",
      },
      {
        title: "24/7 Support",
        iconName: "fas fa-check",
      },
    ],
  },
];

const PricingPlans = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">CHOOSE A PLAN</span>
            <h2>Our Pricing Plans</h2>
          </div>

          <div className="row justify-content-center">
            {pricingData &&
              pricingData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="dm-pricing-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="pricing-header">
                      <h3>
                        ${value.price}
                        <span>{value.duration}</span>
                      </h3>
                      <span className="sub-title">{value.title}</span>
                    </div>

                    <ul className="features-list">
                      {value.priceList.map((value, i) => (
                        <li key={i}>
                          <i className={value.iconName}></i>
                          {value.title}
                        </li>
                      ))}
                    </ul>

                    <Link href="#" className="default-btn-two">
                      Purchase Now
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

export default PricingPlans;
