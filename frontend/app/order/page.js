 "use client";

import { useState } from "react";

export default function OrderPage() {
  const [username, setUsername] = useState("");
  const [mealId, setMealId] = useState("");
  const [quantity, setQuantity] = useState("");

  const placeOrder = async () => {
    try {
      const response = await fetch("https://canteen-meal-booking.onrender.com/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          meal_id: Number(mealId),
          quantity: Number(quantity),
        }),
      });

      const data = await response.json();
      console.log("Order response:", data);

      if (response.ok) {
        alert("Order placed successfully!");
        setUsername("");
        setMealId("");
        setQuantity("");
      } else {
        alert(data.detail || "Order failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Place Order</h1>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Enter meal ID"
          value={mealId}
          onChange={(e) => setMealId(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={styles.input}
        />

        <button onClick={placeOrder} style={styles.button}>
          Place Order
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
  },
  card: {
    width: "350px",
    backgroundColor: "#1e293b",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  title: {
    color: "white",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    color: "black",
    backgroundColor: "white",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    backgroundColor: "#f59e0b",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};