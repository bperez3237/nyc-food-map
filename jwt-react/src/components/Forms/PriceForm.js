import React, { useState } from "react";
import FoodSelect from "../FoodSelect";

function PriceForm({ selectedMarker, setSelectedMarker, foods }) {
  const [selectedFoodId, setSelectedFoodId] = useState(foods[0].id);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (price === 0) {
      console.log("price cannot be zero");
      return;
    }
    postData(e);
  };

  const postData = async (e) => {
    if (isNaN(Number(price))) {
      console.log("not a number");
      return;
    }
    const response = await fetch("http://127.0.0.1:8000/prices/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: Number(price),
        location: selectedMarker.id,
        food: selectedFoodId,
      }),
    });
    const data = await response.json();
    const new_prices = [...selectedMarker.prices, data];
    const new_average =
      new_prices.reduce((total, price) => total + price.value, 0) /
      [...selectedMarker.prices, data].length;
    setSelectedMarker({
      ...selectedMarker,
      prices: [...selectedMarker.prices, data],
      average_price: new_average,
    });

    setPrice(0);
  };

  return (
    <div className="price-form">
      <h4>Add Price</h4>
      <form onSubmit={handleSubmit}>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label>Food:</label>
        <FoodSelect
          foods={foods}
          selectedFoodId={selectedFoodId}
          setSelectedFoodId={setSelectedFoodId}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PriceForm;
