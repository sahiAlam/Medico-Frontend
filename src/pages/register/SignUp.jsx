import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signupImage from "../../assets/signup.avif";

const SignUp = () => {
  const navigate = useNavigate();

  const professionOptions = [
    { value: "", text: "--Choose an Option--" },
    { value: "patient", text: "Patient" },
    { value: "doctor", text: "Doctor" },
    { value: "other", text: "Other" },
  ];

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: professionOptions[0].text,
    password: "",
    passwordConfirmation: "",
    isDoctor: false,
  });

  const handleSignupData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmitSignupForm = async (e) => {
    e.preventDefault();
    let {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      isDoctor,
    } = signupData;

    if (
      signupData.firstName ||
      signupData.lastName ||
      signupData.email ||
      signupData.password ||
      signupData.passwordConfirmation
    ) {
      try {
        const res = await fetch("http://localhost:8080/api/user", {
          method: "POST",
          body: JSON.stringify({
            firstName,
            lastName,
            password,
            passwordConfirmation,
            email,
            isDoctor,
          }),
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

      setSignupData({
        firstName: "",
        lastName: "",
        email: "",
        profession: professionOptions[0].text,
        password: "",
        passwordConfirmation: "",
        isDoctor: false,
      });
    } else {
      alert("Invalid Inputs");
    }
  };

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
                  value={signupData.firstName}
                  onChange={handleSignupData}
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                />
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
                  value={signupData.lastName}
                  onChange={handleSignupData}
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
                  value={signupData.email}
                  onChange={handleSignupData}
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
                  value={signupData.profession}
                  onChange={handleSignupData}
                >
                  {professionOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
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
                  value={signupData.password}
                  onChange={handleSignupData}
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                />
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
                  value={signupData.passwordConfirmation}
                  onChange={handleSignupData}
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                />
              </div>

              <button
                className="w-full bg-gradient-to-r from-btnColor to-green text-gray p-2 mt-2 rounded-lg md:hover:bg-gradient-to-r md:hover:from-green md:hover:to-btnColor hover:transition-all"
                onClick={handleSubmitSignupForm}
              >
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
