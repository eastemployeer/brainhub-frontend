import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./views/NotFoundPage";
import AddEventPage from "./views/AddEventPage";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AddEventPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer position="bottom-right" newestOnTop />
    </>
  );
}
