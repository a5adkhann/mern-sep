// src/Dashboard/components/SidebarSection.jsx
import React from 'react';
import { Home, Dumbbell, Apple, TrendingUp, Target, Calendar, BarChart3, Settings, LogOut, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="flex flex-col min-h-screen w-64 bg-gray-900 text-gray-200 border-r border-gray-800">
      {/* Logo */}
      <div className="flex items-center p-5 space-x-3">
        <div className="w-10 h-10 bg-indigo-600 flex items-center justify-center rounded-xl font-bold text-white">
          FT
        </div>
        <h1 className="text-xl font-bold text-indigo-600">FitTrack</h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {[
          { Icon: Home, label: 'Dashboard' },
          { Icon: Dumbbell, label: 'Workouts' },
          { Icon: Apple, label: 'Nutrition' },
          { Icon: TrendingUp, label: 'Progress' },
          { Icon: Target, label: 'Goals' },
          { Icon: Calendar, label: 'Reminders' },
          { Icon: BarChart3, label: 'Analytics' },
          { Icon: Settings, label: 'Settings' },
        ].map(({ Icon, label }) => (
          <a
            key={label}
            href="#"
            className="flex items-center px-3 py-2 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <Icon className="w-5 h-5 mr-3" />
            <span className="font-medium">{label}</span>
            <ChevronRight className="ml-auto w-4 h-4 text-gray-400" />
          </a>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center px-3 py-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition">
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
