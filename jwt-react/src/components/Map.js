import React, { useState, useEffect, useRef } from "react";

const defaultMapOptions = {
  center: { lat: 40.7, lng: -73.9 },
  zoom: 11.7,
};
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
    const mapInstance = new window.google.maps.Map(
      mapRef.current,
      defaultMapOptions
    );
    setMap(mapInstance);
  }, []);

  if (window.google) {
    locations.forEach((location) => {
      const marker = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.address,
      });

      marker.addListener("click", () => {
        // Get information about the marker

        if (JSON.stringify(selectedMarker) === JSON.stringify(location)) {
          setSelectedMarker(null);
          setSidePanelOpen(false);
          map.setCenter(defaultMapOptions.center);
          map.setZoom(defaultMapOptions.zoom);
        } else if (
          JSON.stringify(selectedMarker) !== JSON.stringify(location)
        ) {
          setSelectedMarker(location);
          setSidePanelOpen(true);
          map.setCenter(marker.getPosition());
          map.setZoom(14);
        } else {
          setSelectedMarker(location);
          setSidePanelOpen(true);
          map.setCenter(marker.getPosition());
          map.setZoom(14);
        }
      });
    });
  }

  return <div className="map" ref={mapRef} />;
}

export default Map;
