import React, { useState, useEffect } from "react";
import LocationForm from "../components/Forms/LocationForm";
import FoodForm from "../components/Forms/FoodForm.tsx";
import PriceForm from "../components/Forms/PriceForm";

function CreatePage({ locations, setLocations, foods, setFoods }) {
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
    formToShow = <FoodForm foods={foods} setFoods={setFoods} />;
  } else {
    formToShow = <PriceForm locations={locations} foods={foods} />;
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
