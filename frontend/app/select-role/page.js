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
          marginBottom: "15px",
          fontWeight: "bold",
        }}
      >
        Select Your Role
      </h1>

      <p
        style={{
          color: "#666",
          fontSize: "18px",
          marginBottom: "40px",
        }}
      >
        Choose how you want to continue
      </p>

      <button
        onClick={() => router.push("/student")}
        style={{
          width: "260px",
          padding: "18px",
          fontSize: "22px",
          background: "#ff6600",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          marginBottom: "20px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.3s",
        }}
      >
        🎓 Student
      </button>

      <button
        onClick={() => router.push("/admin")}
        style={{
          width: "260px",
          padding: "18px",
          fontSize: "22px",
          background: "#0b1d51",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.3s",
        }}
      >
        👨‍💼 Admin
      </button>
    </div>
  );
}