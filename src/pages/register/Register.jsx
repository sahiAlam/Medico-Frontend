import React, { useState } from "react";
import Logo from "../../components/logo/Logo";

const Register = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const getFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignUpData({ ...signUpData, [name]: value });
  };

  return (
    <>
      <div className="h-screen w-full">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-10 h-full">
          <div className="bg-white w-5/6 md:w-2/3 lg:w-2/5 flex flex-col px-5 py-12 lg:p-20 shadow-lg md:shadow-2xl rounded-2xl">
            <h1 className="text-center text-3xl md:text-4xl font-bold">
              Register Now
            </h1>
            <p className="text-center p-4">Please enter your details</p>
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="off"
              name="name"
              value={signUpData.name}
              onChange={getFormData}
              className="bg-slate-100 p-3 my-3 outline-none rounded-xl border border-btnColor"
            />
            <input
              type="email"
              placeholder="Email ID"
              autoComplete="off"
              name="email"
              value={signUpData.email}
              onChange={getFormData}
              className="bg-slate-100 p-3 my-3 outline-none rounded-xl border border-btnColor"
            />
            <input
              type="text"
              placeholder="Phone Number"
              autoComplete="off"
              name="mobile"
              value={signUpData.mobile}
              onChange={getFormData}
              className="bg-slate-100 p-3 my-3 outline-none rounded-xl border border-btnColor"
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              value={signUpData.password}
              onChange={getFormData}
              className="bg-slate-100 p-3 my-3 outline-none rounded-xl border border-btnColor"
            />
            <button
              // onClick={submitSignUpForm}
              className="bg-green font-bold text-white w-fit mx-auto px-10 py-3 rounded-3xl my-3 md:hover:scale-105 md:hover:transition-all"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
