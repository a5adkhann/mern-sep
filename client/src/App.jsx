import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppLayout from "./AppLayout";
import DashboardLayout from "./dashboard/DashboardLayout";
import Register from "./dashboard/Register";
import Login from "./dashboard/Login";

const App = () => {
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

          <Route path="/dashboard" element={<DashboardLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
