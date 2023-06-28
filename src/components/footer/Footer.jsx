import React from "react";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-btnColor w-full  py-20 md:py-36">
        <div className="container mx-auto grid gap-10 md:grid-cols-4 lg:grid-cols-6 text-white px-2 md:px-10">
          <div className="text-center md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              Health<span className="text-green">Fit</span>
            </h2>
            <p className="mt-4">
              Copyright &#169; 2023 , Md Sahi | All Rights Reserved
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl my-2">Product</h3>
            <ul>
              <li className="flex flex-col">
                <a href="#" className="mt-2 md:hover:scale-105">
                  Features
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Pricing
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Case Studies
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Reviews
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Updates
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-2xl my-2">Company</h3>
            <ul>
              <li className="flex flex-col">
                <a href="#" className="mt-2 md:hover:scale-105">
                  About
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Contact Us
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Careers
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Culture
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-2xl my-2">Support</h3>
            <ul>
              <li className="flex flex-col">
                <a href="#" className="mt-2 md:hover:scale-105">
                  Getting Started
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Help Center
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Server status
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Report a but
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Chat support
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-2xl my-2">Follow Us</h3>
            <ul>
              <li className="flex flex-col">
                <a href="#" className="mt-2 md:hover:scale-105">
                  Facebook
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Twitter
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  Instagram
                </a>
                <a href="#" className="mt-2 md:hover:scale-105">
                  LinkedIn
                </a>
                <a href="#" className="mt-2 md:hover:scale-105 inline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
