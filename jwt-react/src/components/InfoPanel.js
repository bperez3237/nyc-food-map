import React from "react";

function InfoPanel({ info }) {
  return (
    <div>
      <h2>{info.title}</h2>
      <p>Latitude: {info.lat}</p>
      <p>Longitude: {info.lng}</p>
    </div>
  );
}

export default InfoPanel;
