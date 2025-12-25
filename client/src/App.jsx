import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppLayout from "./AppLayout";
import DashboardLayout from "./dashboard/DashboardLayout";
import Register from "./dashboard/Register";
import Login from "./dashboard/Login";
import { Toaster } from "react-hot-toast";
import Profile from "./dashboard/pages/Profile";
import Workouts from "./dashboard/pages/Workouts";
import Nutritions from "./dashboard/pages/Nutritions";
import Progress from "./dashboard/pages/Progress";
import FitnessGoals from "./dashboard/pages/FitnessGoals";
import Reminders from "./dashboard/pages/Reminders";
import Settings from "./dashboard/pages/Settings";
import Analytics from "./dashboard/pages/Analytics";

const App = () => {
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("user")) || "");

  const logoutUser = () => {
    localStorage.removeItem("user");
    setLoggedUser("");
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/dashboard" element={ loggedUser ? <DashboardLayout logoutUser = {logoutUser} /> : <Navigate to="/login"/>}>
                 <Route path="profile" element={<Profile />}></Route>
                 <Route path="workouts" element={<Workouts />}></Route>
                 <Route path="nutrition" element={<Nutritions />}></Route>
                 <Route path="progress" element={<Progress />}></Route>
                 <Route path="goals" element={<FitnessGoals />}></Route>
                 <Route path="reminders" element={<Reminders />}></Route>
                 <Route path="analytics" element={<Analytics />}></Route>
                 <Route path="settings" element={<Settings />}></Route>
          </Route>
        </Routes>

        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
