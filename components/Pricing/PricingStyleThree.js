import React from "react";
import Link from "next/link";

const pricingData = [
  {
    title: "Daily plan",
    price: "120",
    duration: "/Per Day",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    aosDelay: "200",

    priceList: [
      {
        title: "Web Development",
      },
      {
        title: "Email Integration",
      },
      {
        title: "Messenger Integration",
      },
      {
        title: "Mobile + Desktop Apps",
      },
      {
        title: "Quick Responses",
      },
      {
        title: "Drag & Drop Widgets",
      },
      {
        title: "Visitor Notes",
      },
      {
        title: "Google Analytics",
      },
      {
        title: "24/7 Live Chat",
      },
    ],
  },
  {
    title: "Weekly plan",
    price: "840",
    duration: "/Per Week",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    aosDelay: "300",

    priceList: [
      {
        title: "Web Development",
      },
      {
        title: "Email Integration",
      },
      {
        title: "Messenger Integration",
      },
      {
        title: "Mobile + Desktop Apps",
      },
      {
        title: "Quick Responses",
      },
      {
        title: "Drag & Drop Widgets",
      },
      {
        title: "Visitor Notes",
      },
      {
        title: "Google Analytics",
      },
      {
        title: "24/7 Live Chat",
      },
    ],
  },
  {
    title: "Monthly plan",
    price: "3,600",
    duration: "/Per Month",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    aosDelay: "400",

    priceList: [
      {
        title: "Web Development",
      },
      {
        title: "Email Integration",
      },
      {
        title: "Messenger Integration",
      },
      {
        title: "Mobile + Desktop Apps",
      },
      {
        title: "Quick Responses",
      },
      {
        title: "Drag & Drop Widgets",
      },
      {
        title: "Visitor Notes",
      },
      {
        title: "Google Analytics",
      },
      {
        title: "24/7 Live Chat",
      },
    ],
  },
];

const PricingStyleThree = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Choose The Pricing Plan</h2>
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
                    className="single-pricing-table"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="pricing-header">
                      <h3>{value.title}</h3>
                    </div>

                    <div className="price">
                      <sup>$</sup>
                      {value.price} <sub>{value.duration}</sub>
                      <p className="info-text">{value.shortText}</p>
                    </div>

                    <ul className="pricing-features">
                      {value.priceList.map((value, i) => (
                        <li key={i}>
                          <i className="fa-solid fa-circle-check"></i>{" "}
                          {value.title}
                        </li>
                      ))}
                    </ul>

                    <div className="btn-box">
                      <Link href="#" className="btn btn-primary">
                        Select the plan
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

export default PricingStyleThree;
