 "use client";

import { useState } from "react";

export default function Order() {
  const [username, setUsername] = useState("");
  const [mealId, setMealId] = useState("");
  const [quantity, setQuantity] = useState("");

  const placeOrder = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          meal_id: Number(mealId),
          quantity: Number(quantity),
        }),
      });

      const data = await response.json();

      alert(data.message);

      setUsername("");
      setMealId("");
      setQuantity("");
    } catch (error) {
      console.error(error);
      alert("Order Failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">
        Place Order
      </h1>

      <input
        type="text"
        placeholder="Username"
        className="border border-white p-2 m-2 text-white"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="number"
        placeholder="Meal ID"
        className="border border-white p-2 m-2 text-white"
        value={mealId}
        onChange={(e) => setMealId(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        className="border border-white p-2 m-2 text-white"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button
        onClick={placeOrder}
        className="bg-yellow-500 text-black px-5 py-2 rounded mt-3"
      >
        Place Order
      </button>
    </div>
  );
}