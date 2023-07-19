﻿import React, { useState } from "react";
import { Food } from "../../types/ModelTypes";

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
    <div>
      <h1>Create Food</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Emoji</label>
        <input
          value={emojiCode}
          onChange={(e) => setEmojiCode(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FoodForm;
