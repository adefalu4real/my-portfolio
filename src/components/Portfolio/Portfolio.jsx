import React from "react";
import "./portfolio.css";
import { portfolioData } from "./Data";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Recent Work</span>
      <AnimationOnScroll animateIn="animate__zoomIn">
        <div className="container portfolio__container">
          {portfolioData.map(({ id, title, image, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <span>
                    <a href={demo} className="demo__link" target="_blank">
                      Live Demo{" "}
                      <i className="uil uil-arrow-right demo__link-icon"></i>
                    </a>
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Portfolio;
