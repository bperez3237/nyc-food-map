import React from "react";
import InfoPanel from "./InfoPanel";
import PriceForm from "./Forms/PriceForm";

function SidePanel({
  sidePanelOpen,
  setSidePanelOpen,
  foods,
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
            selectedMarker={selectedMarker}
            setSelectedMarker={setSelectedMarker}
          />
        </>
      ) : null}
    </div>
  );
}

export default SidePanel;
