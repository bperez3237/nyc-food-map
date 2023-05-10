import React from "react";
import PriceForm from "./Forms/PriceForm";
import InfoPanel from "./InfoPanel";
import { Food, Location } from "../types/ModelTypes";

type Props = {
  sidePanelOpen: boolean;
  setSidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  foods: Food[] | null;
  selectedMarker: Location | null;
  setSelectedMarker: React.Dispatch<React.SetStateAction<Location | null>>;
};

function SidePanel({
  sidePanelOpen,
  setSidePanelOpen,
  foods,
  selectedMarker,
  setSelectedMarker,
}: Props): JSX.Element {
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
    </div>
  );
}

export default SidePanel;
