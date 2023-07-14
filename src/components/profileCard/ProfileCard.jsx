import React, { useState } from "react";
import profileImage from "../../assets/avatar.png";
import { useNavigate } from "react-router";

const ProfileCard = () => {
  const navigate = useNavigate();

  const handleLoggedOut = () => {
    localStorage.clear(); // remove token on logout
    navigate("user/login");
  };

  return (
    <>
      <div className="absolute bg-green  top-12 right-4 h-2/4 w-2/3 shadow-md rounded-xl md:h-96 md:w-96 md:right-0">
        <div className="py-4">
          <img
            src={profileImage}
            alt="profileImage"
            className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full border-2 border-gray "
          />
          <h3 className="text-center my-1 font-bold md:text-xl">Sahil Khan</h3>
        </div>
        <div className="text-gray dark:text-black absolute bg-black dark:bg-white h-full w-full rounded-3xl p-3">
          <div className="flex justify-between text-sm md:text-lg mt-2 p-2 dark:bg-gray rounded-xl">
            <h4 className="font-bold">Email</h4>
            <p>ksahi4088@gmail.com</p>
          </div>
          <div className="flex justify-between text-sm md:text-lg mt-2 p-2 dark:bg-gray rounded-xl">
            <h4 className="font-bold">Date of Birth</h4>
            <p>30/04/2001</p>
          </div>
          <div className="flex justify-between text-sm md:text-lg mt-2 p-2 dark:bg-gray rounded-xl">
            <h4 className="font-bold">Gender</h4>
            <p>Male</p>
          </div>
          <div className="flex justify-between text-sm md:text-lg mt-2 p-2 dark:bg-gray rounded-xl">
            <h4 className="font-bold">Phone</h4>
            <p>+91 6295331089</p>
          </div>

          <button
            className="dark:text-gray outline-none mt-24 w-2/5 mx-auto bg-green text-sm dark:bg-btnColor block py-2 rounded-full md:hover:scale-110 md:transition-all"
            onClick={handleLoggedOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
