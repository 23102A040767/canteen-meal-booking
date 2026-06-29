 "use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.70), rgba(255,255,255,0.70)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "rgba(255,255,255,0.75)",
          padding: "50px",
          borderRadius: "20px",
          backdropFilter: "blur(8px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            color: "#ff5a00",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          Canteen Meal
        </h1>

        <h2
          style={{
            fontSize: "58px",
            color: "#0b1d51",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Pre-Booking System
        </h2>

        <p
          style={{
            fontSize: "24px",
            color: "#444",
            marginBottom: "35px",
          }}
        >
          Skip the Queue. Book Your Meal Anytime.
        </p>

        <button
          onClick={() => router.push("/select-role")}
          style={{
            padding: "18px 50px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            background: "linear-gradient(45deg,#ff7a00,#ff4500)",
            boxShadow: "0 10px 20px rgba(255,90,0,.4)",
          }}
        >
          🚀 Get Started
        </button>
      </div>
    </div>
  );
}