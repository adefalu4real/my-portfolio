import React from "react";
import "./qualification.css";
const Qualification = () => {
  return (
    <section className="qualificaton section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="education__container">
          <div className="qualification__tabs">
            <div className="qualification__button button__flex">
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
            {/*  =============== Qualification Content - 1 Starts ==============*/}
            <div className="qualification__content qualification__content-active">
              {/* ============ Qualification Data 1 ============== */}
              <div className="qualification__data">
                <h3 className="qualification__title">Secondary Education</h3>
                <span className="qualification__subtitle">
                  Ilobu School of Science
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2009 - 2012
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="qualification__title">Mechanical Engineering</h3>
                <span className="qualification__subtitle">
                  Federal Polytechnic, Ilaro{" "}
                </span>{" "}
                <br />
                <span className="qualification__subtitle">
                  National Diploma{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2013 - 2015
                </div>
              </div>
              <div className="qualification__data">
                <h3 className="qualification__title">Mechanical Engineering</h3>
                <span className="qualification__subtitle">
                  Federal Polytechnic, Ilaro{" "}
                </span>{" "}
                <br />
                <span className="qualification__subtitle">
                  Higher National Diploma{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2016 - 2018
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="qualification__title"> Web Development</h3>
                <span className="qualification__subtitle">
                  Boldlinks Technology Solution{" "}
                </span>{" "}
                <br />
                <span className="qualification__subtitle">
                  Fullstack Engineering{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - 2023
                </div>
              </div>

              {/* Qualification Data 4 */}
            </div>
            {/*  ============ Qualification Content - 1 Ends ==========*/}
          </div>
        </div>

        <div className="experience__container">
          <div className="qualification__sections">
            <div className="qualification__button button__flex">
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>
          <div className="qualification__data">
            {/* ============ Qualification Data 2 ============== */}
            <div className="qualification__data">
              <h3 className="qualification__title">Fullstack Web Developer</h3>
              <span className="qualification__subtitle">Automation Lounge</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2023
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              {/* <span className="qulification__line"></span> */}
            </div>
            <h3 className="qualification__title">Web Developer</h3>
            <span className="qualification__subtitle">
              Boldlinks Technology Solution
            </span>
            <div className="qualification__calender">
              <i className="uil uil-calendar-alt"></i>2021 - 2023
            </div>
          </div>

          <div className="qualification__data">
            <h3 className="qualification__title">Volunteer Web Developer</h3>
            <span className="qualification__subtitle">Stem Zone</span>
            <div className="qualification__calender">
              <i className="uil uil-calendar-alt"></i>2022 - 2023
            </div>
          </div>

          <div className="qualification__data">
            <h3 className="qualification__title">Graphic Designer</h3>
            <span className="qualification__subtitle">
              Smartrove Integrated Services
            </span>
            <div className="qualification__calender">
              <i className="uil uil-calendar-alt"></i>2019-2021
            </div>
          </div>
          <div className="qualification__data">
            <h3 className="qualification__title">Content Writer</h3>
            <span className="qualification__subtitle">Slate De Press</span>
            <div className="qualification__calender">
              <i className="uil uil-calendar-alt"></i>2016 - 2018
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
