import React, { useEffect } from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { RouterProvider } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

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
