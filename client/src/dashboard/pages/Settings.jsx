import React, { useState } from "react";

export default function Settings() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [measurement, setMeasurement] = useState("eu");
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full  bg-gray-900 rounded-xl p-8 space-y-8">
        {/* Header */}
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-bold text-cyan-400">Settings</h1>
          <p className="text-gray-400">
            Customize your FitTrack experience and preferences
          </p>
        </div>

        {/* Preferences Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v1a6 6 0 006 6 6 6 0 006-6V8a6 6 0 00-6-6z" />
              </svg>
              Preferences
            </h2>
            <p className="text-gray-400 text-sm">
              Manage your app settings and notification preferences
            </p>
          </div>

          {/* Notifications */}
          <div className="space-y-2">
            <h3 className="text-gray-300 font-semibold flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v5H3l3 3v1h8v-1l3-3h-1V8a6 6 0 00-6-6z" />
              </svg>
              Notifications
            </h3>

            <label
              className="flex items-center justify-between bg-gray-700 border border-cyan-400 rounded-lg p-4 cursor-pointer hover:bg-gray-700/80"
            >
              <div>
                <span className="text-gray-200 font-medium">
                  Push Notifications
                </span>
                <p className="text-gray-400 text-sm">
                  Receive in-app alerts for workouts, goals, and reminders
                </p>
              </div>
              <input
                type="checkbox"
                className="w-5 h-5 text-cyan-400 rounded"
                checked={pushNotifications}
                onChange={() => setPushNotifications(!pushNotifications)}
              />
            </label>
          </div>

          {/* Units */}
          <div className="space-y-2">
            <h3 className="text-gray-300 font-semibold">Units</h3>
            <select
              value={measurement}
              onChange={(e) => setMeasurement(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 text-gray-200 p-2 rounded"
            >
              <option value="eu">Metric System (kg, cm)</option>
              <option value="us">Imperial System (lbs, in)</option>
            </select>
          </div>

          {/* Appearance */}
          <div className="space-y-2 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-gray-300 font-semibold">Theme</h3>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-gray-200 p-2 rounded"
              >
                <option value="dark">Dark Mode</option>
                <option value="light">Light Mode</option>
              </select>
            </div>
            <div>
              <h3 className="text-gray-300 font-semibold">Language</h3>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-gray-200 p-2 rounded"
              >
                <option value="en">US English</option>
                <option value="es">Spanish</option>
              </select>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-900 border border-red-700 rounded-lg p-4 space-y-2">
          <p className="text-red-300 text-sm">
            Once you delete your profile, there is no going back. All your data
            including workouts, progress, and goals will be permanently erased.
          </p>
          <button className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded">
            Delete My Profile
          </button>
        </div>
      </div>
    </div>
  );
}
