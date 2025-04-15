import React, { useState } from "react";
import { Header } from "./Header";

export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Email"
                className="w-full p-3 rounded bg-gray-700 focus:outline-none"
              />

              {/* Full Name field only for Sign Up */}
              {!isSignInForm && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded bg-gray-700 focus:outline-none"
                />
              )}

              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded bg-gray-700 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold"
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
