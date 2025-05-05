import React from "react";
import "../styles.css";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import MainContent from "../components/MainContent/MainContent";

export default function MainPage() {
  return (
    <div className="main-page">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
