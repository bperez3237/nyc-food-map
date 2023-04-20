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

  return (
    <div className={`side-panel${sidePanelOpen ? " open" : ""}`}>
      <div className="side-panel-header">
        <button onClick={closeSidePanel}>X</button>
      </div>
      {selectedMarker ? (
        <div className="side-panel-content">
          <InfoPanel
            selectedMarker={selectedMarker}
            setSelectedMarker={setSelectedMarker}
          />
          <PriceForm
            foods={foods}
            selectedMarker={selectedMarker}
            setSelectedMarker={setSelectedMarker}
          />
        </div>
      ) : null}
      <h3>&#128054;</h3>
    </div>
  );
}

export default SidePanel;
