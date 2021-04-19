import React, { useState, useEffect } from "react";
import "./allinfo.css";
import { Link } from "react-router-dom";
import InfoTable from "./infotable";

const AllInfo = () => {
  return (
    <>
      <div className="head">
        <h3>ADSOUL</h3>
      </div>
      <div className="headinfo">
        <div>
          <Link to="/">
            <h1 className="unicode">←</h1>
          </Link>
        </div>
        <div className="appinfo">
          <h2>WhatsApp Messenger</h2>
          <p>WhatsApp LLC</p>
        </div>
      </div>
      <div className="apiDataBox">
        <InfoTable />
      </div>
    </>
  );
};

export default AllInfo;
