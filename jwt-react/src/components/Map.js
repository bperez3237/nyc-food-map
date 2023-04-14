import React, { useState, useEffect, useRef } from 'react';

function Map({map, setMap, locations}) {
  const mapRef = useRef(null);
  console.log(locations)

  useEffect(() => {
    const mapOptions = {
      center: { lat: 40.7, lng: -73.9 },
      zoom: 11.5
    };
    const mapInstance = new window.google.maps.Map(mapRef.current, mapOptions);
    setMap(mapInstance);
  }, []);

  locations.forEach(location => {
    const lat = location.lat;
    const lng = location.lng;
    const marker = new window.google.maps.Marker({
      position: { lat, lng },
      map: map,
      title: location.address,
    });
  })

  return (
    <div
      style={{ height: '800px', width: '100%' }}
      ref={mapRef}
    />
  );
}

export default Map;

