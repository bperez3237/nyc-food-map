import React, { useState } from "react";

function FoodSelect({ foods, selectedFoodId, setSelectedFoodId }) {
  const foodOptions = foods.map((food) => (
    <div
      className={`food-select-option${
        Number(selectedFoodId) === food.id ? "-selected" : ""
      }`}
      key={food.id}
      data-value={food.id}
      onClick={(e) => {
        setSelectedFoodId(e.target.dataset.value);
      }}
    >
      {`${food.name} - ${food.emoji}`}
    </div>
  ));
  return <div className="food-select">{foodOptions}</div>;
}

export default FoodSelect;
