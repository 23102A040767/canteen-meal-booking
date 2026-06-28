 "use client";

import { useEffect, useState } from "react";

export default function MyOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (!username) {
      alert("Please login first");
      return;
    }

    fetch(
      `https://canteen-meal-booking-backend.onrender.com/orders/myorders/${username}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          📦 My Orders
        </h1>
        <p className="text-gray-500 mt-2">
          View all your confirmed meal bookings
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center text-xl text-gray-500 mt-20">
          No Orders Found
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center p-5 border-b bg-white">
                <h2 className="text-xl font-bold text-gray-800">
                  Order #{order.id}
                </h2>

                <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                  ✅ Confirmed
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5">

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    🍽 Meal
                  </span>

                  <span className="font-semibold text-gray-800">
                    {order.meal?.name}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    💰 Price
                  </span>

                  <span className="font-bold text-green-600">
                    ₹{order.meal?.price}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    📦 Quantity
                  </span>

                  <span className="font-semibold text-gray-800">
                    {order.quantity}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    👤 Username
                  </span>

                  <span className="font-semibold text-blue-600">
                    {order.username}
                  </span>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-center text-green-600 font-semibold">
                    ✔ Order Successfully Confirmed
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}