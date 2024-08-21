import React from "react";
import Link from "next/link";
import Image from "next/image";

import portfolioImg1 from "../../../public/images/portfolio/portfolio1.jpg";
import portfolioImg2 from "../../../public/images/portfolio/portfolio2.jpg";
import portfolioImg3 from "../../../public/images/portfolio/portfolio3.jpg";
import portfolioImg4 from "../../../public/images/portfolio/portfolio4.jpg";
import portfolioImg5 from "../../../public/images/portfolio/portfolio5.jpg";
import portfolioImg6 from "../../../public/images/portfolio/portfolio6.jpg";
import portfolioImg7 from "../../../public/images/portfolio/portfolio7.jpg";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio-area pt-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="mw-1920">
          <div className="row m-0">
            <div className="col-lg-3 col-sm-6 p-0">
              <div
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image
                  src={portfolioImg1}
                  alt="image"
                  width={480}
                  height={350}
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/portfolio-details/">UX Workflow</Link>
                  </h3>

                  <Link href="/portfolio/portfolio-details/" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>

              <div
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image
                  src={portfolioImg2}
                  alt="image"
                  width={480}
                  height={350}
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/portfolio-details/">Web Development</Link>
                  </h3>

                  <Link href="/portfolio/portfolio-details/" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Image
                  src={portfolioImg3}
                  alt="image"
                  width={480}
                  height={700}
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/portfolio-details/">Web Design</Link>
                  </h3>

                  <Link href="/portfolio/portfolio-details/" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <Image
                  src={portfolioImg4}
                  alt="image"
                  width={480}
                  height={350}
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/portfolio-details/">React Development</Link>
                  </h3>

                  <Link href="/portfolio/portfolio-details/" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>

              <div
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <Image
                  src={portfolioImg5}
                  alt="image"
                  width={480}
                  height={350}
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/portfolio-details/">
                      Mobile Apps Development
                    </Link>
                  </h3>

                  <Link href="/portfolio/portfolio-details/" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <Image
                  src={portfolioImg6}
                  alt="image"
                  width={480}
                  height={350}
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/portfolio-details/">eCommerce</Link>
                  </h3>

                  <Link href="/portfolio/portfolio-details/" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>

              <div
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                <Image
                  src={portfolioImg7}
                  alt="image"
                  width={480}
                  height={350}
                />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/portfolio-details/">UX for Mobile Apps</Link>
                  </h3>

                  <Link href="/portfolio/portfolio-details/" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
