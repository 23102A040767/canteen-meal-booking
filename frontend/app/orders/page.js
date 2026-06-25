 "use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://canteen-meal-booking.onrender.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Orders Page</h1>

        {orders.length === 0 ? (
          <p style={{ color: "white" }}>No orders found</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} style={styles.card}>
              <p><b>User:</b> {order.username}</p>
              <p><b>Meal ID:</b> {order.meal_id}</p>
              <p><b>Quantity:</b> {order.quantity}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    padding: "30px",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    color: "white",
    textAlign: "center",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#1e293b",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
};