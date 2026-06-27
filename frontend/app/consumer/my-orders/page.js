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

    fetch(`http://localhost:8080/orders/my/${username}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 p-10">

      <h1 className="text-6xl font-extrabold text-center text-blue-900 mb-14">
        📦 My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="text-center text-2xl text-gray-600 mt-20">
          No Orders Found
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {orders.map((order) => (

            <div
              key={order.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >

              {/* Top */}
              <div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white p-6">

                <div className="flex justify-between items-center">

                  <h2 className="text-3xl font-bold">
                    Order #{order.id}
                  </h2>

                  <span className="bg-green-500 px-4 py-2 rounded-full font-semibold">
                    Confirmed
                  </span>

                </div>

              </div>

              {/* Body */}
              <div className="p-6 space-y-5">

                <div className="flex justify-between text-lg">
                  <span>🍽 Meal ID</span>
                  <span className="font-bold">{order.mealId}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span>📦 Quantity</span>

                  <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-bold">
                    {order.quantity}
                  </span>
                </div>

                <div className="flex justify-between text-lg">
                  <span>👤 Username</span>

                  <span className="font-semibold text-blue-700">
                    {order.username}
                  </span>
                </div>

                <div className="pt-4">

                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg font-bold transition">
                    ✅ Order Confirmed
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}