 "use client";

import { useRouter } from "next/navigation";

export default function ConsumerDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-slate-800">
            🍽 Consumer Dashboard
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Welcome! Choose an option below.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-5">

          <button
            onClick={() => router.push("/consumer/meals")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xl font-semibold shadow-md hover:shadow-xl transition duration-300"
          >
            🍽 View Meals
          </button>

          <button
            onClick={() => router.push("/consumer/order")}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-2xl text-xl font-semibold shadow-md hover:shadow-xl transition duration-300"
          >
            🛒 Place Order
          </button>

          <button
            onClick={() => router.push("/consumer/my-orders")}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl text-xl font-semibold shadow-md hover:shadow-xl transition duration-300"
          >
            📦 My Orders
          </button>

          <button
            onClick={() => router.push("/consumer/login")}
            className="w-full bg-gray-700 hover:bg-gray-800 text-white py-4 rounded-2xl text-xl font-semibold shadow-md hover:shadow-xl transition duration-300"
          >
            🚪 Logout
          </button>

        </div>

      </div>
    </div>
  );
}