import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AppsPage from "../pages/AppsPage";
import DocumentsPage from "../pages/DocumentsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="apps" element={<AppsPage />}/>
        <Route path="documents" element={<DocumentsPage />}/>
      </Route>
    </Routes>
  );
}
