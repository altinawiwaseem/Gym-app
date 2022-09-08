import React, { useState } from "react";
import Exercises from "../../components/Exercises/Exercises";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SearchExercises from "../../components/SearchExercises/SearchExercises";
import "./Home.css";

function Home() {
  return (
    <div>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </div>
  );
}

export default Home;
