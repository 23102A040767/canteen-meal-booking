 "use client";

import { useRouter } from "next/navigation";

export default function SelectRole() {
  const router = useRouter();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff8f2",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#ff6600",
          fontSize: "48px",
          marginBottom: "40px",
        }}
      >
        Select Your Role
      </h1>

      <button
        onClick={() => router.push("/consumer")}
        style={{
          width: "250px",
          padding: "18px",
          fontSize: "22px",
          background: "#ff6600",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Consumer
      </button>

      <button
        onClick={() => router.push("/producer")}
        style={{
          width: "250px",
          padding: "18px",
          fontSize: "22px",
          background: "#0b1d51",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        Producer
      </button>
    </div>
  );
}