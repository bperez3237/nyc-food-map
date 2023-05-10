import React, { useState } from "react";
import { Food } from "../types/ModelTypes";

type FoodSelectProps = {
  foods: Food[];
  selectedFoodId: string;
  setSelectedFoodId: (id: string) => void;
};

function FoodSelect({
  foods,
  selectedFoodId,
  setSelectedFoodId,
}: FoodSelectProps) {
  const foodOptions = foods.map((food) => (
    <div
      className={`food-select-option${
        Number(selectedFoodId) === food.id ? "-selected" : ""
      }`}
      key={food.id}
      data-value={food.id}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        setSelectedFoodId(e.currentTarget.dataset.value!);
      }}
    >
      {`${food.name} - ${food.emoji}`}
    </div>
  ));
  return <div className="food-select">{foodOptions}</div>;
}

export default FoodSelect;
