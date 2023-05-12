import React, { useEffect, useState } from "react";
import formatAddress from "../utils/format";
import { Location } from "../types/ModelTypes";

type Props = {
  selectedMarker: Location;
  setSelectedMarker: React.Dispatch<React.SetStateAction<Location | null>>;
};

function InfoPanel({
  selectedMarker,
  setSelectedMarker,
}: Props): JSX.Element | null {
  const [data, setData] = useState<Location | null>(null);

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
    <div className="info-panel">
      <div
        className="info-panel-header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2>{formatAddress(selectedMarker.address)}</h2>
      </div>
      <p>{`(${selectedMarker.lat.toFixed(2)},${selectedMarker.lng.toFixed(
        2
      )})`}</p>
      {data?.average_price ? (
        <p>Average Price: {data.average_price.toFixed(2)}</p>
      ) : null}
    </div>
  );
}

export default InfoPanel;
