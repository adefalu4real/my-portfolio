import { useState } from "react";
import "./header.css";
import { themeContext } from "../../App";
const Header = ({ toggleTheme }) => {
  //  ======== Function to change icon on toggle ========
  const [iconstate, setIconState] = useState(false);
  const handleIconState = () => {
    setIconState((iconstate) => !iconstate);
  };
  let toggleIconClass = iconstate ? "ul uil-sun" : "ul uil-moon";
  /* == Gives Header a bottom shadow when the scroll reaches a certaion level == */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scoll is higher then 200 viewport height, then add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
  /* =============== Toggle NavMenu to navigate to the section =========== */
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <themeContext.Provider>
      <header className="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo">
            Lateef
          </a>

          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => {
                    setActiveNav("#home");
                    showMenu(!toggle);
                  }}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => {
                    setActiveNav("#about");
                    showMenu(!toggle);
                  }}
                  className={
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => {
                    setActiveNav("#skills");
                    showMenu(!toggle);
                  }}
                  className={
                    activeNav === "#skills"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#services"
                  onClick={() => {
                    setActiveNav("#services");
                    showMenu(!toggle);
                  }}
                  className={
                    activeNav === "#services"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i>Services
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#portfolio"
                  onClick={() => {
                    setActiveNav("#portfolio");
                    showMenu(!toggle);
                  }}
                  className={
                    activeNav === "#portfolio"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-scenery nav__icon"></i>Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => {
                    setActiveNav("#contact");
                    showMenu(!toggle);
                  }}
                  className={
                    activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
              {/* Dark Mode And Light Mode Icon */}
              <li className="nav__item">
                <a
                  onClick={() => {
                    toggleTheme();
                    handleIconState();
                  }}
                  className="desktop-darkmode nav__link"
                >
                  <i className={toggleIconClass}></i>
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!toggle)}
            ></i>
          </div>
          {/* Toggle Container for Mobile */}
          <div className="nav__toggle-container">
            {/* Dark Mode And Light Mode Icon */}
            <div>
              <i
                className={`${toggleIconClass} change-theme nav__toggle`}
                onClick={() => {
                  toggleTheme();
                  handleIconState();
                }}
              ></i>
            </div>
            {/* Apps Icon */}
            <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>
    </themeContext.Provider>
  );
};

export default Header;
