import "./infotable.css";
import { useState, useEffect } from "react";
import InfoTableBottom from "./InfoTableBottom";

const InfoTable = () => {
  const [info, setInfo] = useState({});
  const getData = async () => {
    const response = await fetch("https://api.npoint.io/d734975d2aee62d197ef");
    const data = await response.json();
    console.log(data);

    setInfo(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="main">
        <div>
          <h5>Date</h5>
        </div>
        <div>
          <h5>Revenue</h5>
        </div>
        <div>
          <h5>Ad Requests</h5>
        </div>
        <div>
          <h5>Ad Responses</h5>
        </div>
        <div>
          <h5>Impressions </h5>
        </div>
        <div>
          <h5>Clicks</h5>
        </div>
        <div>
          <h5>Render Rate</h5>
        </div>
      </div>
      <div>
        {info.map(() => {
          return (
            <div>
              <p>12</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InfoTable;
