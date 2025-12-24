// src/Register.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
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
        className="flex flex-col md:flex-row rounded-3xl shadow-2xl max-w-3xl w-full mx-4"
        style={{
          border: "1px solid rgba(30,58,138,0.1)",
          backgroundColor: "#000000b0",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Left Image / Preview */}
        <div
          className="w-full md:w-44 flex flex-col items-center justify-center relative border-b md:border-r md:border-b-0 border-[#1E3A8A]/10 p-4 md:p-0"
          style={{
            background: "linear-gradient(180deg, rgba(30,58,138,0.08), rgba(0,0,0,0.1))",
          }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80"
              alt="default"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="z-10 flex flex-col items-center justify-center text-center">
            <div
              style={{ background: GRADIENT, WebkitBackgroundClip: "text", color: "transparent" }}
              className="text-3xl font-extrabold mb-1 drop-shadow"
            >
              Register
            </div>
            <button
              type="button"
              className="mt-2 px-3 py-1 text-xs rounded-md bg-black/60 border border-[#1E3A8A]/20 text-[#38BDF8] hover:bg-[#38BDF8]/10 transition"
            >
              Upload Image
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="p-6 flex-1 bg-black/40">
          <h3
            style={{ background: GRADIENT, WebkitBackgroundClip: "text", color: "transparent" }}
            className="text-xl font-bold mb-3"
          >
            Join the Team
          </h3>
          <form className="" noValidate>
            <input
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#1E3A8A]/10 placeholder-[#aaaaaa] text-white outline-none mb-4"
            />
            <input
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#1E3A8A]/10 placeholder-[#aaaaaa] text-white outline-none mb-4"
            />
            <input
              placeholder="Create password"
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#1E3A8A]/10 placeholder-[#aaaaaa] text-white outline-none mb-4"
            />
            <input
              placeholder="Confirm password"
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#1E3A8A]/10 placeholder-[#aaaaaa] text-white outline-none mb-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold mt-2 hover:cursor-pointer"
              style={{
                background: GRADIENT,
                color: "#fff",
              }}
            >
              Start Free
            </button>
          </form>
          <p className="text-center text-white mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-[#38BDF8] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
