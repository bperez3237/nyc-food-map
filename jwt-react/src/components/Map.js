import React, { useState, useEffect, useRef } from "react";

function Map({
  map,
  setMap,
  locations,
  selectedMarker,
  setSelectedMarker,
  setSidePanelOpen,
}) {
  const mapRef = useRef(null);
<<<<<<< HEAD
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
=======
  useEffect(() => {
    const mapOptions = {
      center: { lat: 40.7, lng: -73.9 },
      zoom: 11.7,
    };
    const mapInstance = new window.google.maps.Map(mapRef.current, mapOptions);
>>>>>>> e72630569b86904739a5a4ea2e8522f4376ca59e
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
<<<<<<< HEAD
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
=======

      if (JSON.stringify(selectedMarker) === JSON.stringify(location)) {
        setSelectedMarker(null);
        setSidePanelOpen(false);
      } else if (JSON.stringify(selectedMarker) !== JSON.stringify(location)) {
        setSelectedMarker(location);
        setSidePanelOpen(true);
      } else {
        setSelectedMarker(location);
        setSidePanelOpen(true);
>>>>>>> e72630569b86904739a5a4ea2e8522f4376ca59e
      }
    });
  });

  return <div className="map" ref={mapRef} />;
}

export default Map;
