import React, { useState } from "react";
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
    </div>
  );
}

export default HomePage;
