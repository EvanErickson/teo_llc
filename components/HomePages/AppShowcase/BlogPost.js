import React from "react";
import Link from "next/link";
import Image from "next/image";

const latestArticleData = [
  {
    image: "/images/blog/blog1.jpg",
    title:
      "Branding involves developing strategy to create a point of differentiation",
    category: "Branding",
    date: "Feb 15, 2023",
    comment: "1",
    viewDetails: "/blog/blog-details/",
    aosDelay: "100",
  },
  {
    image: "/images/blog/blog2.jpg",
    title:
      "Design is a plan or specification for the construction of an object",
    category: "Agency",
    date: "Feb 16, 2023",
    comment: "2",
    viewDetails: "/blog/blog-details/",
    aosDelay: "200",
  },
  {
    image: "/images/blog/blog3.jpg",
    title: "Branding involves developing strategy to create a point",
    category: "Marketing",
    date: "Feb 17, 2023",
    comment: "5",
    viewDetails: "/blog/blog-details/",
    aosDelay: "300",
  },
];

const BlogPost = () => {
  return (
    <>
      <div className="bg-F7F7FF pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="app-sub-title">BLOG POST</span>
            <h2>Latest Article From Our Blog</h2>
          </div>

          <div className="row justify-content-center">
            {latestArticleData &&
              latestArticleData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="app-blog-post"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="image">
                      <Link href={value.viewDetails} className="d-block">
                        <Image
                          src={value.image}
                          alt="blog"
                          width={510}
                          height={383}
                        />
                      </Link>

                      <Link href={value.viewDetails} className="tag">
                        {value.category}
                      </Link>
                    </div>
                    
                    <div className="content">
                      <ul className="meta">
                        <li>
                          <i className="fa-solid fa-calendar"></i>
                          {value.date}
                        </li>
                        <li>
                          <i className="fa-solid fa-comment"></i>
                          <Link href={value.viewDetails}>
                            ({value.comment}) Comment
                          </Link>
                        </li>
                      </ul>
                      <h3>
                        <Link href={value.viewDetails}>{value.title}</Link>
                      </h3>
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

export default BlogPost;
