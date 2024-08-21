import React from "react";
import Link from "next/link";
import Image from "next/image";

const caseStudiesData = [
  {
    image: "/images/case-studies/studie1.jpg",
    title: "Community Engagements",
    category: "Web, Sales",
    detailsLink: "/portfolio/portfolio-details/",
    shapeImage: "/images/case-studies/studie-shape1.png",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    title: "Built web faster & better",
    category: "Sales, SEO, Web",
    detailsLink: "/portfolio/portfolio-details/",
    shapeImage: "/images/case-studies/studie-shape2.png",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/studie3.jpg",
    title: "Traffic Management",
    category: "Marketing",
    detailsLink: "/portfolio/portfolio-details/",
    shapeImage: "/images/case-studies/studie-shape3.png",
    aosDelay: "300",
  },
];

const CaseStudies = () => {
  return (
    <>
      <div className="case-studies-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>CASE STUDIES</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {caseStudiesData &&
              caseStudiesData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="single-case-studies"
                    style={{ backgroundImage: `url(${value.image})` }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="content">
                      <span>
                        <Link href={value.detailsLink}>{value.category}</Link>
                      </span>

                      <h3>
                        <Link href={value.detailsLink}>{value.title}</Link>
                      </h3>
                    </div>

                    <Link href={value.detailsLink} className="btn btn-primary">
                      View Case Study
                    </Link>

                    <div className="shape">
                      <Image
                        src={value.shapeImage}
                        alt="shape Image"
                        width={250}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="view-more-work">
            <Link href="/portfolio" className="btn btn-primary">
              View More Work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
