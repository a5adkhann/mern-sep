import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const THEME = {
  accent: "linear-gradient(90deg, #1E3A8A, #38BDF8)",
  accentBorder: "rgba(56, 189, 248, 0.2)",
  bg: "#000000",
};

const loginSchema = z.object({
  email: z.string().email("Invalid email format").min(1, "Enter email"),
  password: z.string().min(1, "Password required"),
});

export default function LoginSection({ Loginuser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const formattedErrors = result.error.format();
      setError({
        email: formattedErrors.email?._errors[0] || "",
        password: formattedErrors.password?._errors[0] || "",
      });
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (res.data.message === "Logged in") {
        const loggedInUser = res.data.registeredUser;

        localStorage.setItem("user", JSON.stringify(loggedInUser));
        localStorage.setItem("userId", loggedInUser._id);

        Loginuser(loggedInUser);
        toast.success("Login successful!");
        setTimeout(() => navigate("/dashboard"), 1500);
        return;
      }

      toast.error(res.data.message || "Login failed");
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
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
      <Toaster position="top-right" />

      <div
        className="rounded-3xl shadow-2xl p-6 max-w-md w-full mx-4"
        style={{
          border: `1px solid ${THEME.accentBorder}`,
          backgroundColor: "#000000b0",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Gradient Heading */}
        <h3
          className="text-xl font-bold mb-3 text-center"
          style={{
            background: THEME.accent,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome Back
        </h3>

        <form onSubmit={handleLogin} noValidate>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/60 border placeholder-[#aaaaaa] text-white outline-none"
            style={{ borderColor: THEME.accentBorder }}
          />
          <p className="mb-4 text-xs text-red-500">{error.email}</p>

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/60 border placeholder-[#aaaaaa] text-white outline-none"
            style={{ borderColor: THEME.accentBorder }}
          />
          <p className="mb-4 text-xs text-red-500">{error.password}</p>

          {/* Gradient Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold mt-2 transition hover:opacity-90"
            style={{
              background: THEME.accent,
              color: "#fff",
            }}
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-white mt-3">
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              background: THEME.accent,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
