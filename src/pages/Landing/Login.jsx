"use client";
import React, { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleGoogleSignin = () => {
    window.open(
      "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email%20profile",
      "_blank"
    );
  };

  return (
    <div className="grid h-screen w-full place-items-center bg-white">
      <div className="max-w-[390px] bg-white p-8 rounded-lg shadow-xl overflow-hidden mt-24">
        {/* Dynamic Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold">
            {isLogin ? "Login" : "Signup"}
          </h1>
        </div>

        <div className="mt-6">
          {isLogin ? (
            <form>
              <div className="h-12 w-full mt-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full h-full px-4 border-2 border-black rounded-lg text-lg focus:outline-none"
                />
              </div>
              <div className="h-12 w-full mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full h-full px-4 border-2 border-black rounded-lg text-lg focus:outline-none"
                />
              </div>
              <div className="mt-2 text-right">
                <a href="#" className="text-black">
                  Forgot password?
                </a>
              </div>
              <div className="h-12 w-full mt-6">
                <button
                  type="submit"
                  className="w-full h-full bg-gradient-to-l from-black via-gray-900 to-gray-700 text-white font-semibold text-lg rounded-lg cursor-pointer transition-all duration-400 ease-in-out"
                >
                  Login
                </button>
              </div>

              <div className="text-center mt-4">
                Not a member?{" "}
                <a
                  href="#"
                  onClick={handleSignupClick}
                  className="text-black"
                >
                  Signup now
                </a>
              </div>
            </form>
          ) : (
            <form>
              <div className="h-12 w-full mt-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full h-full px-4 border-2 border-black rounded-lg text-lg focus:outline-none"
                />
              </div>
              <div className="h-12 w-full mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full h-full px-4 border-2 border-black rounded-lg text-lg focus:outline-none"
                />
              </div>
              <div className="h-12 w-full mt-5">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                  className="w-full h-full px-4 border-2 border-black rounded-lg text-lg focus:outline-none"
                />
              </div>
              <div className="h-12 w-full mt-6">
                <button
                  type="submit"
                  className="w-full h-full bg-gradient-to-l from-black via-gray-900 to-gray-700 text-white font-semibold text-lg rounded-lg cursor-pointer transition-all duration-400 ease-in-out"
                >
                  Signup
                </button>
              </div>
              <div className="text-center mt-4">
                Existing member?{" "}
                <a
                  href="#"
                  onClick={handleLoginClick}
                  className="text-black"
                >
                  Login
                </a>
              </div>
            </form>
          )}
          <div className="mt-6">
            <button
              onClick={handleGoogleSignin}
              className="w-full h-12 bg-black-600 text-black font-semibold text-sm rounded-lg cursor-pointer flex items-center justify-center gap-3 border-2 border-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24px"
                height="24px"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.7 0 6.9 1.4 9.4 3.7l7-7C36.5 2.3 30.7 0 24 0 14.8 0 7.1 5.3 3.2 13l7.8 6.1C13.4 13 18.2 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.3 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.5 2.4-1.8 4.5-3.7 5.9l7.7 6c4.5-4.2 7-10.3 7-16.4z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.9 28.6c-.9-2.4-.9-5.1 0-7.5L3.1 15C.6 20.5.6 27.5 3.1 33l7.8-6.1z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.5 0 12-2.1 16.1-5.7l-7.7-6c-2.2 1.5-5 2.3-8.4 2.3-5.8 0-10.8-3.8-12.6-9.1l-7.8 6C7.1 42.6 14.8 48 24 48z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
