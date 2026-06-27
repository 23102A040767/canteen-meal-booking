 "use client";

import { useEffect, useState } from "react";

export default function ManageMealsPage() {
  const [meals, setMeals] = useState([]);

  const [editingMeal, setEditingMeal] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const loadMeals = () => {
     fetch("https://canteen-meal-booking-backend.onrender.com/meals/all")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadMeals();
  }, []);

  const deleteMeal = async (id) => {
    if (!confirm("Delete this meal?")) return;

    await  fetch(`https://canteen-meal-booking-backend.onrender.com/meals/${id}`, {
      method: "DELETE",
    });

    alert("Meal Deleted Successfully");
    loadMeals();
  };

  const openEdit = (meal) => {
    setEditingMeal(meal);

    setForm({
      name: meal.name,
      price: meal.price,
      quantity: meal.quantity,
    });
  };

  const updateMeal = async () => {
    try {
      const response = await  fetch(`https://canteen-meal-booking-backend.onrender.com/meals/${editingMeal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const message = await response.text();

      if (response.ok) {
        alert(message);

        setEditingMeal(null);

        loadMeals();
      } else {
        alert("Update Failed");
      }
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 p-10">

      <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-10">
        🍽 Manage Meals
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {meals.map((meal) => (

          <div
            key={meal.id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6"
          >

            <h2 className="text-3xl font-bold text-gray-900">
              {meal.name}
            </h2>

            <p className="text-lg mt-4 text-gray-700">
              💰 Price :
              <span className="font-bold text-green-600">
                {" "}₹{meal.price}
              </span>
            </p>

            <p className="text-lg mt-2 text-gray-700">
              📦 Quantity :
              <span className="font-bold text-blue-600">
                {" "}{meal.quantity}
              </span>
            </p>

            <div className="flex gap-4 mt-6">

              <button
                onClick={() => openEdit(meal)}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-bold"
              >
                ✏ Edit
              </button>

              <button
                onClick={() => deleteMeal(meal.id)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold"
              >
                🗑 Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Edit Modal */}

      {editingMeal && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white rounded-3xl shadow-2xl p-8 w-[430px]">

            <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
              ✏ Edit Meal
            </h2>

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              placeholder="Meal Name"
              className="w-full border rounded-xl p-3 mb-4 text-black"
            />

            <input
              type="number"
              value={form.price}
              onChange={(e) =>
                setForm({
                  ...form,
                  price: e.target.value,
                })
              }
              placeholder="Price"
              className="w-full border rounded-xl p-3 mb-4 text-black"
            />

            <input
              type="number"
              value={form.quantity}
              onChange={(e) =>
                setForm({
                  ...form,
                  quantity: e.target.value,
                })
              }
              placeholder="Quantity"
              className="w-full border rounded-xl p-3 mb-6 text-black"
            />

            <div className="flex gap-4">

              <button
                onClick={updateMeal}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold"
              >
                ✅ Save
              </button>

              <button
                onClick={() => setEditingMeal(null)}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl font-bold"
              >
                ❌ Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}