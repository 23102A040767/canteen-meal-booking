 "use client";

import { useEffect, useState } from "react";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await fetch(
        "https://canteen-meal-booking.onrender.com/meals"
      );

      const data = await response.json();

      console.log("Meals Data:", data);

      setMeals(data);
    } catch (error) {
      console.error("Error fetching meals:", error);
      alert("Failed to load meals");
    }
  };

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-5">
        Available Meals
      </h1>

      <table className="border border-white w-full">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {meals.map((meal) => (
            <tr key={meal.id}>
              <td className="border p-2">{meal.id}</td>
              <td className="border p-2">{meal.name}</td>
              <td className="border p-2">{meal.price}</td>
              <td className="border p-2">{meal.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}