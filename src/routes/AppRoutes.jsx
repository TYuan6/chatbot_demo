import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={MainLayout}></Route>
    </Routes>
  );
}
