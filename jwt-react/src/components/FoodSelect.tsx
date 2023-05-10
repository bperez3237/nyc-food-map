import React, { useState } from "react";
import { Food } from "../types/ModelTypes";

type FoodSelectProps = {
  foods: Food[] | null;
  selectedFoodId: number | null;
  setSelectedFoodId: (id: number) => void;
};

function FoodSelect({
  foods,
  selectedFoodId,
  setSelectedFoodId,
}: FoodSelectProps): JSX.Element {
  if (foods === null) {
    return <div className="food-select">Loading...</div>; // or any other UI representation for the null case
  }

  const foodOptions = foods.map((food) => (
    <div
      className={`food-select-option${
        Number(selectedFoodId) === food.id ? "-selected" : ""
      }`}
      key={food.id}
      data-value={food.id}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        setSelectedFoodId(Number(e.currentTarget.dataset.value));
      }}
    >
      {`${food.name} - ${food.emoji}`}
    </div>
  ));
  return <div className="food-select">{foodOptions}</div>;
}

export default FoodSelect;
