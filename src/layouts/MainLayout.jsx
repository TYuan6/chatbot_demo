import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import MainContent from "../components/MainContent/MainContent";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="main-layout-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
