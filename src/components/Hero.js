import React from "react";
import photoGrid from "../photo-grid.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero-img" src={photoGrid} alt="" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
