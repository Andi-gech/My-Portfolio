import React, { useState } from "react";
import Navbars from "./Navbars";
import Header from "./newapp";
import "./app.css";
import Myprofile from "./myprofile";
import Skill from "./skill";
import View from "./view";
import Lottie from "react-lottie";
import Data from "./25059-gray-seagulls (1).json";
import Projects from "./projects";
import Contact from "./Contact";

function Banner(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="banner">
        <Navbars />

        <h1 className="bannerText ">
          &nbsp; Hello I am <span className="text ">Andi</span>
          <br /> Full Stack Developer
        </h1>

        <div className="birds">
          <Lottie
            options={defaultOptions}
            height={600}
            width={900}
            speed={0.5}
          />
        </div>
      </div>

      <Myprofile />

      <Skill />
      <View />
      <Projects />
      <Contact />
    </div>
  );
}

export default Banner;
