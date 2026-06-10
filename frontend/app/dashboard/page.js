 "use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-10">
        Welcome to Dashboard
      </h1>

      <div className="flex flex-col gap-4 w-64">
        <button
          onClick={() => router.push("/add-meal")}
          className="bg-green-500 text-white px-4 py-3 rounded"
        >
          Add Meal
        </button>

        <button
          onClick={() => router.push("/meals")}
          className="bg-blue-500 text-white px-4 py-3 rounded"
        >
          View Meals
        </button>

        <button
          onClick={() => router.push("/order")}
          className="bg-yellow-500 text-black px-4 py-3 rounded"
        >
          Place Order
        </button>

        <button
          onClick={() => router.push("/orders")}
          className="bg-red-500 text-white px-4 py-3 rounded"
        >
          View Orders
        </button>

        <button
          onClick={() => router.push("/login")}
          className="bg-gray-500 text-white px-4 py-3 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}