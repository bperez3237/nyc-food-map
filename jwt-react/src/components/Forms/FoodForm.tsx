import React, { useState } from "react";
import { Food } from "../../types/ModelTypes";
import "./style.css";

type Props = {
  foods: Food[];
  setFoods: React.Dispatch<React.SetStateAction<Food[]>>;
};

function FoodForm({ foods, setFoods }: Props): JSX.Element {
  const [name, setName] = useState<string>("");
  const [emojiCode, setEmojiCode] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      return;
    }

    postData(e);
  };

  const foodElements = foods
    ? foods.map((food) => {
        return (
          <div key={food.id}>
            <h3>{food.name}</h3>
            <p>{food.emoji}</p>
          </div>
        );
      })
    : [];

  const postData = async (e: React.FormEvent<HTMLFormElement>) => {
    const response = await fetch("http://127.0.0.1:8000/foods/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        emoji: emojiCode,
      }),
    });
    const data = await response.json();
    setFoods([...foods, data]);
    setName("");
    setEmojiCode("");
  };

  return (
    <div className="form">
      <h1 className="form-title">Create Food</h1>
      <form className="form-body" onSubmit={handleSubmit}>
        <label className="label">Name</label>
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="label">Emoji</label>
        <input
          className="input"
          value={emojiCode}
          onChange={(e) => setEmojiCode(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="element-group">{foodElements}</div>
    </div>
  );
}

export default FoodForm;
