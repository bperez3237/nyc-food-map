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

  console.log(selectedMarker);
  return (
    <div className={`side-panel${sidePanelOpen ? " open" : ""}`}>
      <p>testing</p>

      <button onClick={closeSidePanel}>X</button>
      {selectedMarker ? (
        <>
          <InfoPanel
            selectedMarker={selectedMarker}
            setSelectedMarker={setSelectedMarker}
          />
          <PriceForm
            foods={foods}
            // locations={locations}
            locationId={selectedMarker.id}
          />
        </>
      ) : null}
    </div>
  );
}

export default SidePanel;
