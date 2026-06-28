 "use client";

import { useEffect, useState } from "react";

export default function OrderPage() {
  const [mealId, setMealId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("mealId");
    if (id) {
      setMealId(id);
    }
  }, []);

  const handleOrder = async (e) => {
    e.preventDefault();

    const username = localStorage.getItem("username");

    try {
      const response = await fetch(
        "https://canteen-meal-booking-backend.onrender.com/orders/place",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            quantity: Number(quantity),
            meal: {
              id: Number(mealId),
            },
          }),
        }
      );

      if (response.ok) {
        setMessage("Order placed successfully!");
        setQuantity("");
      } else {
        const error = await response.text();
        setMessage(error);
      }
    } catch (error) {
      setMessage("Unable to connect to server.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleOrder}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          Place Order
        </h1>

        <input
          type="number"
          value={mealId}
          readOnly
          className="w-full border p-3 rounded mb-4 bg-gray-100 text-black"
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full border p-3 rounded mb-4 text-black"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Place Order
        </button>

        {message && (
          <p className="text-center mt-4 text-blue-600 font-semibold">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}