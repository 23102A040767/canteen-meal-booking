 "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://canteen-meal-booking.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      console.log("Status:", response.status);

      const text = await response.text();

      console.log("Backend Response:", text);

      if (
        response.ok &&
        text.toLowerCase().includes("login successful")
      ) {
        alert("Login Successful");
        router.push("/dashboard");
      } else {
        alert(text);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-5">Login</h1>

      <input
        type="text"
        placeholder="Username"
        className="border border-white p-2 m-2 text-white"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border border-white p-2 m-2 text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}