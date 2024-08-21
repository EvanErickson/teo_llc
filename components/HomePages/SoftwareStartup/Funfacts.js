import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import videoThumb from "../../../public/images/software/video-thumb.jpg";

const funfactsData = [
  {
    iconName: "fa-solid fa-user",
    number: "14,500",
    title: "Happy Users",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-star",
    number: "3,527",
    title: "Good Reviews",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-cloud-arrow-down",
    number: "100k",
    title: "App Download",
    aosDelay: "300",
  },
];

const Funfacts = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="software-funfacts-area bg-f9f9f9 pb-100">
        <div className="container">

          <div className="row justify-content-center">
            {funfactsData && funfactsData.slice(0, 3).map((value, i) => (
              <div className="col-lg-4 col-md-4 col-sm-4 col-6" key={i}>
                <div
                  className="software-funfacts-item"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="icon">
                    <i className={value.iconName}></i>
                  </div>
                  <h3>{value.number}</h3>
                  <p>{value.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="software video-box"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <Image 
              src={videoThumb}
              alt="video" 
              width={1100}
              height={658}
            />
            <div
              onClick={() => setToggler(!toggler)}
              className="video-btn"
            >
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Funfacts;