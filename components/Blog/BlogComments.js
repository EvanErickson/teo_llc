import React from "react";
import Link from "next/link";
import CommentsForm from "./CommentsForm";
import Image from "next/image";

import userImg1 from "../../public/images/authors/author1.jpg";
import userImg2 from "../../public/images/authors/author2.jpg";
import userImg3 from "../../public/images/authors/author3.jpg";
import userImg4 from "../../public/images/authors/author4.jpg";
import userImg5 from "../../public/images/authors/author5.jpg";

const BlogComments = () => {
  return (
    <>
      <div className="comments-area">
        <h3 className="comments-title">2 Comments:</h3>

        <ol className="comment-list">
          <li className="comment">
            <article className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src={userImg1}
                    className="avatar"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <b className="fn">John Jones</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">Feb 24, 2022 at 10:59 am</div>
              </footer>

              <div className="comment-content">
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen.
                </p>
              </div>

              <div className="reply">
                <Link href="#" className="comment-reply-link">
                  Reply
                </Link>
              </div>
            </article>

            <ol className="children">
              <li className="comment">
                <article className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <Image
                        src={userImg2}
                        className="avatar"
                        alt="image"
                        width={150}
                        height={150}
                      />
                      <b className="fn">Steven Smith</b>
                      <span className="says">says:</span>
                    </div>

                    <div className="comment-metadata">
                      <a href="#">Feb 24, 2022 at 10:59 am</a>
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>
                      Lorem Ipsum has been the industry’s standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen.
                    </p>
                  </div>

                  <div className="reply">
                    <Link href="#" className="comment-reply-link">
                      Reply
                    </Link>
                  </div>
                </article>

                <ol className="children">
                  <li className="comment">
                    <article className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <Image
                            src={userImg3}
                            className="avatar"
                            alt="image"
                            width={150}
                            height={150}
                          />
                          <b className="fn">Sarah Taylor</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          <a href="#">Feb 24, 2022 at 10:59 am</a>
                        </div>
                      </footer>

                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen.
                        </p>
                      </div>

                      <div className="reply">
                        <Link href="#" className="comment-reply-link">
                          Reply
                        </Link>
                      </div>
                    </article>
                  </li>
                </ol>
              </li>
            </ol>
          </li>

          <li className="comment">
            <article className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src={userImg4}
                    className="avatar"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <b className="fn">John Doe</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">Feb 24, 2022 at 10:59 am</div>
              </footer>

              <div className="comment-content">
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen.
                </p>
              </div>

              <div className="reply">
                <Link href="#" className="comment-reply-link">
                  Reply
                </Link>
              </div>
            </article>

            <ol className="children">
              <li className="comment">
                <article className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <Image
                        src={userImg5}
                        className="avatar"
                        alt="image"
                        width={150}
                        height={150}
                      />
                      <b className="fn">James Anderson</b>
                      <span className="says">says:</span>
                    </div>

                    <div className="comment-metadata">
                      Feb 24, 2022 at 10:59 am
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>
                      Lorem Ipsum has been the industry’s standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen.
                    </p>
                  </div>

                  <div className="reply">
                    <Link href="#" className="comment-reply-link">
                      Reply
                    </Link>
                  </div>
                </article>
              </li>
            </ol>
          </li>
        </ol>

        {/* CommentsForm */}
        <CommentsForm />
      </div>
    </>
  );
};

export default BlogComments;
