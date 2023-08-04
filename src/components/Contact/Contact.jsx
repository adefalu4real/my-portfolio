import { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { cssTransition, toast } from 'react-toastify'

const Contact = () => {
  const form = useRef();


  const bounce = cssTransition({
    enter: "flip-horizontal-bottom",
    exit: "flip-horizontal-upward"
});
  const sendEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success(`Message sent successfully`, {
            position: "bottom-right", autoClose: 1000, transition: bounce
          });
          e.target.reset();
        },
        (error) => {
          toast.error(error.text, { autoClose: 1000, transition: bounce});
          
        }
      );
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
          <div className="contact__content">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <h3 className="contact__title">Talk to me</h3>
              <div className="contact__info">
                {/* Contact Card -1 */}
                <div className="contact__card">
                  <i className="bx bx-mail-send contact__card-icon"></i>
                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data">
                    olaokunolalekan@gmail.com
                  </span>
                  <a
                    href="mailto:olaokunolalekan@gmail.com"
                    className="contact__button"
                    target="_blank"
                  >
                    Write me a message
                    <i
                      className="bx bx-right-arrow-alt contact__button-icon
                "
                    ></i>
                  </a>
                </div>
                {/* Contact Card -2 */}
                <div className="contact__card">
                  <i className="bx bxl-whatsapp contact__card-icon"></i>
                  <h3 className="contact__card-title">Whatsapp</h3>
                  <span className="contact__card-data">081-6880-0815</span>
                  <a
                    href="https://wa.me/2348168800815"
                    className="contact__button"
                    target="_blank"
                  >
                    Write me a message
                    <i
                      className="bx bx-right-arrow-alt contact__button-icon
                "
                    ></i>
                  </a>
                </div>
                {/* Contact Card -3 */}
                <div className="contact__card">
                  <i className="bx bxl-linkedin contact__card-icon"></i>
                  <h3 className="contact__card-title">Linkedin</h3>
                  <span className="contact__card-data">
                    Lateef Wasiu Olalekan
                  </span>
                  <a
                    href="https://linkedin.com/in/smartrove"
                    target="_blank"
                    className="contact__button"
                  >
                    Write me
                    <i
                      className="bx bx-right-arrow-alt contact__button-icon
                "
                    ></i>
                  </a>
                </div>
              </div>
            </AnimationOnScroll>
          </div>

          <div className="contact__content">
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <h3 className="contact__title">Write me your project</h3>
              {/* ============ Contact Form ===========  */}
              <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__form-div">
                  <label className="contact__form-tag">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Insert your name"
                    className="contact__form-input"
                    required
                  />
                </div>

                <div className="contact__form-div">
                  <label className="contact__form-tag">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Insert your email"
                    className="contact__form-input"
                    required
                  />
                </div>

                <div className="contact__form-div">
                  <label className="contact__form-tag">Phone</label>
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Insert mobile number"
                    className="contact__form-input"
                    required
                  />
                </div>

                <div className="contact__form-div contact__form-area">
                  <label className="contact__form-tag">Project</label>
                  <textarea
                    name="project"
                    cols="30"
                    rows="10"
                    className="contact__form-input"
                    placeholder="Write your project"
                    required
                  ></textarea>
                </div>
                <button className="button" type="submit">
                  <span className="button-text">Send</span>
                  <span>
                    <i className="button-icon uil uil-arrow-right"></i>
                  </span>
                </button>
              </form>
            </AnimationOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
