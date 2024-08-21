import React from "react";
import Link from "next/link";
import Image from "next/image";

const ourWorksData = [
  {
    image: "/images/case-studies/studie1.jpg",
    shapeImage: "/images/case-studies/studie-shape1.png",
    title: "Designing a better cinema experience",
    category: "Web Design",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    shapeImage: "/images/case-studies/studie-shape2.png",
    title: "Building design process within teams",
    category: "Development",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/studie3.jpg",
    shapeImage: "/images/case-studies/studie-shape3.png",
    title: "How intercom brings play into their design process",
    category: "Web Development",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "300",
  },
  {
    image: "/images/case-studies/studie4.jpg",
    shapeImage: "/images/case-studies/studie-shape4.png",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "React Development",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "400",
  },
  {
    image: "/images/case-studies/studie5.jpg",
    shapeImage: "/images/case-studies/studie-shape5.png",
    title: "Examples of different types of sprints",
    category: "Angular Development",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "500",
  },
  {
    image: "/images/case-studies/studie6.jpg",
    shapeImage: "/images/case-studies/studie-shape6.png",
    title: "Redesigning the New York times app",
    category: "App Development",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "600",
  },
];

const OurWorks = () => {
  return (
    <>
      <section className="case-studies-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Our Works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {ourWorksData &&
              ourWorksData.slice(0, 6).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="single-case-studies text-center"
                    style={{
                      backgroundImage: `url(${value.image})`,
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="content">
                      <span>
                        <Link href={value.viewDetails}>{value.category}</Link>
                      </span>
                      <h3>
                        <Link href={value.viewDetails}>{value.title}</Link>
                      </h3>
                    </div>

                    <Link href={value.viewDetails} className="btn btn-primary">
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
      </section>
    </>
  );
};

export default OurWorks;
