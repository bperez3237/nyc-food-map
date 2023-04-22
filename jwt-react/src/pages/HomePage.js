import React, { useState } from "react";
import Map from "../components/Map";
import "./Homepage.css";
import SidePanel from "../components/SidePanel";

function HomePage({ map, setMap, locations, foods }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [side, setSide] = useState(false);

  return (
    <div className="homepage">
      <h1>NYC Food Map</h1>
      <p>Add locations and submit information</p>
      <div className="main-display">
        <Map
          map={map}
          setMap={setMap}
          locations={locations}
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
          setSidePanelOpen={setSide}
        />
        <SidePanel
          sidePanelOpen={side}
          setSidePanelOpen={setSide}
          foods={foods}
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
        />
      </div>
    </div>
  );
}

export default HomePage;
