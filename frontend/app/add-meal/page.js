 "use client";

import { useState } from "react";

export default function AddMealPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddMeal = async () => {
    try {
      const response = await fetch("https://canteen-meal-booking.onrender.com/add-meal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price: Number(price),
          quantity: Number(quantity),
        }),
      });

      const data = await response.json();
      console.log("Add meal response:", data);

      if (response.ok) {
        alert("Meal added successfully!");
        setName("");
        setPrice("");
        setQuantity("");
      } else {
        alert(data.detail || "Failed to add meal");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Add Meal</h1>

        <input
          type="text"
          placeholder="Enter meal name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleAddMeal} style={styles.button}>
          Add Meal
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
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};