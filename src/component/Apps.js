import React from "react";
import Applist from "./applist";
import "./apps.css";

const Apps = () => {
  return (
    <>
      <div className="appsContainer">
        <div className="appsHeading">
          <h2>Apps</h2>
        </div>
        <div className="appsContentoff">
          <div className="appsContent">
            <Applist />
          </div>
        </div>
      </div>
    </>
  );
};

export default Apps;
