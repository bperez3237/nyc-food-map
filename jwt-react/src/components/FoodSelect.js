import React, { useState } from "react";

function FoodSelect({ foods }) {
  const [selected, setSelected] = useState(null);

  const foodOptions = foods.map((food) => (
    <div className="food-select-option" key={food.id} value={food.id}>
      {food.name}
    </div>
  ));
  return <div className="food-select">FoodSelect</div>;
}

export default FoodSelect;
