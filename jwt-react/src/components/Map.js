import React, { useState, useEffect, useRef } from "react";

function Map({ map, setMap, locations, toggle, setToggle }) {
  const mapRef = useRef(null);
  console.log(locations);
  console.log(toggle);

  const defaultMapOptions = {
    center: { lat: 40.7, lng: -73.95 },
    zoom: 11.5,
  };

  useEffect(() => {
    const mapInstance = new window.google.maps.Map(
      mapRef.current,
      defaultMapOptions
    );
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

      if (JSON.stringify(toggle) === JSON.stringify(info)) {
        setToggle(null);
        map.setCenter(defaultMapOptions.center);
        map.setZoom(defaultMapOptions.zoom);
      } else {
        setToggle(info);
        map.setCenter(marker.getPosition());
        map.setZoom(15);
      }
    });
  });

  return <div style={{ height: "800px", width: "100%" }} ref={mapRef} />;
}

export default Map;
