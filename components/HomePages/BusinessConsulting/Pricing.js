import React from "react";
import Link from "next/link";

const pricingData = [
  {
    title: "Basic Plan",
    price: "29",
    duration: "/year",

    list: [
      {
        title: "Increase Traffic 100%",
        unactiveClass: "",
      },
      {
        title: "Content Optimization",
        unactiveClass: "",
      },
      {
        title: "24x7 Great Support",
        unactiveClass: "",
      },
      {
        title: "100% Safe & Secure",
        unactiveClass: "unactive",
      },
      {
        title: "No Hidden Charges",
        unactiveClass: "unactive",
      },
    ],

    btnLink: "#",
    activeClass: "",
    popularTag: "",
    aosDelay: "100",
  },
  {
    title: "Ultra Plan",
    price: "39",
    duration: "/year",

    list: [
      {
        title: "Increase Traffic 100%",
        unactiveClass: "",
      },
      {
        title: "Content Optimization",
        unactiveClass: "",
      },
      {
        title: "24x7 Great Support",
        unactiveClass: "",
      },
      {
        title: "100% Safe & Secure",
        unactiveClass: "",
      },
      {
        title: "No Hidden Charges",
        unactiveClass: "unactive",
      },
    ],

    btnLink: "#",
    activeClass: "active",
    popularTag: "Popular",
    aosDelay: "200",
  },
  {
    title: "Enterprise Plan",
    price: "49",
    duration: "/year",

    list: [
      {
        title: "Increase Traffic 100%",
        unactiveClass: "",
      },
      {
        title: "Content Optimization",
        unactiveClass: "",
      },
      {
        title: "24x7 Great Support",
        unactiveClass: "",
      },
      {
        title: "100% Safe & Secure",
        unactiveClass: "",
      },
      {
        title: "No Hidden Charges",
        unactiveClass: "",
      },
    ],

    btnLink: "#",
    activeClass: "",
    popularTag: "",
    aosDelay: "300",
  },
];

const Pricing = () => {
  return (
    <>
      <div className="bc-pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR PRICING</span>
            <h2>Simple Pricing Plan</h2>
          </div>

          <div className="row justify-content-center">
            {pricingData &&
              pricingData.slice(0, 3).map((value, i) => (
                <div 
                  className="col-lg-4 col-md-6 col-sm-6" 
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className={`bc-pricing-item ${value.activeClass}`}>
                    <div className="ribbon">
                      <span>{value.popularTag}</span>
                    </div>

                    <div className="pricing-header">
                      <h3>{value.title}</h3>
                      <span className="price">
                        ${value.price}
                        <span>{value.duration}</span>
                      </span>
                    </div>

                    <ul className="features-list">
                      {value.list.map((value, i) => (
                        <li className={value.unactiveClass} key={i}>
                          {value.title}
                        </li>
                      ))}
                    </ul>

                    <Link href={value.btnLink} className="default-btn-two">
                      Choose Plan <i className="fas fa-chevron-right"></i>
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

export default Pricing;
