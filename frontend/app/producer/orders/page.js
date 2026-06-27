 "use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/orders/all")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-100 p-10">

      <h1 className="text-6xl font-extrabold text-center text-orange-700 mb-14">
        📦 Customer Orders
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

              {/* Header */}
              <div className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white p-6">

                <div className="flex justify-between items-center">

                  <h2 className="text-3xl font-bold">
                    Order #{order.id}
                  </h2>

                  <span className="bg-green-500 px-4 py-2 rounded-full font-semibold">
                    Pending
                  </span>

                </div>

              </div>

              {/* Body */}
              <div className="p-6 space-y-5">

                <div className="flex justify-between items-center">

                  <span className="text-gray-700 font-medium">
                    👤 Customer
                  </span>

                  <span className="font-bold text-gray-900">
                    {order.username}
                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <span className="text-gray-700 font-medium">
                    🍽 Meal ID
                  </span>

                  <span className="font-bold text-blue-700">
                    {order.mealId}
                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <span className="text-gray-700 font-medium">
                    📦 Quantity
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-bold">
                    {order.quantity}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}