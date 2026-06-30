 "use client";

import { useRouter } from "next/navigation";

export default function ProducerDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white mb-10">
        Producer Dashboard
      </h1>

      <div className="flex flex-col gap-4 w-72">

        <button
          onClick={() => router.push("/producer/add-meal")}
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
        >
          ➕ Add Meal
        </button>

        <button
          onClick={() => router.push("/producer/manage-meals")}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          ✏️ Manage Meals
        </button>

        <button
          onClick={() => router.push("/producer/orders")}
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
        >
          📋 View Orders
        </button>

        <button
          onClick={() => router.push("/producer/login")}
          className="bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg"
        >
          🚪 Logout
        </button>

      </div>
    </div>
  );
}