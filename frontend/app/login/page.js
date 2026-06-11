 "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log("Sending Login Request...");

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

      const data = await response.text();

      console.log("Status:", response.status);
      console.log("Response:", data);

      if (response.ok) {
        alert("Login Successful");
        router.push("/dashboard");
      } else {
        alert(data || "Invalid Username or Password");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Unable to connect to server");
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