import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from "react-hot-toast";

const ProfileSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 p-6 rounded-lg shadow-md"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        maxWidth: '500px',
        margin: '0 auto'
      }}
    >
      <Toaster position="top-right" />

      <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--accent)' }}>
        Profile
      </h3>

      <div className="flex flex-col items-center space-y-4 mb-8">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center ring-4 ring-[var(--accent)]/20 shadow-lg">
            <span className="text-2xl font-bold text-gray-600">U</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
            User Name
          </p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            user@example.com
          </p>
        </div>
      </div>

      <form className="space-y-6" noValidate>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg transition-all focus:ring-2 focus:ring-[var(--accent)]"
            style={{
              backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
            }}
          />
          <p className="mb-4 text-xs" style={{ color: "red" }}>Error message</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
            Email Address
          </label>
          <input
            type="email"
            placeholder="user@example.com"
            className="w-full p-3 rounded-lg transition-all focus:ring-2 focus:ring-[var(--accent)]"
            style={{
              backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
            }}
          />
          <p className="mb-4 text-xs" style={{ color: "red" }}>Error message</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
            Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 rounded-lg transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[var(--accent)] file:text-white hover:file:bg-[var(--accent)]/80"
            style={{
              backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
            }}
          />
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            Choose profile picture
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg font-bold transition-all hover:scale-105 hover:shadow-lg"
          style={{
            backgroundColor: 'var(--accent)',
            color: 'white',
          }}
        >
          Update Profile
        </button>
      </form>
    </motion.div>
  );
};

export default ProfileSection;
