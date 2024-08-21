import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from '../../../public/images/about-img2.jpg';

const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Success</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      It is a long established fact that a reader will be
                      distracted by the readable.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text.
                    </li>
                  </ul>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
