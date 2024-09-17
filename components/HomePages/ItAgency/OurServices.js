import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "Factory Sourcing and Selection",
    shortText:
      "Leverage our comprehensive database of trusted Chinese manufacturers. We meticulously match you with factories that align precisely with your product specifications and quality standards.",
    viewDetails: "",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Product Development and Design",
    shortText:
      "Take your idea and bring it to life with our guidance. We offer CAD modeling, item sourcing, and design opinions.",
    viewDetails: "",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Supply Chain Optimization",
    shortText:
      "Our efficient logistics solutions streamline your supply chain, reducing lead times and costs. We proactively identify and mitigate potential risks to ensure a smooth and reliable flow of goods.",

    viewDetails: "",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Wholesale Diamond Procurement",
    shortText:
      "We ethically source conflict-free diamonds from trusted suppliers. Customize your diamond selection from our extensive range of cuts, qualities, and settings.",
    viewDetails: "",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "Wholesale Fashion and Accessories",
    shortText:
      "Stay ahead of fashion trends with our expert insights. Access a diverse network of wholesalers for clothing and accessories to meet your specific needs.",
    viewDetails: "",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Regulatory Compliance and Finesse",
    shortText:
      "Expert guidance on Chinese regulations, tarrifs, import/export procedures, and compliance requirements. We have access to attorneys in both the US and China to mitigate potential risks.",
    viewDetails: "",
    aosDelay: "600",
  },
];

const OurServices = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Offering tailored solutions designed to meet the unique needs of
              businesses that work with China, from factory search and CAD
              development to implementation and multi-lingual support.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one bg-fcfbfb">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
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
