 "use client";

import { useState } from "react";

export default function AddMeal() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddMeal = async () => {
    try {
      console.log("Sending meal:", {
        name,
        price: Number(price),
        quantity: Number(quantity),
      });

      const response = await fetch(
        "https://canteen-meal-booking.onrender.com/add-meal",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            price: Number(price),
            quantity: Number(quantity),
          }),
        }
      );

      console.log("Response Status:", response.status);

      const data = await response.json();

      console.log("Response Data:", data);

      if (response.ok) {
        alert(data.message || "Meal Added Successfully");
        setName("");
        setPrice("");
        setQuantity("");
      } else {
        alert(data.message || "Failed to add meal");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to backend.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">
        Add Meal
      </h1>

      <input
        type="text"
        placeholder="Meal Name"
        className="border border-white p-2 m-2 text-white bg-black"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        className="border border-white p-2 m-2 text-white bg-black"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        className="border border-white p-2 m-2 text-white bg-black"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button
        onClick={handleAddMeal}
        className="bg-green-500 text-white px-6 py-2 rounded mt-4"
      >
        Add Meal
      </button>
    </div>
  );
}