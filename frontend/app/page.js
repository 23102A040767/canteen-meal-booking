 "use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main className="hero">
        <div className="content">
          <h1>SKIP THE QUEUE</h1>

          <p>
            Order delicious meals before reaching the canteen.
            <br />
            Save your time with quick and hassle-free dining.
          </p>

          <button onClick={() => router.push("/select-role")}>
            Get Started →
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

          background-image: url("/food.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          padding: 20px;
        }

        .content {
          width: 100%;
          max-width: 650px;

          text-align: center;

          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);

          border-radius: 25px;

          padding: 50px 40px;

          box-shadow: 0 10px 30px rgba(0,0,0,.2);
        }

        h1 {
          font-size: 64px;
          color: #ff5a00;
          font-weight: 900;
          margin-bottom: 20px;
          text-shadow: 2px 2px 8px rgba(0,0,0,.15);
        }

        p {
          font-size: 22px;
          color: #333;
          line-height: 1.8;
          margin-bottom: 35px;
          font-weight: 500;
        }

        button {
          background: linear-gradient(90deg,#ff7a00,#ff4d00);
          color: white;
          border: none;
          padding: 18px 45px;
          font-size: 22px;
          font-weight: bold;
          border-radius: 50px;
          cursor: pointer;
          transition: .3s;
          box-shadow: 0 10px 25px rgba(255,102,0,.35);
        }

        button:hover {
          transform: scale(1.05);
        }

        /* Tablet */

        @media (max-width: 992px) {

          h1 {
            font-size: 52px;
          }

          p {
            font-size: 20px;
          }

        }

        /* Mobile */

        @media (max-width: 768px) {

          .hero{
            background-position:center;
            padding:15px;
          }

          .content{
            width:95%;
            padding:30px 20px;
            border-radius:20px;
          }

          h1{
            font-size:36px;
            line-height:1.2;
          }

          p{
            font-size:16px;
            line-height:1.6;
          }

          button{
            width:100%;
            padding:15px;
            font-size:18px;
          }

        }

        /* Small Mobile */

        @media (max-width:400px){

          h1{
            font-size:30px;
          }

          p{
            font-size:15px;
          }

        }

      `}</style>
    </>
  );
}