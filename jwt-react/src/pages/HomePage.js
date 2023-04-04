import React from 'react';
import Map from '../components/Map';

function HomePage({map, setMap}) {
  return (
    <div>
      <h1>Home</h1>
      <p>Text here!</p>
      <Map map={map} setMap={setMap}/>
    </div>);
}

export default HomePage;
