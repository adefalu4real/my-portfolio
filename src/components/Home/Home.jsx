import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
// import ScrollDown from "./ScrollDown";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container grid">
        <div className="home__content grid">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <Social />
          </AnimationOnScroll>
          <div className="home__image"></div>
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
