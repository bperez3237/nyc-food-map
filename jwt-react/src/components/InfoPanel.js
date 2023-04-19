import React, { useEffect, useState } from "react";

function InfoPanel({ info, closePanel }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/locations/${info.id}`
      );
      const data = await response.json();
      setData(data.location);
    };
    getData();
  }, [info.id]);

  console.log(data);
  return (
    <div>
      <div
        className="panel-header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2>{info.title}</h2>
        <button onClick={closePanel}>X</button>
      </div>
      <p>Latitude: {info.lat}</p>
      <p>Longitude: {info.lng}</p>
      <p>Average Price: {data.average_price}</p>
    </div>
  );
}

export default InfoPanel;
