// src/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Login() {
  const GRADIENT = "linear-gradient(90deg, #1E3A8A, #38BDF8)";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1000/api/login", {
        email,
        password,
      });

      toast.success(response.data.message);

      localStorage.setItem("user", JSON.stringify(response.data.user));

        location.assign("/dashboard"); 

    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('fitness.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="rounded-3xl shadow-2xl p-6 bg-black/40 max-w-md w-full mx-4">
        <h3
          style={{
            background: GRADIENT,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="text-xl font-bold mb-3 text-center"
        >
          Welcome Back
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/60  text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/60  text-white"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold"
            style={{ background: GRADIENT, color: "#fff" }}
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
