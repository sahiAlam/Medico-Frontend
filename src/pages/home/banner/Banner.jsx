import React from "react";
import banner from "../../../assets/banner.png";
import Header from "../../../components/header/Header";

const Banner = () => {
  return (
    <div className="bg-gray dark:bg-black h-screen">
      <Header />
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-center flex-col md:flex-row gap-5">
        <div className="capitalize">
          <h1 className="dark:text-gray text-3xl md:text-4xl xl:text-6xl mt-3 md:mt-14 font-bold">
            Medical Appointment <span className="text-btnColor">Booking</span>{" "}
            Made Easy. <span className="text-green">Book</span>{" "}
            <span className="text-green"> Appointment</span> Online
          </h1>
          <p className="dark:text-gray text-md md:text-lg mt-3">
            Confirm Your Booking Instantly. No More Waiting On Hold Or Playing
            Phone Tag With Busy Receptionists. your personal information and
            medical history are kept secure and confidential.
          </p>
          <button className="mt-3 md:mt-5 text-white bg-btnColor px-5 py-2 md:text-lg rounded-3xl hover:scale-105 transition-all">
            Appointment
          </button>
        </div>
        <div>
          <img src={banner} className="w-64 md:w-auto md:mt-8" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
