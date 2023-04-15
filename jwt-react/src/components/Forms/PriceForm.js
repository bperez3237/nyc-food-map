import React, { useState } from "react";

function PriceForm({ locations, foods }) {
  const [selectedLocation, setSelectedLocation] = useState(locations[0].id);
  const [selectedFood, setSelectedFood] = useState(foods[0].id);
  const [prices, setPrices] = useState([]);
  const [price, setPrice] = useState(0);

  const foodOptions = foods.map((food) => (
    <option key={food.id} value={food.id}>
      {food.name}
    </option>
  ));
  const locationOptions = locations.map((location) => (
    <option key={location.id} value={location.id}>
      {location.address}
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
        location: selectedLocation,
        food: selectedFood,
      }),
    });
    const data = await response.json();
    console.log(data);
    setPrice("");
  };

  return (
    <div>
      <h1>Add Price</h1>
      <form onSubmit={handleSubmit}>
        <label>Price:</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
        <label>Location:</label>
        <select>{locationOptions}</select>
        <label>Food:</label>
        <select>{foodOptions}</select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PriceForm;
