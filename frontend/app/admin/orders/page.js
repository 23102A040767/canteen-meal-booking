 "use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://canteen-meal-booking-backend.onrender.com/orders/all")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-100 p-10">

      <h1 className="text-5xl font-extrabold text-center text-orange-700 mb-12">
        📦 Customer Orders
      </h1>

      {orders.length === 0 ? (
        <div className="text-center text-2xl text-gray-600 mt-20">
          No Orders Found
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {orders.map((order) => (

            <div
              key={order.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Header */}
              <div className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white p-6 rounded-t-3xl">

                <div className="flex justify-between items-center">

                  <h2 className="text-2xl font-bold">
                    Order #{order.id}
                  </h2>

                  <span className="bg-green-500 px-3 py-1 rounded-full font-semibold">
                    Confirmed
                  </span>

                </div>

              </div>

              {/* Body */}
              <div className="p-6 space-y-4">

                <div className="flex justify-between">
                  <span className="font-semibold">👤 Customer</span>
                  <span className="font-bold text-blue-700">
                    {order.username}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">🍽 Meal</span>
                  <span className="font-bold text-blue-700">
                    {order.meal ? order.meal.name : "Not Available"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">💰 Price</span>
                  <span className="font-bold text-green-600">
                    {order.meal ? `₹${order.meal.price}` : "-"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">📦 Quantity</span>
                  <span className="font-bold">
                    {order.quantity}
                  </span>
                </div>

                <button className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-bold">
                  📋 Order Received
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}