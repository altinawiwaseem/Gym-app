import React from "react";
import "./HeroBanner.css";
import banner from "../../assets/images/banner.jpg";
function HeroBanner() {
  return (
    <div className="box">
      <p>Fitness Club</p>
      <p>
        Sweat, Smile <br /> and Repeat
      </p>
      <p>check out the most effective exercises </p>
      <button href="#exercises">Explore Exercises</button>
      <p className="big-text">Exercise</p>
      <img src={banner} alt="" className="hero-banner-img" />
    </div>
  );
}

export default HeroBanner;
