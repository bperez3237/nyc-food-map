import React, { useState } from "react";
import InfoPanel from "../components/InfoPanel";
import Map from "../components/Map";
import "./Homepage.css";
import SidePanel from "../components/SidePanel";

function HomePage({ map, setMap, locations }) {
  const [toggle, setToggle] = useState(null);
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
          toggle={toggle}
          setToggle={setToggle}
        />
        <SidePanel sidePanelOpen={side} setSidePanelOpen={setSide} />
      </div>
      {toggle ? (
        <InfoPanel info={toggle} closePanel={() => setToggle(null)} />
      ) : null}
    </div>
  );
}

export default HomePage;
