import React, { useState, useEffect, useRef } from 'react';

function Map({map, setMap}) {
  const mapRef = useRef(null);

  useEffect(() => {
    
    const mapOptions = {
      center: { lat: 40.7, lng: -73.9 },
      zoom: 11.5
    };
    const mapInstance = new window.google.maps.Map(mapRef.current, mapOptions);
    setMap(mapInstance);
  }, []);

  return (
    <div
      style={{ height: '800px', width: '100%' }}
      ref={mapRef}
    />
  );
}

export default Map;

