import React from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { RouterProvider } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

export const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        {/* { <Route path="/dashboard" element={<Dashboard />} />} */}
      </Routes>
    </div>
  );
};
