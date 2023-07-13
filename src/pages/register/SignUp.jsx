import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signupImage from "../../assets/signup.avif";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/validationSchema";

const professionOptions = [
  { value: "", text: "--Choose an Option--" },
  { value: "patient", text: "Patient" },
  { value: "doctor", text: "Doctor" },
  { value: "other", text: "Other" },
];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  profession: "",
  password: "",
  passwordConfirmation: "",
  isDoctor: false,
};

const SignUp = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        if (values.profession === "doctor") {
          values.isDoctor = true;
        }
        try {
          const res = await fetch("http://localhost:8080/api/user", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });

          const data = await res.json();

          if (data?.id) {
            alert(data.message);
            navigate("/user/verify");
          } else {
            alert("Invalid credential, please check your data..");
          }
        } catch (err) {
          if (err) {
            console.log(err);
          }
        }
      },
    });

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
            <form
              method="POST"
              className="flex flex-col justify-center gap-2 px-5 md:px-8 my-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-darkGray">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Your First Name"
                  autoComplete="off"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && touched.firstName ? (
                  <p className="text-danger text-sm">{errors.firstName}</p>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-darkGray">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Your Last Name"
                  autoComplete="off"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName && touched.lastName ? (
                  <p className="text-danger text-sm">{errors.lastName}</p>
                ) : null}
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
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-danger text-sm">{errors.email}</p>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="profession" className="text-darkGray">
                  Profession
                </label>
                <select
                  name="profession"
                  id="profession"
                  className="w-full p-2 outline-none rounded-lg border border-gray text-darkGray"
                  value={values.profession}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {professionOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
                {errors.profession && touched.profession ? (
                  <p className="text-danger text-sm">{errors.profession}</p>
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
                  placeholder="Your Password"
                  autoComplete="off"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="text-danger text-sm">{errors.password}</p>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="ConfirmPassword" className="text-darkGray">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  placeholder="Confirm Your Password"
                  autoComplete="off"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  value={values.passwordConfirmation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <p className="text-danger text-sm">
                    {errors.passwordConfirmation}
                  </p>
                ) : null}
              </div>

              <button className="w-full bg-gradient-to-r from-btnColor to-green text-gray p-2 mt-2 rounded-lg md:hover:bg-gradient-to-r md:hover:from-green md:hover:to-btnColor hover:transition-all">
                Sign Up
              </button>
            </form>
            <div className="flex justify-center gap-2 pb-10 sm:pb-0">
              <p>Already have an account?</p>
              <NavLink
                to="/user/login"
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
