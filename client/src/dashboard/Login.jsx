// src/Login.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const GRADIENT = "linear-gradient(90deg, #1E3A8A, #38BDF8)";

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('fitness.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="rounded-3xl shadow-2xl p-6 bg-black/40 max-w-md w-full mx-4"
        style={{
          border: "1px solid rgba(30,58,138,0.1)",
          backdropFilter: "blur(2px)",
        }}
      >
        <h3
          style={{ background: GRADIENT, WebkitBackgroundClip: "text", color: "transparent" }}
          className="text-xl font-bold mb-3 text-center"
        >
          Welcome Back
        </h3>

        <form className="space-y-4" noValidate>
          <input
            placeholder="Email"
            type="email"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#1E3A8A]/10 placeholder-[#aaaaaa] text-white outline-none"
          />
          <input
            placeholder="Password"
            type="password"
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#1E3A8A]/10 placeholder-[#aaaaaa] text-white outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold mt-2 hover:cursor-pointer transition"
            style={{
              background: GRADIENT,
              color: "#fff",
            }}
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-white mt-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#38BDF8] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
