import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidData(emailValue, passwordValue);
    setError(message);
    if (message) return;

    // Create new user (Sign Up)
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/13083433?s=400&u=cf2350f56ba811e4a7faf0f5aead1d0a730c08f5&v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setError(error.message);
            });

          console.log("User signed up:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`${errorMessage} (${errorCode})`);
        });
    } else {
      // Login (Sign In)
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`${errorMessage} (${errorCode})`);
        });
    }
  };
  return (
    <div className="relative h-screen w-screen">
      {/* Background image */}
      <img
        src="https://bit.ly/2E3scwW"
        alt="background"
        className="absolute h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute h-full w-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        {/* Login form */}
        <div className="flex justify-center items-center h-[calc(100vh-80px)]">
          <div className="bg-black bg-opacity-75 text-white p-10 rounded-lg max-w-sm w-full">
            <h1 className="text-3xl font-bold mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Full Name field only for Sign Up */}
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded bg-gray-700 focus:outline-none"
                />
              )}

              <input
                ref={email}
                type="text"
                placeholder="Email"
                className="w-full p-3 rounded bg-gray-700 focus:outline-none"
              />

              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded bg-gray-700 focus:outline-none"
              />

              <p className="text-red-500">{error}</p>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold"
                onClick={handleBtnClick}
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
            </form>

            <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
              <label>
                <input type="checkbox" className="mr-1" />
                Remember me
              </label>
              <a href="https://help.netflix.com/en" className="hover:underline">
                Need help?
              </a>
            </div>

            <p
              className="text-sm text-gray-400 mt-6 cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already registered? Sign In Now"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
