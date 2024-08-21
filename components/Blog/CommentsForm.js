import React, { Component } from "react";

const CommentsForm = () => {
  return (
    <>
      <div className="comment-respond">
        <h3 className="comment-reply-title">Leave a Reply</h3>

        <form 
          className="comment-form" 
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="comment-notes">
            <span id="email-notes">
              Your email address will not be published.
            </span>
            Required fields are marked <span className="required">*</span>
          </div>

          <div className="comment-form-comment mb-3">
            <label>Comment</label>
            <textarea
              name="comment"
              id="comment"
              rows="5"
              required="required"
            ></textarea>
          </div>

          <div className="comment-form-author mb-3">
            <label>
              Name <span className="required">*</span>
            </label>
            <input type="text" id="author" name="author" required="required" />
          </div>

          <div className="comment-form-email mb-3">
            <label>
              Email <span className="required">*</span>
            </label>
            <input type="email" id="email" name="email" required="required" />
          </div>

          <div className="comment-form-url mb-3">
            <label>Website</label>
            <input type="url" id="url" name="url" />
          </div>

          <div className="comment-form-cookies-consent mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
          </div>

          <div className="form-submit">
            <input
              type="submit"
              name="submit"
              id="submit"
              className="submit"
              value="Post A Comment"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentsForm;
