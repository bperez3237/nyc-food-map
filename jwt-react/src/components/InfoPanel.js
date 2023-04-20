import React, { useEffect, useState } from "react";
import formatAddress from "../utils/format.tsx";

function InfoPanel({ selectedMarker, setSelectedMarker }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/locations/${selectedMarker.id}`
      );
      const data = await response.json();
      setData(data.location);
    };
    getData();
  }, [selectedMarker]);

  return (
    <div>
      <div
        className="panel-header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2>{formatAddress(selectedMarker.address)}</h2>
      </div>
      <p>Latitude: {selectedMarker.lat?.toFixed(2)}</p>
      <p>Longitude: {selectedMarker.lng?.toFixed(2)}</p>
      <p>Average Price: {data.average_price?.toFixed(2)}</p>
    </div>
  );
}

export default InfoPanel;
