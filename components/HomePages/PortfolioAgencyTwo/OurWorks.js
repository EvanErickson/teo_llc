import React from "react";
import Link from "next/link";
import Image from "next/image"; 

const ourWorksData = [
  {
    image: "/images/works/work1.jpg",
    title: "Designing a better cinema experience",
    category: "Development",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "100",
  },
  {
    image: "/images/works/work2.jpg",
    title: "Building design process within teams",
    category: "Web Design",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "200",
  },
  {
    image: "/images/works/work3.jpg",
    title: "How intercom brings play into their design process",
    category: "eCommerce",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "300",
  },
  {
    image: "/images/works/work4.jpg",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "Email Marketing",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "400",
  },
  {
    image: "/images/works/work5.jpg",
    title: "Examples of different types of sprints",
    category: "Marketing & Reporting",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "500",
  },
  {
    image: "/images/works/work6.jpg",
    title: "Redesigning the New York times app",
    category: "App Development",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "600",
  },
  {
    image: "/images/works/work7.jpg",
    title: "Design the Web, Mobile, and eCommerce",
    category: "SEO Optimization",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "700",
  },
  {
    image: "/images/works/work8.jpg",
    title: "Redesigning the New York times app",
    category: "Digital Marketing",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "800",
  },
  {
    image: "/images/works/work9.jpg",
    title: "We provide any type of app development",
    category: "App Development",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "900",
  },
  {
    image: "/images/works/work10.jpg",
    title: "We provide any type of marketing support",
    category: "SEO Marketing",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "1000",
  },
  {
    image: "/images/works/work11.jpg",
    title: "We provide any type of Email Marketing",
    category: "Email Marketing",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "1100",
  },
  {
    image: "/images/works/work12.jpg",
    title: "We provide any type of Marketing & Reporting",
    category: "Marketing & Reporting",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "1200",
  },
];

const OurWorks = () => {
  return (
    <>
      <section className="case-studies-area lg-portfolio ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {ourWorksData &&
              ourWorksData.map((value, i) => (
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-6" key={i}>
                  <div
                    className="work-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image src={value.image} alt="image" width={510} height={700} />

                    <div className="content text-center">
                      <span>
                        <Link href={value.viewDetails}>{value.category}</Link>
                      </span>

                      <h3>
                        <Link href={value.viewDetails}>{value.title}</Link>
                      </h3>

                      <Link href={value.viewDetails} className="custom-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination */}
          <div className="pagination-area">
            <a className="prev page-numbers">
              <i className="fa-solid fa-angles-left"></i>
            </a>

            <a className="page-numbers">1</a>

            <span className="page-numbers current">2</span>

            <a className="page-numbers">3</a>

            <a className="page-numbers">4</a>

            <a className="next page-numbers">
              <i className="fa-solid fa-angles-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
