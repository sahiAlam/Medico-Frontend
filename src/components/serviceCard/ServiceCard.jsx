import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ serviceData }) => {
  console.log(serviceData);
  return (
    <>
      <div className="bg-white p-4 rounded-2xl">
        <img
          src={serviceData.image}
          alt="dentalImage"
          className="rounded-2xl w-full h-52"
        />
        <h3 className="text-xl font-bold my-3 text-btnColor">
          {serviceData.title}
        </h3>
        <p>{serviceData.text}</p>
        <Link className="text-btnColor font-bold inline-block my-3 md:hover:text-green md:hover:transition-all md:hover:scale-105">
          {`${serviceData.link} `}
          <AiOutlineArrowRight className="inline-block" />
        </Link>
      </div>
    </>
  );
};

export default ServiceCard;
