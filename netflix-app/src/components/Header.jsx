import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

export const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("Sign out triggered");  
    signOut(auth)
      .then(() => {
        console.log("Signed out from Firebase");
      })
      .catch((error) => {
        console.error("Sign out failed:", error);
        navigate("/error");
      });
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between items-center">
      <img
        src={LOGO}
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
          <button onClick={handleSignOut} className="font-bold text-white z-50">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
