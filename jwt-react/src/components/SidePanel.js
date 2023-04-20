import React from "react";
import InfoPanel from "./InfoPanel";
import PriceForm from "./Forms/PriceForm";

function SidePanel({ sidePanelOpen, setSidePanelOpen, foods, locations }) {
  return (
    <div className={`side-panel${sidePanelOpen ? " open" : ""}`}>
      <p>testing</p>
      <PriceForm foods={foods} locations={locations} />
    </div>
  );
}

export default SidePanel;
