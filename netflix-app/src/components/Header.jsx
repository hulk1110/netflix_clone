import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})

      .catch((error) => {
        console.error("Error signing out:", error);
        navigate("/error");
      });
  };

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

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between items-center">
      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
        className="w-44"
      />

      {userInfo && (
        <div className="flex items-center space-x-4">
          <img
            src={userInfo.photoURL}
            alt="User Icon"
            className="w-10 h-10 rounded cursor-pointer"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-semibold hover:underline"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
