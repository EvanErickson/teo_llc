import React from "react";
import Link from "next/link";
import Image from "next/image";

import serviceImg1 from "../../../public/images/services/it-service1.png";
import serviceImg2 from "../../../public/images/services/it-service2.png";
import serviceImg3 from "../../../public/images/services/it-service3.png";

const ServiceStyleTwo = () => {
  return (
    <>
      <div className="service-style-two ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-info pr-50">
                <div className="info-head">
                  <h2 className="title">Web & Mobile Development</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Responsive Design
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Mobile App Development
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      React Web Development
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      UI / UX Design
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Laravel Web Development
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Angular Web Development
                    </div>
                  </div>
                </div>

                <div className="service-read-more">
                  <Link href="/services/service-details/" className="btn btn-primary">
                    <i className="fa-solid fa-list-check"></i> Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="service-right-img"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  src={serviceImg1}
                  alt="Service Image"
                  width={770}
                  height={582}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-style-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="service-left-img"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  src={serviceImg2}
                  alt="Service Image"
                  width={852}
                  height={580}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-info pl-50">
                <div className="info-head">
                  <h2 className="title">Digital Marketing</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      SEO Marketing
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Facebook Marketing
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Social Marketing
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Email Marketing
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Data Scraping
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Youtube Marketing
                    </div>
                  </div>
                </div>

                <div className="service-read-more">
                  <Link href="/services/service-details/" className="btn btn-primary">
                    <i className="fa-solid fa-list-check"></i> Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-style-two ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-info pr-50">
                <div className="info-head">
                  <h2 className="title">Cloud Hosting Services</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Cloud Databases
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Email Servers
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      File Storage
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Hybrid Cloud
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Website Hosting
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Backup Systems
                    </div>
                  </div>
                </div>

                <div className="service-read-more">
                  <Link href="/services/service-details/" className="btn btn-primary">
                    <i className="fa-solid fa-list-check"></i> Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="service-right-img"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  src={serviceImg3}
                  alt="Service Image"
                  width={894}
                  height={582}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceStyleTwo;
