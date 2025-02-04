import React from "react";
import Link from "next/link";

const servicesData = [
  // {
  //   iconName: "pe-7s-comment bg-13c4a1",
  //   title: "Factory Sourcing and Selection",
  //   shortText:
  //     "Leverage our comprehensive database of trusted Chinese manufacturers. We meticulously match you with factories that align precisely with your product specifications and quality standards.",
  //   viewDetails: "",
  //   aosDelay: "100",
  // },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "AI-Driven Development",
    shortText:
      "Harness the power of artificial intelligence to build smarter, more efficient applications. From intelligent automation to advanced machine learning models, we integrate AI seamlessly into your products to enhance performance, scalability, and user experience. 🚀",

    viewDetails: "",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Scalable Full-Stack Solutions",
    shortText:
      "We design and develop full-stack applications that grow with your business. Using modern frameworks and cloud-native architectures, we ensure your web and mobile solutions are fast, secure, and built to scale effortlessly. ⚡",
    viewDetails: "",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Cloud & Serverless Expertise",
    shortText:
      "Leverage the power of cloud computing and serverless architecture for high-performance, cost-efficient solutions. We design scalable, resilient applications that minimize infrastructure management while maximizing agility and innovation. ☁️🚀",
    viewDetails: "",
    aosDelay: "400",
  },
  // {
  //   iconName: "pe-7s-cart bg-00d280",
  //   title: "Wholesale Fashion and Accessories",
  //   shortText:
  //     "Stay ahead of fashion trends with our expert insights. Access a diverse network of wholesalers for clothing and accessories to meet your specific needs.",
  //   viewDetails: "",
  //   aosDelay: "500",
  // },
  // {
  //   iconName: "pe-7s-users bg-ff612f",
  //   title: "Regulatory Compliance and Finesse",
  //   shortText:
  //     "Expert guidance on Chinese regulations, tarrifs, import/export procedures, and compliance requirements. We have access to attorneys in both the US and China to mitigate potential risks.",
  //   viewDetails: "",
  //   aosDelay: "600",
  // },
];

const OurServices = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            {/* <p>✅ AI-Driven Development</p>
            <p>✅ Scalable Full-Stack Solutions</p>
            <p>✅ Cloud & Serverless Expertise</p> */}
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-8 col-sm-8"
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

            <hr></hr>
            <div className="col-lg-6">
              <div className="section-title">
                <h2>🔹 Book a call</h2>
              </div>

              <div className="row justify-content-center">
                <Link
                  href="https://tidycal.com/teollc/30-min-tech-consulting"
                  className="btn btn-primary"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
