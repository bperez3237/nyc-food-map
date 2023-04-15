import React from "react";

function InfoPanel({ info, closePanel }) {
  return (
    <div onClick={closePanel}>
      <div
        className="panel-header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2>{info.title}</h2>
        <button onClick={closePanel}>X</button>
      </div>
      <p>Latitude: {info.lat}</p>
      <p>Longitude: {info.lng}</p>
    </div>
  );
}

export default InfoPanel;
