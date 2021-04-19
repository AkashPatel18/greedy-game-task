import React, { useState } from "react";
import Image from "../assets/asset1.svg";
import Image2 from "../assets/icon1.svg";
import Image3 from "../assets/icon2.svg";
import Image4 from "../assets/icon3.svg";
import Image5 from "../assets/icon4.svg";
import Apps from "./Apps";

import "./home.css";

const Home = () => {
  return (
    <>
      <div className="homeGrid">
        <div className="mainImage">
          <div className="mainImageHeading">
            <h3>ADSOUL</h3>
          </div>
          <div className="asset1">
            <img src={Image} alt=""></img>
          </div>
        </div>
        <div className="bottomDescription">
          <div className="bottomDescriptionHeading">
            <h2>Revenue Optimization</h2>
          </div>
          <div className="iconGrid">
            <div className="icon1">
              <img src={Image2} alt=""></img>
              <p>Fill Rate</p>
            </div>
            <div className="icon2">
              <img src={Image3} alt=""></img>
              <p>Improve CTR</p>
            </div>
            <div className="icon3">
              <img src={Image4} alt=""></img>
              <p>Refresh Rate</p>
            </div>
            <div className="icon4">
              <img src={Image5} alt=""></img>
              <p>Quick Inegration</p>
            </div>
          </div>
        </div>
        <div className="apiData">
          <Apps />
        </div>
      </div>
    </>
  );
};

export default Home;
