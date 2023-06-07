import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/smartrove/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://twitter.com/iamsmartrove"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-twitter"></i>
      </a>

      <a
        href="https://github.com/Smartrove"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
