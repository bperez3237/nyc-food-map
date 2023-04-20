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
  useEffect(() => {
    const mapOptions = {
      center: { lat: 40.7, lng: -73.9 },
      zoom: 11.7,
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
        id: location.id,
      };

      if (JSON.stringify(selectedMarker) === JSON.stringify(info)) {
        setSelectedMarker(null);
        setSidePanelOpen(false);
      } else if (JSON.stringify(selectedMarker) !== JSON.stringify(info)) {
        setSelectedMarker(info);
        setSidePanelOpen(true);
      } else {
        setSelectedMarker(info);
        setSidePanelOpen(true);
      }
    });
  });

  return <div className="map" ref={mapRef} />;
}

export default Map;
