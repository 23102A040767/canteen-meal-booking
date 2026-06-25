 "use client";

import { useEffect, useState } from "react";

export default function MealsPage() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://canteen-meal-booking.onrender.com/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.error("Error fetching meals:", err));
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Available Meals</h1>

        {meals.length === 0 ? (
          <p style={{ color: "white" }}>No meals found</p>
        ) : (
          meals.map((meal) => (
            <div key={meal.id} style={styles.card}>
              <p><b>ID:</b> {meal.id}</p>
              <p><b>Name:</b> {meal.name}</p>
              <p><b>Price:</b> ₹{meal.price}</p>
              <p><b>Quantity:</b> {meal.quantity}</p>
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
    maxWidth: "700px",
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