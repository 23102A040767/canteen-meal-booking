 "use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main className="hero">
        <div className="content">
          <h1>PreBite</h1>

          <h2>Skip the Queue</h2>

          <button onClick={() => router.push("/select-role")}>
            Book Now
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
          padding: 20px;

          background: url("/food.png") center center/cover no-repeat;
        }

        .content {
          width: 100%;
          max-width: 700px;
          text-align: center;

          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);

          border-radius: 25px;
          padding: 60px 40px;

          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
        }

        h1 {
          font-size: 72px;
          font-weight: 800;
          color: #ff6600;
          margin-bottom: 15px;
          letter-spacing: 1px;
          text-shadow: 2px 2px 8px rgba(0,0,0,.15);
        }

        h2 {
          font-size: 28px;
          color: #444;
          font-weight: 500;
          margin-bottom: 45px;
          letter-spacing: 3px;
        }

        button {
          background: linear-gradient(90deg, #ff7a00, #ff4d00);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 18px 55px;
          font-size: 22px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(255,102,0,.35);
        }

        button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 35px rgba(255,102,0,.45);
        }

        @media (max-width: 992px) {
          h1 {
            font-size: 58px;
          }

          h2 {
            font-size: 24px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 15px;
          }

          .content {
            width: 95%;
            padding: 40px 20px;
          }

          h1 {
            font-size: 42px;
          }

          h2 {
            font-size: 20px;
            margin-bottom: 30px;
          }

          button {
            width: 100%;
            font-size: 18px;
            padding: 15px;
          }
        }

        @media (max-width: 400px) {
          h1 {
            font-size: 34px;
          }

          h2 {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}