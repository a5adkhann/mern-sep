import React, { useState } from "react";
import TopNavbar from "./fixed/TopNavbar";
import { motion } from 'framer-motion'
import { Outlet } from "react-router-dom"; 
import Sidebar from "./fixed/Sidebar";

const DashboardLayout = ({logoutUser}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen text-white font-[Michroma]">
      
      <Sidebar logoutUser = {logoutUser}/>

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <header
          className="dashboard-header px-6 py-4"
          style={{background: 'linear-gradient(to right, var(--bg-secondary), var(--bg-card))'}}
        >
          <h1 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>AthLetix</h1>
        </header>

        <main className="flex-1 overflow-auto p-6 bg-black">
          <Outlet />
        </main>
      </div>

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
