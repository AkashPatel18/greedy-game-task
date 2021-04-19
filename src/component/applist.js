import AppLayout from "./appLayout";
import React, { useEffect, useState } from "react";

const Applist = () => {
  const [info, setInfo] = useState([]);

  const getData = async () => {
    const response = await fetch("https://api.npoint.io/4ca5aaf459a573940672");
    const data = await response.json();

    setInfo(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {info.map((elem) => {
        return (
          <div
            style={{
              margin: "1rem",
              background: "white",
              borderRadius: "4px",
            }}
          >
            <AppLayout name={elem.appName} publisher={elem.publisherName} />
          </div>
        );
      })}
    </>
  );
};

export default Applist;
