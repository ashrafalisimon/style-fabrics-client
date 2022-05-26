import React from "react";
import AboutMe from "./AboutMe";
import HeroSection from "./HeroSection";
import MyProject from "./MyProject";

const Protfolio = () => {
  return (
    <div className="px-4 md:px-28 py-8">
        <HeroSection/>
      <AboutMe />
      <MyProject/>
    </div>
  );
};

export default Protfolio;
