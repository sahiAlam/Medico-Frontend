import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  // Login Form
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLoginForm = (e) => {
    e.preventDefault();
    console.log(loginData);

    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="bg-gray h-screen">
        <div className="flex items-center justify-center h-full p-4">
          <div>
            <img src="" alt="" />
          </div>
          <div className="w-full md:w-[500px] bg-white py-12 rounded-3xl shadow-xl">
            <div className="text-center ">
              <h2 className="font-bold text-3xl">Welcome back</h2>
              <p className="text-sm text-black mt-2">
                Please Enter Your Details
              </p>
            </div>
            <form className="flex flex-col justify-center gap-4 px-5 md:px-8 my-6">
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                  value={loginData.email}
                  onChange={handleLoginData}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  placeholder="Enter Your Password"
                  autoComplete="off"
                  value={loginData.password}
                  onChange={handleLoginData}
                />
              </div>
              <NavLink className="text-right text-linkColor underline md:hover:scale-105 transition-all">
                Forgot Password
              </NavLink>
              <button
                className="w-full bg-gradient-to-r from-btnColor to-green text-gray p-2 rounded-lg md:hover:bg-gradient-to-r md:hover:from-green md:hover:to-btnColor hover:transition-all"
                onClick={handleSubmitLoginForm}
              >
                Sign in
              </button>
            </form>
            <div className="flex justify-center gap-2">
              <p>Don't have an account?</p>
              <NavLink
                to="/signup"
                className="text-linkColor underline md:hover:scale-105 transition-all"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
