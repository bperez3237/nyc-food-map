import React from "react";
import InfoPanel from "./InfoPanel";
import PriceForm from "./Forms/PriceForm";

function SidePanel({
  sidePanelOpen,
  setSidePanelOpen,
  foods,
  locations,
  selectedMarker,
  setSelectedMarker,
}) {
  const closeSidePanel = () => {
    setSidePanelOpen(false);
    setSelectedMarker(null);
  };
  return (
    <div className={`side-panel${sidePanelOpen ? " open" : ""}`}>
      <p>testing</p>

      <button onClick={closeSidePanel}>X</button>
      {selectedMarker ? (
        <InfoPanel
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
        />
      ) : null}
      <PriceForm foods={foods} locations={locations} />
    </div>
  );
}

export default SidePanel;
