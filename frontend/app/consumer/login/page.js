 "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConsumerLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.text();

      console.log("Response Status:", response.status);
      console.log("Response Data:", data);

      if (response.ok) {
        if (data.includes("CONSUMER")) {

          console.log("Saving username:", username);

          localStorage.setItem("username", username);

          console.log("Saved Username:", localStorage.getItem("username"));

          router.push("/consumer/dashboard");

        } else {
          setMessage("You are not a Consumer.");
        }
      } else {
        setMessage(data);
      }

    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Consumer Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {message && (
          <p className="text-red-500 text-center mt-4">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}