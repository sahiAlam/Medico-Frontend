import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import loginImage from "../../assets/login.png";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/validationSchema";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  // Login Form
  const errorMessage = [];
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        try {
          const res = await fetch("http://localhost:8080/api/sessions/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });

          const data = await res.json();

          errorMessage.push(data);
          console.log(errorMessage);

          if (data?.accessToken && data?.refreshToken) {
            // window.alert("Login Successful");
            navigate("/");
          } else if (data?.message) {
            alert(data.message);
          } else {
            alert("Wrong Input..");
          }
        } catch (err) {
          if (err) throw err;
        }
      },
    });

  return (
    <>
      <div className="bg-gray h-screen">
        <div className="flex items-center gap-8 justify-center h-full p-4 bg-white">
          <div className="hidden md:flex">
            <img src={loginImage} alt="loginImage" className="animate-beat" />
          </div>
          <div className="w-full md:w-[500px] py-12 shadow-md rounded-3xl border border-gray">
            <div className="text-center ">
              <h2 className="font-bold text-2xl md:text-3xl">Welcome back</h2>
              <p className="text-sm text-black mt-2">
                Please Enter Your Details
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="flex flex-col justify-center gap-4 px-5 md:px-8 my-6"
            >
              <div className="flex flex-col">
                <label htmlFor="email" className="text-darkGray">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-danger text-sm">{errors.email}</p>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-darkGray">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  placeholder="Enter Your Password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="text-danger text-sm">{errors.password}</p>
                ) : null}
              </div>
              <NavLink
                to="/user/forgotPassword"
                className="text-right text-linkColor underline md:hover:scale-105 transition-all"
              >
                Forgot Password
              </NavLink>
              <button className="w-full bg-gradient-to-r from-btnColor to-green text-gray p-2 rounded-lg md:hover:bg-gradient-to-r md:hover:from-green md:hover:to-btnColor hover:transition-all">
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
