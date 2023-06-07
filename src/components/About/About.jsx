import React from "react";
import "./about.css";
import me from "../../assets/smartrove.png";
import CV from "../../assets/webDeveloper.pdf";
import Info from "./Info";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        {/* <AnimationOnScroll animateIn="animate__fadeInLeft"> */}
        <img src={me} alt="" className="about__img" />
        {/* </AnimationOnScroll> */}
        <div className="about__data">
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <Info />

            <p className="about__description">
              I am a solution-driven web developer who excels at identifying
              problems, coming up with solutions, and gauging customer
              happiness. My main areas of expertise are in creating web apps
              with a consumer-centric focus using JavaScript, Typescript,
              ReactJs, NextJs, NodeJs, and Express. For more than two years,
              I've produced products for users of applications while adhering to
              the highest standards for online and mobile app development, user
              experience, best practices, and speed. Web applications were
              created and developed using a variety of databases, third-party
              connectors, and APIs. I've also participated in a variety of
              teams, both locally and remotely, serving in member roles. My
              extensive experience has given me the knowledge necessary to
              understand the cultures of many communities while enhancing both
              hard and soft abilities like communication, teamwork, and
              adaptability.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            {/* hhhh */}
            <a href={CV} className="button cv" download>
              <span className="button-text">Download CV </span>
              <span>
                <i className="button-icon uil uil-arrow-down"></i>
              </span>
            </a>
            {/* hhh */}
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
