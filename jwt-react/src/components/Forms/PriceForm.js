import React, { useState } from "react";

function PriceForm({ locationId, foods }) {
  const [selectedFood, setSelectedFood] = useState(foods[0].id);
  const [price, setPrice] = useState(0);

  const foodOptions = foods.map((food) => (
    <option key={food.id} value={food.id}>
      {food.name}
    </option>
  ));

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
        location: locationId,
        food: selectedFood,
      }),
    });
    const data = await response.json();
    console.log(data);
    setPrice(0);
  };

  return (
    <div>
      <h1>Add Price</h1>
      <form onSubmit={handleSubmit}>
        <label>Price:</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
        <label>Food:</label>
        <select onChange={(e) => setSelectedFood(e.target.value)}>
          {foodOptions}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PriceForm;
