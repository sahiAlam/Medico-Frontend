import React from "react";
import serviceBanner from "../../../assets/contact-banner.jpg";

const ServicesBanner = () => {
  return (
    <div className="w-full h-auto relative ">
      <img
        src={serviceBanner}
        alt="bannerContactImg"
        className="object-cover w-full h-screen bg-opacity-90"
      />

      <div className=" top-[50%] translate-y-[-50%] absolute left-[50%] translate-x-[-50%] flex flex-col md:flex-row gap-5 justify-between  container px-2 lg:px-32">
        <div className="md:mt-20">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Meet the Best <br /> Hospital
          </h1>
          <p className="text-white mt-2 text-lg md:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam.
          </p>
          <button className="text-white bg-btnColor mt-6 border border-btnColor px-3 md:px-6 py-2.5 rounded-full text-md md:text-lg md:hover:scale-105 hover:transition-all">
            Get Quote Now
          </button>
          <button className="text-white mt-6 border border-btnColor px-3 md:px-6 py-2.5 rounded-full text-md md:text-lg ml-2 md:ml-6 md:hover:scale-105 hover:transition-all">
            Learn More
          </button>
        </div>
        <div className="bg-white p-5 md:py-10 md:px-8 rounded-xl lg:w-2/5 md:w-3/5">
          <div className="flex flex-col">
            <h3 className="text-black font-bold text-2xl ">Book Appointment</h3>
            <input
              type="name"
              className="mt-4 border border-gray p-2 rounded-xl outline-none"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="mt-4 border border-gray p-2 rounded-xl outline-none"
              placeholder="Email Address"
            />
            <input
              type="number"
              className="mt-4 border border-gray p-2 rounded-xl outline-none"
              placeholder="Enter Phone Number"
            />

            <select
              name=""
              id=""
              className="mt-4 border border-gray p-2 rounded-xl outline-none"
            >
              <option value="" className="text-gray">
                Please Select
              </option>
            </select>

            <input
              type="time"
              className="mt-4 border border-gray p-2 rounded-xl outline-none"
              placeholder="Enter Time"
            />

            <button className="mt-8 mb-3 bg-btnColor p-2.5 rounded-full text-white font-bold md:hover:scale-105 hover:transition-all hover:bg-green">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;

{
  /* <input
type="date"
className="mt-4 border border-gray p-2 rounded-xl outline-none"
placeholder="Enter Date"
/>
<input
type="time"
className="mt-4 border border-gray p-2 rounded-xl outline-none"
placeholder="Enter Time"
/> */
}
