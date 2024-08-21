import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import BlogComments from "./BlogComments";
import Image from "next/image";

import blogDetailsImg from "../../public/images/blog/blog-details.jpg";

const BlogRightSidebar = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-img">
                  <Image
                    src={blogDetailsImg}
                    alt="image"
                    width={800}
                    height={600}
                  />
                </div>

                <div className="article-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="fa-solid fa-user"></i>
                      <Link href="/blog">Admin</Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i> March 08,
                      2022
                    </li>
                  </ul>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>

                  <blockquote className="wp-block-quote">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <cite>Tom Cruise</cite>
                  </blockquote>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>

                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur? Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat.
                  </p>

                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus. Temporibus autem quibusdam et aut
                    officiis debitis aut rerum necessitatibus saepe eveniet ut
                    et voluptates repudiandae sint et molestiae non recusandae.
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus.
                  </p>

                  {/* Category */}
                  <ul className="category">
                    <li>
                      <span>Tags:</span>
                    </li>
                    <li>
                      <Link href="/blog">Business</Link>
                    </li>
                    <li>
                      <Link href="/blog">IT</Link>
                    </li>
                    <li>
                      <Link href="/blog">Tips</Link>
                    </li>
                    <li>
                      <Link href="/blog">Design</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Post controls */}
              <div className="post-controls-buttons">
                <div>
                  <Link href="#">Prev Post</Link>
                </div>
                <div>
                  <Link href="#">Next Post</Link>
                </div>
              </div>

              <BlogComments />
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="pl-20">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRightSidebar;
