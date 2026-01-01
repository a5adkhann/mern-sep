import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const THEME = {
  accent: "linear-gradient(90deg, #1E3A8A, #38BDF8)",
  accentBorder: "rgba(56, 189, 248, 0.2)",
  panelGradient: "linear-gradient(180deg, rgba(56,189,248,0.12), rgba(0,0,0,0.15))",
};

const userSchema = z.object({
  name: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .refine((val) => /^[A-Z]/.test(val), {
      message: "First character must be uppercase",
    }),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be 8 characters")
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /[!@#$%^&*(),.?\":{}|<>]/.test(val), {
      message: "Password must contain at least one special character",
    }),
  profilePic: z.any().refine((file) => file != null, {
    message: "Image is required",
  }),
});

export default function RegisterSectionFitness() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState({});

  const onPick = () => document.getElementById("fitness-file")?.click();

  const onFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setPreview(e.target.result);
        setIsHorizontal(img.naturalWidth > img.naturalHeight);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const registerUser = async (e) => {
    e.preventDefault();
    console.log("form sjsj")
    const result = userSchema.safeParse({ name, email, password, profilePic });

    if (!result.success) {
      const f = result.error.format();
      setError({
        name: f.name?._errors[0] || "",
        email: f.email?._errors[0] || "",
        password: f.password?._errors[0] || "",
        profilePic: f.profilePic?._errors[0] || "",
      });
      return;
    }

    if (password !== confirm) {
      toast.error("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePic", profilePic);

    try {
      const res = await axios.post("http://localhost:3000/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res.data?.message || "Registration successful!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('fitness.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Toaster position="top-right" />

      <div
        className="flex flex-col md:flex-row rounded-3xl shadow-2xl max-w-3xl w-full mx-4"
        style={{
          border: `1px solid ${THEME.accentBorder}`,
          backgroundColor: "#000000b0",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* LEFT PANEL */}
        <div
          className="w-full md:w-44 flex flex-col items-center justify-center relative p-4 md:p-0"
          style={{ background: THEME.panelGradient }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <img
              src={
                preview ||
                "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80"
              }
              alt="preview"
              className="w-full h-full opacity-70 rounded-3xl"
              style={{ objectFit: isHorizontal ? "contain" : "cover" }}
            />
          </div>

          <div className="z-10 text-center">
            <h2
              className="text-3xl font-extrabold mb-1"
              style={{
                background: THEME.accent,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Register
            </h2>

            <button
              type="button"
              onClick={onPick}
              className="mt-2 px-3 py-1 text-xs rounded-md bg-black/60 border transition"
              style={{
                borderColor: THEME.accentBorder,
                background: THEME.accent,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Upload Image
            </button>

            <input
              id="fitness-file"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setProfilePic(file);
                  onFile(file);
                }
              }}
            />
            <p className="text-xs text-red-500 mt-1">{error.profilePic}</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-6 flex-1 bg-black/40">
          <h3
            className="text-xl font-bold mb-3"
            style={{
              background: THEME.accent,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Join the Team
          </h3>

          <form onSubmit={registerUser} noValidate>
            {["Full name", "Email", "Create password", "Confirm password"].map(
              (ph, i) => (
                <input
                  key={i}
                  placeholder={ph}
                  type={ph.includes("password") ? "password" : "text"}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border placeholder-[#aaa] text-white outline-none mb-3"
                  style={{ borderColor: THEME.accentBorder }}
                  onChange={(e) =>
                    i === 0
                      ? setName(e.target.value)
                      : i === 1
                      ? setEmail(e.target.value)
                      : i === 2
                      ? setPassword(e.target.value)
                      : setConfirm(e.target.value)
                  }
                />
              )
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold mt-2 text-white transition hover:opacity-90"
              style={{ background: THEME.accent }}
            >
              Start Free
            </button>
          </form>

          <p className="text-center text-white mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                background: THEME.accent,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
