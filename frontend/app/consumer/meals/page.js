 "use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MealsPage() {
  const [meals, setMeals] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://canteen-meal-booking-backend.onrender.com/meals/all")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        🍽️ Available Meals
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {meal.name}
            </h2>

            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">💰 Price:</span>{" "}
              <span className="text-green-600 font-bold">
                ₹{meal.price}
              </span>
            </p>

            <p className="text-lg text-gray-700 mb-6">
              <span className="font-semibold">📦 Quantity:</span>{" "}
              <span className="text-blue-600 font-bold">
                {meal.quantity}
              </span>
            </p>

            <button
              onClick={() => {
                localStorage.setItem("mealId", meal.id);
                router.push("/consumer/order");
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}