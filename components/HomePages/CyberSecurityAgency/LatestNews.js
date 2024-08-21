import React from "react";
import Link from "next/link";
import Image from "next/image";

const latestNewsData = [
  {
    title: "The Launch Of A Revamped User Referral Program",
    shortText:
      "We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements We work.",
    date: "17th January 2023",
    comment: "0",
    authorImg: "/images/cyber-security/user1.jpg",
    authorName: "Thomas Adison",
    designation: "Content Writing",
    blogDetailsLink: "/blog/blog-details/",
    tag: "LATEST NEWS",
    aosDelay: "100",
  },
  {
    title: "Complete Protection For All Your Devices",
    shortText:
      "We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements We work.",
    date: "18th January 2023",
    comment: "2",
    authorImg: "/images/cyber-security/user2.jpg",
    authorName: "James Anderson",
    designation: "Content Writing",
    blogDetailsLink: "/blog/blog-details/",
    tag: "LATEST NEWS",
    aosDelay: "200",
  },
  {
    title: "Online Security For Your Devices Antivirus",
    shortText:
      "We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements We work.",
    date: "19th January 2023",
    comment: "5",
    authorImg: "/images/cyber-security/user3.jpg",
    authorName: "Sarah Taylor",
    designation: "Content Writing",
    blogDetailsLink: "/blog/blog-details/",
    tag: "LATEST NEWS",
    aosDelay: "300",
  },
];

const LatestNews = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title white-color">
            <span className="sub-title">LATEST NEWS</span>
            <h2>
              Explore, Learn And Stay <span>Up To Date</span> With The Latest In
              Cyber
            </h2>
          </div>

          <div className="row justify-content-center">
            {latestNewsData &&
              latestNewsData.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="cs-blog-card with-black-color">
                    <div className="tag">
                      <span>{value.tag}</span>
                    </div>

                    <ul className="post-meta">
                      <li>
                        <i className="fa-solid fa-calendar-days"></i>{" "}
                        {value.date}
                      </li>
                      <li>
                        <i className="fa-solid fa-comment"></i> {value.comment}{" "}
                        comment
                      </li>
                    </ul>

                    <h3>
                      <Link href={value.blogDetailsLink}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>

                    <div className="info">
                      <Image
                        src={value.authorImg}
                        alt="image"
                        width={150}
                        height={150}
                      />
                      <h3>{value.authorName}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
