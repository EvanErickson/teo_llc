import React from "react";
import Link from "next/link";
import Image from "next/image";

import errorImg from "../../public/images/404.png";

const ErrorContent = () => {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <Image src={errorImg} alt="Error" width={810} height={448} />
            <h3>Error 404 : page not found</h3>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>

            <div className="back-btn">
              <Link href="/" className="btn btn-primary">
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorContent;
