import React from "react";
import banner from "../../../assets/banner.png";
import { AiFillPlayCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="bg-gray">
      <div className="container mx-auto px-2 md:px-10 flex items-center justify-center flex-col md:flex-row gap-5">
        <div className="capitalize">
          <h1 className="text-3xl md:text-4xl xl:text-6xl mt-5 md:mt-14 font-bold">
            Providing quality <span className="text-btnColor">healthcare</span>{" "}
            for a <span className="text-green">bigger</span> and{" "}
            <span className="text-green">healthy</span> future
          </h1>
          <p className="text-md md:text-lg mt-5">
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionals, cutting-edge technology, and compassionate
            approach make us a leader in the healthcare industry.
          </p>

          <div className="flex gap-3 md:gap-6 my-5 md:my-12">
            <div>
              <button className="text-white bg-btnColor px-5 py-2 md:text-lg rounded-3xl hover:scale-105 transition-all">
                Appointments
              </button>
            </div>
            <div>
              <button className="text-white bg-green px-8 py-2 md:text-lg rounded-3xl hover:scale-105 transition-all">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={banner} className="w-64 md:w-auto md:mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
