import React from "react";
import Link from "next/link";

const pricingData = [
  {
    title: "Basic",
    shotText: "Powerful & awesome elements",
    price: "39",
    duration: "/Monthly",
    btnText: "Purchase Plan",
    btnLink: "#",
    activeClass: "",
    popularTag: "",
    aosDelay: "100",

    priceList: [
      {
        title: "Up to 10 Website",
        iconName: "fa-solid fa-check",
      },
      {
        title: "Lifetime free Support",
        iconName: "fa-solid fa-check",
      },
      {
        title: "10 GB Dedicated Hosting free",
        iconName: "fa-solid fa-check",
      },
      {
        title: "24/7 Support",
        iconName: "fa-solid fa-check",
      },
      {
        title: "SEO Optimized",
        iconName: "fa-solid fa-xmark",
      },
      {
        title: "Live Support",
        iconName: "fa-solid fa-xmark",
      },
    ],
  },
  {
    title: "Team",
    shotText: "Powerful & awesome elements",
    price: "49",
    duration: "/Monthly",
    btnText: "Purchase Plan",
    btnLink: "#",
    activeClass: "active",
    popularTag: "Most Popular",
    aosDelay: "200",

    priceList: [
      {
        title: "Up to 200 Website",
        iconName: "fa-solid fa-check",
      },
      {
        title: "Lifetime free Support",
        iconName: "fa-solid fa-check",
      },
      {
        title: "25 GB Dedicated Hosting free",
        iconName: "fa-solid fa-check",
      },
      {
        title: "24/7 Support",
        iconName: "fa-solid fa-check",
      },
      {
        title: "SEO Optimized",
        iconName: "fa-solid fa-check",
      },
      {
        title: "Live Support",
        iconName: "fa-solid fa-xmark",
      },
    ],
  },
  {
    title: "Business",
    shotText: "Powerful & awesome elements",
    price: "59",
    duration: "/Monthly",
    btnText: "Purchase Plan",
    btnLink: "#",
    activeClass: "",
    popularTag: "",
    aosDelay: "300",

    priceList: [
      {
        title: "Up to 500 Website",
        iconName: "fa-solid fa-check",
      },
      {
        title: "Lifetime free Support",
        iconName: "fa-solid fa-check",
      },
      {
        title: "50 GB Dedicated Hosting free",
        iconName: "fa-solid fa-check",
      },
      {
        title: "24/7 Support",
        iconName: "fa-solid fa-check",
      },
      {
        title: "SEO Optimized",
        iconName: "fa-solid fa-check",
      },
      {
        title: "Live Support",
        iconName: "fa-solid fa-check",
      },
    ],
  },
];

const PricingPlan = () => {
  return (
    <>
      <div className="bg-F7F7FF pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="app-sub-title">PRICING TABLE</span>
            <h2>No Hidden Charge Applied, Choose Your Plan</h2>
          </div>

          <div className="row align-items-center justify-content-center">
            {pricingData &&
              pricingData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className={`app-pricing-box ${value.activeClass}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="title">
                      <h3>{value.title}</h3>
                      <p>{value.shotText}</p>
                    </div>

                    <span className="popular">
                      {value.popularTag}
                    </span>

                    <div className="price">
                      ${value.price} <span>{value.duration}</span>
                    </div>

                    <Link href={value.btnLink} className="app-default-btn">
                      {value.btnText}
                    </Link>

                    <ul className="features-list">
                      {value.priceList.map((value, i) => (
                        <li key={i}>
                          <i className={value.iconName}></i>
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
    </>
  );
};

export default PricingPlan;
