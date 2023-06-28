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
      <div className="bg-zinc-100 h-screen w-full">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-10 h-full">
          <div className="bg-white w-5/6 md:w-2/3 lg:w-2/5 flex flex-col px-4 py-10 mx-3 lg:p-10 shadow-lg md:shadow-2xl rounded-2xl">
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
              className="bg-slate-100 p-3 my-2 border-2 border-slate-100 outline-none focus:border-b-2 focus:border-red-300 rounded-xl"
            />
            <input
              type="email"
              placeholder="Email ID"
              autoComplete="off"
              name="email"
              value={signUpData.email}
              onChange={getFormData}
              className="bg-slate-100 p-3 my-2 border-2 border-slate-100 outline-none focus:border-b-2 focus:border-red-300 rounded-xl"
            />
            <input
              type="text"
              placeholder="Phone Number"
              autoComplete="off"
              name="mobile"
              value={signUpData.mobile}
              onChange={getFormData}
              className="bg-slate-100 p-3 my-2 border-2 border-slate-100 outline-none focus:border-b-2 focus:border-red-300 rounded-xl"
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              value={signUpData.password}
              onChange={getFormData}
              className="bg-slate-100 p-3 my-2 border-2 border-slate-100 outline-none focus:border-b-2 focus:border-red-300 rounded-xl"
            />
            <button
              // onClick={submitSignUpForm}
              className="bg-gradient-to-r from-red-500 to-orange-400 font-bold text-white w-fit mx-auto px-10 py-3 rounded-3xl my-3 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:scale-105"
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
