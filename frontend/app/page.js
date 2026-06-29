 "use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="hero">
      <div className="overlay"></div>

      <div className="content">
        <h1 className="title">
          <span>Canteen Meal</span>
          <br />
          <span className="blue">Pre-Booking System</span>
        </h1>

        <p className="subtitle">
          Skip the Queue. Book Your Meal Anytime.
        </p>

        <button
          className="startBtn"
          onClick={() => router.push("/select-role")}
        >
          🚀 Get Started
        </button>
      </div>
    </main>
  );
}