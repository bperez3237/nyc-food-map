import React, { useState, useEffect, useRef } from "react";
import { Location } from "../types/ModelTypes";

type Props = {
  map: google.maps.Map;
  setMap: React.Dispatch<React.SetStateAction<google.maps.Map | null>>;
  locations: Location[];
  selectedMarker: Location | null;
  setSelectedMarker: React.Dispatch<React.SetStateAction<Location | null>>;
  setSidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

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
}: Props): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mapInstance = new window.google.maps.Map(
      mapRef.current!,
      defaultMapOptions
    );
    setMap(mapInstance);
  }, []);

  const clickZoomLevel = 13;

  if (window.google && map && locations) {
    locations.forEach((location) => {
      const marker: google.maps.Marker = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.address,
      });

      marker.addListener("click", () => {
        // Get information about the marker

        if (!marker || marker === undefined) {
          return;
        }
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
          // map.setCenter(marker.getPosition());
          map.setZoom(clickZoomLevel);
        } else {
          setSelectedMarker(location);
          setSidePanelOpen(true);
          // map.setCenter(marker.getPosition());
          map.setZoom(clickZoomLevel);
        }
      });
    });
  }

  return <div className="map" ref={mapRef} />;
}

export default Map;
