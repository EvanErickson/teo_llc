import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const monthlyPricingData = [
  {
    title: "Starter",
    price: "29",
    duration: "/Monthly",
    btnText: "Choose Plan",
    btnLink: "#",
    aosDelay: "100",

    lists: [
      {
        title: "7 Days Free Trail",
        unactiveCalss: "",
      },
      {
        title: "App-In-Purchase",
        unactiveCalss: "",
      },
      {
        title: "Webmail Access",
        unactiveCalss: "",
      },
      {
        title: "Unlimited Attachment",
        unactiveCalss: "",
      },
      {
        title: "100% Safe & Secure",
        unactiveCalss: "",
      },
      {
        title: "No Hidden Charges",
        unactiveCalss: "unactive",
      },
    ],
  },
  {
    title: "Professional",
    price: "39",
    duration: "/Monthly",
    btnText: "Choose Plan",
    btnLink: "#",
    aosDelay: "200",

    lists: [
      {
        title: "One Time Purchase",
        unactiveCalss: "",
      },
      {
        title: "App-In-Purchase",
        unactiveCalss: "",
      },
      {
        title: "Webmail Access",
        unactiveCalss: "",
      },
      {
        title: "Unlimited Attachment",
        unactiveCalss: "",
      },
      {
        title: "100% Safe & Secure",
        unactiveCalss: "",
      },
      {
        title: "No Hidden Charges",
        unactiveCalss: "",
      },
    ],
  },
  {
    title: "Premium",
    price: "49",
    duration: "/Monthly",
    btnText: "Choose Plan",
    btnLink: "#",
    aosDelay: "300",

    lists: [
      {
        title: "Unlimited Purchase",
        unactiveCalss: "",
      },
      {
        title: "App-In-Purchase",
        unactiveCalss: "",
      },
      {
        title: "Webmail Access",
        unactiveCalss: "",
      },
      {
        title: "Unlimited Attachment",
        unactiveCalss: "",
      },
      {
        title: "100% Safe & Secure",
        unactiveCalss: "",
      },
      {
        title: "No Hidden Charges",
        unactiveCalss: "",
      },
    ],
  },
];

const yearlyPricingData = [
  {
    title: "Starter",
    price: "59",
    duration: "/Yearly",
    btnText: "Choose Plan",
    btnLink: "#",
    aosDelay: "100",

    lists: [
      {
        title: "50 Days Free Trail",
        unactiveCalss: "",
      },
      {
        title: "App-In-Purchase",
        unactiveCalss: "",
      },
      {
        title: "Webmail Access",
        unactiveCalss: "",
      },
      {
        title: "Unlimited Attachment",
        unactiveCalss: "",
      },
      {
        title: "100% Safe & Secure",
        unactiveCalss: "",
      },
      {
        title: "No Hidden Charges",
        unactiveCalss: "unactive",
      },
    ],
  },
  {
    title: "Professional",
    price: "79",
    duration: "/Yearly",
    btnText: "Choose Plan",
    btnLink: "#",
    aosDelay: "200",

    lists: [
      {
        title: "One Time Purchase",
        unactiveCalss: "",
      },
      {
        title: "App-In-Purchase",
        unactiveCalss: "",
      },
      {
        title: "Webmail Access",
        unactiveCalss: "",
      },
      {
        title: "Unlimited Attachment",
        unactiveCalss: "",
      },
      {
        title: "100% Safe & Secure",
        unactiveCalss: "",
      },
      {
        title: "No Hidden Charges",
        unactiveCalss: "",
      },
    ],
  },
  {
    title: "Premium",
    price: "99",
    duration: "/Yearly",
    btnText: "Choose Plan",
    btnLink: "#",
    aosDelay: "300",

    lists: [
      {
        title: "Unlimited Purchase",
        unactiveCalss: "",
      },
      {
        title: "App-In-Purchase",
        unactiveCalss: "",
      },
      {
        title: "Webmail Access",
        unactiveCalss: "",
      },
      {
        title: "Unlimited Attachment",
        unactiveCalss: "",
      },
      {
        title: "100% Safe & Secure",
        unactiveCalss: "",
      },
      {
        title: "No Hidden Charges",
        unactiveCalss: "",
      },
    ],
  },
];

const PricingPlan = () => {
  return (
    <>
      <div className="with-black-border bg-dark pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">PRICING PLAN</span>
            <h2>Choose Your Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="saas-pricing-tabs">
            <Tabs>
              <TabList>
                <Tab>Monthly</Tab>
                <Tab>Yearly</Tab>
              </TabList>

              <TabPanel>
                <div className="row justify-content-center">
                  {monthlyPricingData &&
                    monthlyPricingData.slice(0, 3).map((value, i) => (
                      <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                        <div
                          className="saas-pricing-box bg-black saas-color"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay={value.aosDelay}
                        >
                          <div className="pricing-header">
                            <h3>{value.title}</h3>
                            <span className="price">
                              ${value.price}
                              <span>{value.duration}</span>
                            </span>
                          </div>

                          <ul className="features-list">
                            {value.lists.map((value, i) => (
                              <li className={value.unactiveCalss} key={i}>
                                {value.title}
                              </li>
                            ))}
                          </ul>

                          <a
                            href={value.btnLink}
                            className="default-btn-two saas-color"
                          >
                            {value.btnText}{" "}
                            <i className="fas fa-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  {yearlyPricingData &&
                    yearlyPricingData.slice(0, 3).map((value, i) => (
                      <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                        <div
                          className="saas-pricing-box bg-black saas-color"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay={value.aosDelay}
                        >
                          <div className="pricing-header">
                            <h3>{value.title}</h3>
                            <span className="price">
                              ${value.price}
                              <span>{value.duration}</span>
                            </span>
                          </div>

                          <ul className="features-list">
                            {value.lists.map((value, i) => (
                              <li className={value.unactiveCalss} key={i}>
                                {value.title}
                              </li>
                            ))}
                          </ul>

                          <a
                            href={value.btnLink}
                            className="default-btn-two saas-color"
                          >
                            {value.btnText}{" "}
                            <i className="fas fa-chevron-right"></i>
                          </a>
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

export default PricingPlan;
