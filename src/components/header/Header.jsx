import React, { useState } from "react";
import Logo from "../logo/Logo";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const navLinks = [
    {
      id: 1,
      text: "home",
      to: "/",
    },
    {
      id: 2,
      text: "services",
      to: "/services",
    },
    {
      id: 3,
      text: "contact us",
      to: "/contactUs",
    },
  ];
  return (
    <>
      <div className="bg-gray">
        <div className="lg:container lg:px-10 mx-auto flex items-center justify-between h-12 md:h-16 px-2 md:py-8">
          <div className="z-10">
            <Logo />
          </div>
          <div>
            <ul className="hidden md:flex">
              {navLinks.map((item) => (
                <li
                  href="#"
                  key={item.id}
                  className="ml-8 lg:ml-12 capitalize text-darkBlack font-para md:text-lg md:hover:text-btnColor md:hover:transition-all"
                >
                  <NavLink to={item.to}>{item.text}</NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger Menu  */}
            {mobileMenu ? (
              <>
                <ul className="flex items-center justify-center flex-col absolute top-12 left-0 z-10 w-full h-full bg-gradient-to-b from-btnColor to-green drop-shadow-xl transition-all">
                  {navLinks.map((item) => (
                    <li
                      href="#"
                      key={item.id}
                      className="my-5 capitalize font-para text-2xl  md:hover:text-btnColor md:hover:transition-all text-white"
                      onClick={() => setMobileMenu(false)}
                    >
                      <NavLink to={item.to}>{item.text}</NavLink>
                    </li>
                  ))}

                  <div className="md:hidden mt-10">
                    {isAuthenticated && <p>{user.name}</p>}
                    {isAuthenticated ? (
                      <button
                        className="block px-3 text-sm py-2 rounded-lg text-white bg-btnColor font-para md:hover:bg-green md:transition-all mt-3"
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                      >
                        Log Out
                      </button>
                    ) : (
                      <button
                        onClick={() => loginWithRedirect()}
                        className="inline-block px-4 py-2 rounded-lg mr-6 text-white bg-btnColor font-para md:hover:bg-green md:transition-all"
                      >
                        Log In
                      </button>
                    )}
                  </div>
                </ul>
              </>
            ) : null}

            {/* Hamburger menu Icon  */}
            <div className="md:hidden text-btnColor">
              <Hamburger
                direction="right"
                size={25}
                duration={0.2}
                toggled={mobileMenu}
                toggle={setMobileMenu}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center">
            {isAuthenticated && <p className="md:mr-4">Hii, {user.name}</p>}
            {isAuthenticated ? (
              <button
                className="inline-block px-3 text-sm py-2 rounded-lg text-white bg-btnColor font-para md:hover:bg-green md:transition-all"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="inline-block px-4 py-2 rounded-lg text-white bg-btnColor font-para md:hover:bg-green md:transition-all"
              >
                Log In
              </button>
            )}
          </div>

          {/* Mobile Hamburger menu  */}
        </div>
      </div>
    </>
  );
};

export default Header;
