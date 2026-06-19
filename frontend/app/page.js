 import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      }}
    >
      <div className="bg-black/70 p-10 rounded-2xl text-center text-white">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">
          🍽️ Canteen Meal Booking System
        </h1>

        <p className="text-xl mb-6">
          Book Delicious Meals Online & Skip the Queue
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/login">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
              Login
            </button>
          </Link>

          <Link href="/dashboard">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}