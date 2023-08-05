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
                  Community High School Alaadun, Ibadan
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017 - 2019
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="qualification__title">Computer Engineering</h3>
                <span className="qualification__subtitle">
                  Federal Polytechnic, Ilaro{" "}
                </span>{" "}
                <br />
                <span className="qualification__subtitle">
                  National Diploma{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - 2022
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
                  <i className="uil uil-calendar-alt"></i>2022 - 2023
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
              <span className="qualification__subtitle">
                Boldlnks Solution Tech
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2023
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <h3 className="qualification__title">Graphic Designer</h3>
            <span className="qualification__subtitle">Valutech Ventures</span>
            <div className="qualification__calender">
              <i className="uil uil-calendar-alt"></i>2018-2022
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
