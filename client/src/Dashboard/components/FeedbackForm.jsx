// src/components/FeedbackForm.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import axios from "axios";

const API_BASE = "http://localhost:3000";

export default function FeedbackForm() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user?._id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState({});

  const validate = () => {
    const errors = {};
    if (!name) errors.name = "Please enter your name";
    if (!email) errors.email = "Please enter your email";
    if (!rating) errors.rating = "Please give a rating";
    if (!message) errors.message = "Please write your feedback";

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (!userId) return alert("User ID missing — please login first!");

    setSaving(true);

    try {
      await axios.post(`${API_BASE}/feedback`, {
        userId,
        name,
        email,
        rating,
        message,
      });

      alert("Feedback submitted!");
      setName("");
      setEmail("");
      setRating("");
      setMessage("");
    } catch (err) {
      alert("Error submitting feedback");
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 p-6 rounded-lg shadow-md"
      style={{
        backgroundColor: "#000",
        border: "1px solid #333",
      }}
    >
      {/* TITLE */}
      <h3
        className="text-xl font-semibold mb-4 bg-clip-text text-transparent"
        style={{ color: 'var(--accent)' }}
      >
        Feedback Form
      </h3>

      <form
        onSubmit={submitFeedback}
        className="grid md:grid-cols-2 gap-4"
        noValidate
      >
        {/* NAME */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1 text-gray-300">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-md bg-[#111] text-white border border-gray-600"
            placeholder="Your name"
          />
          <p className="mb-2 text-xs text-red-500">{error.name}</p>
        </div>

        {/* EMAIL */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1 text-gray-300">Email</label>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md bg-[#111] text-white border border-gray-600"
            placeholder="Your email"
          />
          <p className="mb-2 text-xs text-red-500">{error.email}</p>
        </div>

        {/* RATING */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1 text-gray-300">Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="p-3 rounded-md bg-[#111] text-white border border-gray-600"
          >
            <option value="">Select Rating</option>
            {["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"].map((stars, i) => (
              <option key={i} value={stars} className="bg-black text-white">
                {stars}
              </option>
            ))}
          </select>
          <p className="mb-2 text-xs text-red-500">{error.rating}</p>
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm font-medium mb-1 text-gray-300">
            Feedback
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 rounded-md bg-[#111] text-white border border-gray-600 h-28"
            placeholder="Write your feedback..."
          />
          <p className="mb-2 text-xs text-red-500">{error.message}</p>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white w-full md:w-auto"
            style={{
              background: "linear-gradient(90deg, #1E3A8A, #38BDF8)",
            }}
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin text-white" />
            ) : (
              <Send className="w-4 h-4 text-white" />
            )}
            {saving ? "Sending…" : "Submit Feedback"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
