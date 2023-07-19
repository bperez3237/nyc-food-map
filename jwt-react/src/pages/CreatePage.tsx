import React, { useState } from "react";
import LocationForm from "../components/Forms/LocationForm";
import FoodForm from "../components/Forms/FoodForm";
import { Food, Location } from "../types/ModelTypes";

type Props = {
  locations: Location[] | null;
  setLocations: React.Dispatch<React.SetStateAction<Location[] | null>>;
  foods: Food[];
  setFoods: React.Dispatch<React.SetStateAction<Food[]>>;
};

function CreatePage({
  locations,
  setLocations,
  foods,
  setFoods,
}: Props): JSX.Element {
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
