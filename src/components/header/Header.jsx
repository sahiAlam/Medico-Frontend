import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";

import { BiSolidUserCircle } from "react-icons/bi";
import { MdLightMode, MdDarkMode, MdOutlineEdit } from "react-icons/md";

import ProfileCard from "../profileCard/ProfileCard";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [profilePopup, setProfilePopup] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // Theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem("access")) {
      setIsUserLoggedIn(true);
    }
  }, []);

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

            {isUserLoggedIn ? (
              <BiSolidUserCircle
                size={30}
                className="cursor-pointer"
                onClick={() => setProfilePopup(!profilePopup)}
                color={theme === "light" ? "" : "white"}
              />
            ) : (
              <NavLink
                to={"user/login"}
                className="bg-gradient-to-r from-btnColor to-green px-3 md:px-6 py-1 md:py-2 rounded-full text-sm md:text-lg text-gray font-bold md:hover:bg-btnColor md:transition-all"
              >
                Log in
              </NavLink>
            )}

            {profilePopup && <ProfileCard logOutUser={setIsUserLoggedIn} />}
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
