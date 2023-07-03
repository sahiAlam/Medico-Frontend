import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";

import { BiSolidUserCircle } from "react-icons/bi";
import { MdLightMode, MdDarkMode } from "react-icons/md";

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
              <div className="absolute bg-green  top-12 right-4 h-2/4 w-2/3 shadow-md p-4 rounded-xl md:h-96 md:w-96 md:right-0">
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus odit voluptatibus tempora dolor debitis eius illo
                  fuga error repellat vitae, sequi nulla natus, temporibus sit
                  atque laborum numquam itaque similique?
                </p>
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
