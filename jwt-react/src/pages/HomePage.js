import React from 'react';
import Map from '../components/Map';

function HomePage({map, setMap}) {
  return (
    <div>
      <h1>NYC Food Map</h1>
      <p>Add locations and submit information</p>
      <Map map={map} setMap={setMap}/>
    </div>);
}

export default HomePage;
