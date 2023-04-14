import React, { useState } from "react";
import LocationForm from "../components/Forms/LocationForm";
import FoodForm from "../components/Forms/FoodForm";
import PriceForm from "../components/Forms/PriceForm";

function CreatePage({ locations, setLocations }) {
  const [toggle, setToggle] = useState("left");

  const handleClick = () => {
    if (toggle === "left") {
      setToggle("center");
    } else if (toggle === "center") {
      setToggle("right");
    } else {
      setToggle("left");
    }
  };

  let formToShow;
  if (toggle === "left") {
    formToShow = (
      <LocationForm locations={locations} setLocations={setLocations} />
    );
  } else if (toggle === "center") {
    formToShow = <FoodForm />;
  } else {
    formToShow = <PriceForm />;
  }

  return (
    <div>
      <button onClick={handleClick}>toggle form</button>
      <p>{toggle}</p>
      {formToShow}
    </div>
  );
}

export default CreatePage;
