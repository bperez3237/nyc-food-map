import React, { useState, useEffect, useRef } from "react";

function Map({ map, setMap, locations }) {
  const mapRef = useRef(null);
  console.log(locations);

  useEffect(() => {
    const mapOptions = {
      center: { lat: 40.7, lng: -73.9 },
      zoom: 11.5,
    };
    const mapInstance = new window.google.maps.Map(mapRef.current, mapOptions);
    setMap(mapInstance);
  }, []);

  locations.forEach((location) => {
    const marker = new window.google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.address,
    });

    marker.addListener("click", () => {
      // Get information about the marker
      const info = {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng(),
        title: marker.getTitle(),
      };
      console.log(info);
    });
  });

  return <div style={{ height: "800px", width: "100%" }} ref={mapRef} />;
}

export default Map;
