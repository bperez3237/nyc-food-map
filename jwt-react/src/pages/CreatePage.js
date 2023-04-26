import React, { useState, useEffect } from "react";
import LocationForm from "../components/Forms/LocationForm.tsx";
import FoodForm from "../components/Forms/FoodForm.tsx";
import PriceForm from "../components/Forms/PriceForm.tsx";

function CreatePage({ locations, setLocations, foods, setFoods }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>toggle form</button>
      {toggle ? (
        <LocationForm locations={locations} setLocations={setLocations} />
      ) : (
        <FoodForm foods={foods} setFoods={setFoods} />
      )}
    </div>
  );
}

export default CreatePage;
