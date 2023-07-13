import React, { useState } from "react";
import { NavLink, json, useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  // Verify Form
  const [verificationCode, setVerificationCode] = useState("");

  const handleVerificationCode = (e) => {
    setVerificationCode(e.target.value);
  };
  const id = "64afa14311300fc1424cf5b5";

  const submitVerificationCode = async (e) => {
    e.preventDefault();
    if (!verificationCode || verificationCode === "") {
      alert("Please enter your code");
    } else {
      try {
        const res = await fetch(
          `http://localhost:8080/api/verify/${id}/${verificationCode}`,
          {
            method: "POST",
            body: JSON.stringify({ verificationCode }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();

        console.log(data);
        if (data?.accessToken && data?.refreshToken) {
          alert(data?.message);
          navigate("/login");
        }
      } catch (err) {
        if (err) {
          throw err;
        } else {
          alert("Account has been verified...");
        }
      }
    }
  };

  return (
    <>
      <div className="bg-gray h-screen">
        <div className="flex items-center gap-8 justify-center h-full p-4 bg-white">
          <div className=" w-full md:w-[500px] py-12 shadow-md rounded-3xl border border-gray">
            <div className="text-center ">
              <h2 className="font-bold text-2xl md:text-3xl">Verify Now</h2>
              <p className="text-sm text-black mt-2">
                Please Enter Your Verification Code
              </p>
            </div>
            <form
              method="POST"
              className="flex flex-col justify-center gap-4 px-5 md:px-8 my-6"
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  name="verifyCode"
                  id="verifyCode"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  placeholder="Enter Your Code Here"
                  autoComplete="off"
                  value={verificationCode}
                  onChange={handleVerificationCode}
                />
              </div>

              <button
                className="w-full bg-gradient-to-r from-btnColor to-green text-gray p-2 rounded-lg md:hover:bg-gradient-to-r md:hover:from-green md:hover:to-btnColor hover:transition-all"
                onClick={submitVerificationCode}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
