 "use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main className="hero">
        <div className="content">
          <h1>Canteen Meal Booking</h1>

          <h2>Skip the Queue</h2>

          <button onClick={() => router.push("/select-role")}>
            Book Now 🍽️
          </button>
        </div>
      </main>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .hero {
          width: 100%;
          min-height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;

          background: url("/food.png") center center/cover no-repeat;
          padding: 20px;
        }

        .content {
          width: 100%;
          max-width: 700px;
          text-align: center;

          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(8px);

          padding: 55px 40px;
          border-radius: 25px;

          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
        }

        h1 {
          font-size: 60px;
          color: #ff6600;
          font-weight: 800;
          margin-bottom: 15px;
          line-height: 1.2;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
        }

        h2 {
          font-size: 28px;
          color: #444;
          font-weight: 500;
          font-style: italic;
          letter-spacing: 2px;
          margin-bottom: 40px;
        }

        button {
          background: linear-gradient(90deg, #ff7a00, #ff4d00);
          color: white;
          border: none;
          padding: 18px 45px;
          font-size: 22px;
          font-weight: bold;
          border-radius: 50px;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 10px 25px rgba(255, 102, 0, 0.35);
        }

        button:hover {
          transform: translateY(-3px) scale(1.03);
        }

        /* Tablet */

        @media (max-width: 992px) {
          h1 {
            font-size: 48px;
          }

          h2 {
            font-size: 24px;
          }
        }

        /* Mobile */

        @media (max-width: 768px) {
          .hero {
            padding: 15px;
            background-position: center;
          }

          .content {
            width: 95%;
            padding: 35px 20px;
            border-radius: 20px;
          }

          h1 {
            font-size: 34px;
          }

          h2 {
            font-size: 20px;
            margin-bottom: 30px;
          }

          button {
            width: 100%;
            padding: 15px;
            font-size: 18px;
          }
        }

        @media (max-width: 400px) {
          h1 {
            font-size: 30px;
          }

          h2 {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}