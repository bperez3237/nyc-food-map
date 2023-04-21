import React, { useState } from "react";

function FoodSelect({ foods, selectedFood, setSelectedFood }) {
  console.log(selectedFood);
  const foodOptions = foods.map(
    (food) => (
      console.log(typeof food.id, "food"),
      console.log(typeof selectedFood),
      (
        <div
          className={`food-select-option${
            Number(selectedFood) === food.id ? "-selected" : ""
          }`}
          key={food.id}
          data-value={food.id}
          onClick={(e) => {
            console.log(e.target.dataset.value);
            setSelectedFood(e.target.dataset.value);
          }}
        >
          {food.name}
          {food.emoji}
        </div>
      )
    )
  );
  return <div className="food-select">{foodOptions}</div>;
}

export default FoodSelect;
