 "use client";

import { useState } from "react";

export default function AddMealPage() {

  const [meal, setMeal] = useState({
    name: "",
    price: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setMeal({
      ...meal,
      [e.target.name]: e.target.value
    });
  };

  const addMeal = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:8080/meals/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: meal.name,
          price: Number(meal.price),
          quantity: Number(meal.quantity)
        })
      });

      const message = await response.text();

      if (response.ok) {
        alert(message);

        setMeal({
          name: "",
          price: "",
          quantity: ""
        });

      } else {
        alert("Failed to add meal");
      }

    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center">

      <form
        onSubmit={addMeal}
        className="bg-white w-[450px] p-10 rounded-3xl shadow-2xl"
      >

        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          🍽 Add Meal
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Meal Name"
          value={meal.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-5"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={meal.price}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-5"
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={meal.quantity}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-6"
          required
        />

        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-bold"
        >
          ➕ Add Meal
        </button>

      </form>

    </div>

  );
}