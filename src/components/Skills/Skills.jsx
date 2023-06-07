import React from "react";
import "./skills.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="container skills__container">
        {/* Frontend Development Skills */}
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className="skills__frontend">
            <h3>Frontend Development</h3>
            <div className="skills__content">
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">HTML</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">CSS</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">JavaScript</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">TypeScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">Tailwind</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">Material UI</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">React</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">NextJs</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
            </div>
          </div>
        </AnimationOnScroll>

        {/* Backend Development Skilss */}
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <div className="skills__backend">
            <h3>Backend Development</h3>
            <div className="skills__content">
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">Node JS</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">Express</h4>
                  <small className="text-light">Intermidiate</small>
                </div>
              </article>
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">MongoDB</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="skills__details">
                <i className="bx bxs-badge-check skills__details-icon"></i>
                <div>
                  <h4 className="skills__name">PostgresSQL</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default Skills;
