import React from "react";
import { Outlet } from "react-router-dom";

import "../styles.css";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="main-layout-body">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
