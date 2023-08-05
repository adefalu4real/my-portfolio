import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Adefalu Waliyyullahi Alade</h1>
        <p className="footer__subtitle">Fullstack Developer</p>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__links">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__links">
              Project
            </a>
          </li>

          <li>
            <a href="#testimonial" className="footer__links">
              Testimonial
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://web.facebook.com/adefalu.waliyyulahialade"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/adefalu4real/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/waliyyullahi12"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Valutech. All rights reserved 2023
        </span>
      </div>
    </footer>
  );
};

export default Footer;
