"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProducerRegister() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "PRODUCER",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://canteen-meal-booking-backend.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.text();

      if (response.ok) {
        alert("Producer Registered Successfully");
        router.push("/producer/login");
      } else {
        setMessage(data);
      }
    } catch (err) {
      setMessage("Unable to connect to server.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={register}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Producer Register
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded"
        >
          Register
        </button>

        {message && (
          <p className="text-red-500 text-center mt-4">{message}</p>
        )}
      </form>
    </div>
  );
}