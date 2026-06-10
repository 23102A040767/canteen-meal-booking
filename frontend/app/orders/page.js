 "use client";

import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-8">
        All Orders
      </h1>

      <table className="border border-white w-full text-left">
        <thead>
          <tr>
            <th className="border p-3">ID</th>
            <th className="border p-3">Username</th>
            <th className="border p-3">Meal ID</th>
            <th className="border p-3">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border p-3">{order.id}</td>
              <td className="border p-3">{order.username}</td>
              <td className="border p-3">{order.meal_id}</td>
              <td className="border p-3">{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}