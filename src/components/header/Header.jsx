import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";

import { BiSolidUserCircle } from "react-icons/bi";
import { MdLightMode, MdDarkMode, MdOutlineEdit } from "react-icons/md";

import profileImage from "../../assets/avatar.png";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [profilePopup, setProfilePopup] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="dark:bg-black md:sticky top-0 shadow-md ">
        <div className="lg:container lg:px-10 mx-auto flex items-center justify-between h-12 md:h-16 px-4 md:py-10">
          <div>
            <Logo />
          </div>
          <div className="flex items-center gap-5 md:relative">
            {theme === "dark" ? (
              <MdLightMode
                size={22}
                color="white"
                className="cursor-pointer"
                onClick={() => setTheme("light")}
              />
            ) : (
              <MdDarkMode
                size={22}
                className="cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            )}

            <BiSolidUserCircle
              size={30}
              className="cursor-pointer"
              onClick={() => setProfilePopup(!profilePopup)}
              color={theme === "light" ? "" : "white"}
            />

            {profilePopup && (
              <div className="absolute bg-green  top-12 right-4 h-2/4 w-2/3 shadow-md rounded-xl md:h-96 md:w-96 md:right-0">
                <div className="py-4">
                  <img
                    src={profileImage}
                    alt="profileImage"
                    className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full border-2 border-gray "
                  />

                  <h3 className="text-center my-1 font-bold md:text-xl">
                    Sahil Khan
                  </h3>
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

                  <button className="outline-none mt-24 w-2/5 mx-auto bg-green text-sm dark:bg-btnColor block py-2 rounded-full">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

{
  /* <div className="flex gap-3">
  <button className="inline-block px-3 py-2 font-para text-green md:transition-all text-md">
    Sign In
  </button>
  <button className="inline-block px-5 py-2 rounded-lg text-white bg-btnColor font-para md:hover:bg-green md:transition-all">
    Sign Up
  </button>
</div>; */
}
