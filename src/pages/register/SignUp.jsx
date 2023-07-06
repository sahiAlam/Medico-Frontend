import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import signupImage from "../../assets/signup.avif";

const SignUp = () => {
  return (
    <>
      <div className="bg-gray h-screen">
        <div className="flex items-center gap-5 justify-center h-full p-4 bg-white">
          <div className="hidden lg:flex">
            <img
              src={signupImage}
              alt="loginImage"
              className="w-[650px] animate-beat"
            />
          </div>
          <div className="w-full h-full md:h-auto md:w-[500px] py-10 md:shadow-md md:rounded-3xl md:border border-gray">
            <div className="text-center ">
              <h2 className="font-bold text-2xl md:text-3xl pb-4">
                Sign Up Now
              </h2>
              {/* <p className="text-sm text-black mt-2">
                Please Enter Your Details
              </p> */}
            </div>
            <form className="flex flex-col justify-center gap-2 px-5 md:px-8 my-4">
              <div className="flex flex-col">
                <label htmlFor="fName" className="text-darkGray">
                  First Name
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Your First Name"
                  autoComplete="off"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lName" className="text-darkGray">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Your Last Name"
                  autoComplete="off"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-darkGray">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  autoComplete="off"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="profession" className="text-darkGray">
                  Profession
                </label>
                <select
                  name="profession"
                  id="profession"
                  className="w-full p-2 outline-none rounded-lg border border-gray text-darkGray"
                >
                  <option value="doctor">Select</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-darkGray">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  autoComplete="off"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="ConfirmPassword" className="text-darkGray">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="ConfirmPassword"
                  id="ConfirmPassword"
                  placeholder="Confirm Your Password"
                  autoComplete="off"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-btnColor to-green text-gray p-2 mt-2 rounded-lg md:hover:bg-gradient-to-r md:hover:from-green md:hover:to-btnColor hover:transition-all">
                Sign Up
              </button>
            </form>
            <div className="flex justify-center gap-2 pb-10 sm:pb-0">
              <p>Already have an account?</p>
              <NavLink
                to="/login"
                className="text-linkColor underline md:hover:scale-105 transition-all"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
