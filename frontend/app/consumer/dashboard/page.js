 "use client";

import { useRouter } from "next/navigation";

export default function ConsumerDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            🍽 Consumer Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome! Choose an option below.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">

          <button
            onClick={() => router.push("/consumer/meals")}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition duration-300"
          >
            🍽 View Meals
          </button>

          <button
            onClick={() => router.push("/consumer/order")}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition duration-300"
          >
            🛒 Place Order
          </button>

          <button
            onClick={() => router.push("/consumer/my-orders")}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition duration-300"
          >
            📦 My Orders
          </button>

          <button
            onClick={() => router.push("/consumer/login")}
            className="w-full py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-xl font-semibold text-lg transition duration-300"
          >
            🚪 Logout
          </button>

        </div>

      </div>
    </div>
  );
}