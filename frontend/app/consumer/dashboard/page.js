 "use client";

import { useRouter } from "next/navigation";

export default function ConsumerDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800">
            🍽 Consumer Dashboard
          </h1>

          <p className="text-gray-500 mt-3">
            Welcome! Choose an option below.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-5">

          <button
            onClick={() => router.push("/consumer/meals")}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            🍽 View Meals
          </button>

          <button
            onClick={() => router.push("/consumer/order")}
            className="w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            🛒 Place Order
          </button>

          <button
            onClick={() => router.push("/consumer/my-orders")}
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            📦 My Orders
          </button>

          <button
            onClick={() => router.push("/consumer/login")}
            className="w-full py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            🚪 Logout
          </button>

        </div>

      </div>
    </div>
  );
}