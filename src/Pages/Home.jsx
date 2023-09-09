import React, { useState, useEffect } from "react";
import HomeImage from "../assets/baked-potatoes-with-garlic-herbs-fried-chanterelles-cast-iron-skillet-top-view.jpg";
import About from "./About";
import Menu from '../Pages/Menu'
import Contact from "./Contact";
import "../AllCss/Home.css";

const Home = () => {

  return (
    <>
      <div className="HomeContainer" style={{backgroundImage: `url(${HomeImage})`}}>
        <div className="leftSide">
        <div className="homeText">
          <h1>Local Restaurant</h1>
          <p>Get your local Dishes Here</p>
        </div>
        <button className="btn">Order Now</button>
        </div>
      </div>
      <Menu />
      <About />
      <Contact />
    </>
  );
};

export default Home;