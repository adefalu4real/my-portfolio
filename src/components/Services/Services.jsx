import { useState } from "react";
import "./services.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web <br /> Design
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Web Design</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="servicess__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Develop the user interface
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interaction
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand for opportunities
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Project Designer Ends */}

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon "></i>
            <h3 className="services__title">
              Web <br /> Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Web Development</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="servicess__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Develop interactive user interface
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop pixel perfects UI using latest technologies
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I put web application functionalities into UI
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I provide scalable solutions
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* UI/Ux Designer Ends */}

        {/* <AnimationOnScroll animateIn="animate__fadeInDown"> */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="servicess__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Develop the user interface
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interaction
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I design quality visual graphics for your company brand
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Visual Designer Ends */}
      </div>
    </section>
  );
};

export default Services;
