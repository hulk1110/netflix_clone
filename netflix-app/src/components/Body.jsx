import React from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { Routes, Route } from "react-router-dom";

export const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
};
