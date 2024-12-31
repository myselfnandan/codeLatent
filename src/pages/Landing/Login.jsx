'use client';
import React, { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="grid h-screen w-full place-items-center bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy">
      <div className="max-w-[390px] bg-white p-8 rounded-lg shadow-xl overflow-hidden mt-24">
        <div className="flex w-[200%]">
          <div
            className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
              isLogin ? 'active' : ''
            }`}
            onClick={handleLoginClick}
          >
            Login
          </div>
          <div
            className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
              !isLogin ? 'active' : ''
            }`}
            onClick={handleSignupClick}
          >
            Signup
          </div>
        </div>
        <div className="relative mt-8 flex items-center justify-between border-2 border-black rounded-xl p-1">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLogin}
            onChange={handleLoginClick}
            className="hidden"
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLogin}
            onChange={handleSignupClick}
            className="hidden"
          />
          <label
            htmlFor="login"
            className="w-1/2 text-xs font-medium text-white text-center py-2 cursor-pointer transition-all duration-700 ease-in-out transform"
            onClick={handleLoginClick}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className="w-1/2 text-xs font-medium text-white text-center py-2 cursor-pointer transition-all duration-700 ease-in-out transform"
            onClick={handleSignupClick}
          >
            Signup
          </label>
          <div
            className={`absolute inset-0 w-1/2 bg-gradient-to-l from-black via-gray-900 to-gray-700 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
              isLogin ? 'left-0' : 'left-1/2'
            }`}
            style={{heigth: '30px'}}
          ></div>
        </div>

        <div className="flex w-[200%] mt-6 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
          {isLogin ? (
            <form className="w-1/2">
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
                <a href="#" className="text-black">Forgot password?</a>
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
                Not a member? <a href="#" onClick={handleSignupClick} className="text-black">Signup now</a>
              </div>
            </form>
          ) : (
            <form className="w-1/2">
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
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
