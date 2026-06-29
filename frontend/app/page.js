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

          background: url("/food.png") no-repeat center center;
          background-size: cover;
        }

        .content {
          width: 100%;
          max-width: 560px;
          text-align: center;

          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(6px);

          border-radius: 24px;
          padding: 45px 30px;

          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        h1 {
          font-size: 72px;
          font-weight: 800;
          color: #ff6a00;
          margin-bottom: 8px;
          letter-spacing: 1px;
          text-shadow: 2px 2px 6px rgba(0,0,0,.12);
        }

        h2 {
          font-size: 22px;
          color: #555;
          font-weight: 500;
          margin-bottom: 35px;
          letter-spacing: 1px;
        }

        button {
          background: linear-gradient(90deg, #ff7a00, #ff4d00);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 16px 48px;
          font-size: 22px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 10px 25px rgba(255, 102, 0, 0.35);
        }

        button:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 15px 35px rgba(255, 102, 0, 0.45);
        }

        /* Tablet */

        @media (max-width: 992px) {
          .content {
            max-width: 500px;
          }

          h1 {
            font-size: 58px;
          }

          h2 {
            font-size: 20px;
          }
        }

        /* Mobile */

        @media (max-width: 768px) {

          .hero {
            padding: 15px;
            background-position: center;
          }

          .content {
            width: 92%;
            max-width: 380px;
            padding: 35px 20px;
            border-radius: 20px;
          }

          h1 {
            font-size: 46px;
          }

          h2 {
            font-size: 18px;
            margin-bottom: 28px;
          }

          button {
            width: 100%;
            font-size: 18px;
            padding: 15px;
          }
        }

        @media (max-width: 400px) {

          .content {
            width: 95%;
          }

          h1 {
            font-size: 38px;
          }

          h2 {
            font-size: 17px;
          }

          button {
            font-size: 17px;
          }
        }

      `}</style>
    </>
  );
}