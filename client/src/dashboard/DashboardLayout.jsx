import React, { useState } from "react";
import { Sidebar, Menu, X } from "lucide-react"; // You can add more icons as needed
import TopNavbar from "./fixed/TopNavbar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white font-[Michroma]">
      
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex-shrink-0 transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="w-64 bg-gray-800 border-r border-gray-700 h-full flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-cyan-400">Dashboard</h2>
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-cyan-500/20 transition-all"
            >
              <Sidebar className="w-5 h-5 text-cyan-400" /> Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-cyan-500/20 transition-all"
            >
              <Menu className="w-5 h-5 text-cyan-400" /> Projects
            </a>
            {/* Add more sidebar links here */}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <TopNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <main className="flex-1 overflow-auto p-6 bg-gray-900">
          {children || (
            <div className="text-center text-gray-400 text-lg">
              Welcome to the Dashboard!
            </div>
          )}
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
