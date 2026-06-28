 "use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OrderPage() {
  const [mealId, setMealId] = useState("");
  const [meal, setMeal] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("mealId");

    if (!id) {
      alert("Please select a meal first.");
      router.push("/consumer/meals");
      return;
    }

    setMealId(id);

    fetch(`https://canteen-meal-booking-backend.onrender.com/meals/${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data))
      .catch((err) => console.log(err));

  }, [router]);

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
        setMessage("✅ Order placed successfully!");

        localStorage.removeItem("mealId");

        setTimeout(() => {
          router.push("/consumer/myorders");
        }, 1500);

      } else {
        const error = await response.text();
        setMessage(error);
      }

    } catch (error) {
      setMessage("Unable to connect to server.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-100 flex justify-center items-center p-6">

      <form
        onSubmit={handleOrder}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          🍽 Place Order
        </h1>

        {meal && (
          <div className="bg-green-50 rounded-xl p-5 mb-6 border">

            <h2 className="text-2xl font-bold text-gray-800">
              {meal.name}
            </h2>

            <p className="text-xl text-green-700 font-semibold mt-2">
              💰 ₹{meal.price}
            </p>

            <p className="text-gray-600 mt-2">
              Available: {meal.quantity}
            </p>

          </div>
        )}

        <label className="block mb-2 font-semibold text-gray-700">
          Quantity
        </label>

        <input
          type="number"
          min="1"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full border-2 border-gray-300 p-3 rounded-xl mb-6 text-black focus:outline-none focus:border-green-600"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-lg font-bold transition"
        >
          🛒 Place Order
        </button>

        {message && (
          <p className="text-center mt-5 font-semibold text-blue-700">
            {message}
          </p>
        )}

      </form>

    </div>
  );
}