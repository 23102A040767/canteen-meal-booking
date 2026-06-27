 "use client";

import { useRouter } from "next/navigation";

export default function ConsumerDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white mb-10">
        Consumer Dashboard
      </h1>

      <div className="flex flex-col gap-4 w-72">

        <button
          onClick={() => router.push("/consumer/meals")}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          🍽 View Meals
        </button>

        <button
          onClick={() => router.push("/consumer/order")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg"
        >
          🛒 Place Order
        </button>

        <button
          onClick={() => router.push("/consumer/my-orders")}
          className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
        >
          📦 My Orders
        </button>

        <button
          onClick={() => router.push("/consumer/login")}
          className="bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg"
        >
          🚪 Logout
        </button>

      </div>
    </div>
  );
}