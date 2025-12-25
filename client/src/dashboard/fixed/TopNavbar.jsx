// src/Dashboard/components/TopNavbar.jsx
import React from 'react';
import { Bell, Search, Sun, CheckCircle, Trash2, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <header style={{
      background: "linear-gradient(to right, var(--bg-secondary), var(--bg-card))"
    }} className="flex items-center justify-between px-6 py-4 bg-gray-900 text-gray-200 border-b border-gray-800">
      {/* Search */}
      <form className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search workouts, meals..."
          className="pl-10 pr-4 py-2 rounded-full w-64 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
      </form>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
            <Bell className="w-5 h-5 text-cyan-400" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Notifications Dropdown */}
          <div className="absolute hidden right-0 mt-2 w-96 bg-white rounded-lg shadow-lg max-h-80 overflow-y-auto border border-gray-200 z-50">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Notifications</h3>
              <button className="text-xs text-indigo-500 hover:underline">Mark all read</button>
            </div>

            <div className="divide-y divide-gray-200">
              <div className="p-3 border-l-4 border-green-500 bg-green-50 hover:bg-gray-100 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-500">Goal</span>
                  </div>
                  <span className="text-xs text-gray-400">2025-12-24</span>
                </div>
                <p className="text-sm text-gray-800 mb-2">You reached your step goal today!</p>
                <div className="flex justify-between items-center text-xs text-indigo-500">
                  <span className="flex items-center space-x-1"><CheckCircle className="w-3 h-3" />Mark read</span>
                  <button className="flex items-center space-x-1 text-red-500 hover:text-red-700"><Trash2 className="w-3 h-3" />Delete</button>
                </div>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50 hover:bg-gray-100 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <Bell className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-500">Reminder</span>
                  </div>
                  <span className="text-xs text-gray-400">2025-12-23</span>
                </div>
                <p className="text-sm text-gray-800 mb-2">Don’t forget your water intake!</p>
                <div className="flex justify-between items-center text-xs text-indigo-500">
                  <span className="text-green-500 flex items-center space-x-1"><CheckCircle className="w-3 h-3" />Read</span>
                  <button className="flex items-center space-x-1 text-red-500 hover:text-red-700"><Trash2 className="w-3 h-3" />Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
          <Sun className="w-5 h-5 text-cyan-400" />
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-700">J</span>
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
          </div>
          <Link to="profile">
          <div className="text-left">
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-xs text-gray-400">Fitness Enthusiast</p>
          </div>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
