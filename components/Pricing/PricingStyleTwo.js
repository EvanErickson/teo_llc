import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const monthlyPricingData = [
  {
    title: "Basic Plan",
    price: "99",
    duration: "/Monthly",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    aosDelay: "200",

    priceList: [
      {
        title: "24/7 Live Chat",
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
        title: "Google Analytics",
      },
      {
        title: "Monthly Reports and Analytics",
      },
    ],
  },
  {
    title: "Professional Plan",
    price: "299",
    duration: "/Monthly",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    aosDelay: "300",

    priceList: [
      {
        title: "24/7 Live Chat",
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
        title: "Google Analytics",
      },
      {
        title: "Monthly Reports and Analytics",
      },
    ],
  },
  {
    title: "Business Plan",
    price: "399",
    duration: "/Monthly",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    aosDelay: "400",

    priceList: [
      {
        title: "24/7 Live Chat",
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
        title: "Google Analytics",
      },
      {
        title: "Monthly Reports and Analytics",
      },
    ],
  },
];

const yearlyPricingData = [
  {
    title: "Basic Plan",
    price: "199",
    duration: "/Yearly",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    aosDelay: "200",

    priceList: [
      {
        title: "24/7 Live Chat",
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
        title: "Google Analytics",
      },
      {
        title: "Monthly Reports and Analytics",
      },
    ],
  },
  {
    title: "Professional Plan",
    price: "399",
    duration: "/Yearly",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    aosDelay: "300",

    priceList: [
      {
        title: "24/7 Live Chat",
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
        title: "Google Analytics",
      },
      {
        title: "Monthly Reports and Analytics",
      },
    ],
  },
  {
    title: "Business Plan",
    price: "499",
    duration: "/Yearly",
    shortText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    aosDelay: "400",

    priceList: [
      {
        title: "24/7 Live Chat",
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
        title: "Google Analytics",
      },
      {
        title: "Monthly Reports and Analytics",
      },
    ],
  },
];

const PricingStyleTwo = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Choose The Pricing Plan</h2>
          </div>

          <div className="pricing-list-tab">
            <Tabs>
              <TabList>
                <Tab>
                  <i className="fa-solid fa-calendar-days"></i> Monthly
                </Tab>
                <Tab>
                  <i className="fa-solid fa-calendar-days"></i> Yearly
                </Tab>
              </TabList>

              <TabPanel>
                <div className="row justify-content-center">
                  {monthlyPricingData &&
                    monthlyPricingData.slice(0, 3).map((value, i) => (
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
                              <i className="bx bxs-hot"></i>
                              Try It Free Now
                              <span></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  {yearlyPricingData &&
                    yearlyPricingData.slice(0, 3).map((value, i) => (
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
                              <i className="bx bxs-hot"></i>
                              Try It Free Now
                              <span></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleTwo;
