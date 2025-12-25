import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Dumbbell, Apple, TrendingUp, Target, Calendar, BarChart3, Settings, LogOut, ChevronRight } from 'lucide-react';

const Sidebar = ({logoutUser}) => {
  const location = useLocation();

  const menuItems = [
    { Icon: Home, label: 'Dashboard', to: '/dashboard' },
    { Icon: Dumbbell, label: 'Workouts', to: '/dashboard/workouts' },
    { Icon: Apple, label: 'Nutrition', to: '/dashboard/nutrition' },
    { Icon: TrendingUp, label: 'Progress', to: '/dashboard/progress' },
    { Icon: Target, label: 'Goals', to: '/dashboard/goals' },
    { Icon: Calendar, label: 'Reminders', to: '/dashboard/reminders' },
    { Icon: BarChart3, label: 'Analytics', to: '/dashboard/analytics' },
    { Icon: Settings, label: 'Settings', to: '/dashboard/settings' },
  ];

  return (
    <aside className="flex flex-col min-h-screen w-64 bg-gray-900 text-gray-200 border-r border-gray-800">
      <div className="flex items-center p-5 space-x-3">
        <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center rounded-xl font-bold text-white">
          A
        </div>
        <h1 className="text-xl font-bold text-cyan-400">AthLetix</h1>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {menuItems.map(({ Icon, label, to }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={label}
              to={to}
              className={`flex items-center px-3 py-3 rounded-xl transition-colors ${
                isActive ? 'bg-cyan-950 text-white border border-cyan-400' : 'hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{label}</span>
              <ChevronRight className="ml-auto w-4 h-4 text-gray-400" />
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center px-3 py-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition" onClick={logoutUser}>
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
