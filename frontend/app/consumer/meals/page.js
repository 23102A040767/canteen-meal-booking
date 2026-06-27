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

      <h1 className="text-4xl font-bold text-center mb-8">
        Available Meals
      </h1>

      <div className="grid gap-6">

        {meals.map((meal) => (

          <div
            key={meal.id}
            className="bg-white shadow-lg rounded-lg p-6"
          >

            <h2 className="text-2xl font-bold">
              {meal.name}
            </h2>

            <p className="text-lg mt-2">
              Price : ₹{meal.price}
            </p>

            <p className="text-lg">
              Quantity : {meal.quantity}
            </p>

            <button
              onClick={() => {
                localStorage.setItem("mealId", meal.id);
                router.push("/consumer/order");
              }}
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            >
              Order
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}