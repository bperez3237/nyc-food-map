import React, { useState } from "react";
import InfoPanel from "../components/InfoPanel";
import Map from "../components/Map";

function HomePage({ map, setMap, locations }) {
  const [toggle, setToggle] = useState(null);

  return (
    <div>
      <h1>NYC Food Map</h1>
      <p>Add locations and submit information</p>
      <Map
        map={map}
        setMap={setMap}
        locations={locations}
        toggle={toggle}
        setToggle={setToggle}
      />
      {toggle ? <InfoPanel info={toggle} /> : null}
    </div>
  );
}

export default HomePage;
