import React from "react";
import { Link } from "react-router-dom";
// import ServiceCard from "../../../components/serviceCard/ServiceCard";

import { AiOutlineArrowRight } from "react-icons/ai";

// images
import dentalImage from "../../../assets/dental.jpg";
import bonesImage from "../../../assets/bones.jpg";
import diagnosisImage from "../../../assets/diagnosis.jpg";
import cardiologyImage from "../../../assets/cardiology.jpeg";
import surgeryImage from "../../../assets/surgery.jpg";
import eyeCareImage from "../../../assets/eyeCare.jpg";

const Working = () => {
  return (
    <>
      <section className="bg-gray py-20">
        <div className="mx-auto container px-2 md:px-32">
          <div className="mx-auto md:w-3/6 text-center">
            <h2 className="font-bold text-3xl text-btnColor">
              Services we provide
            </h2>
            <p className="text-sm md:text-xl my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              fugit non eum expedita illum a.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            <div className="bg-white p-4 rounded-2xl">
              <img
                src={dentalImage}
                alt="dentalImage"
                className="rounded-2xl w-full h-52"
              />
              <h3 className="text-xl font-bold my-3 text-btnColor">
                Dental treatments
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                porro consequatur fuga voluptatem impedit reprehenderit aliquid
                magnam quisquam!
              </p>
              <Link className="text-btnColor font-bold inline-block my-3 md:hover:text-green md:hover:transition-all md:hover:scale-105md:">
                Learn more <AiOutlineArrowRight className="inline-block" />
              </Link>
            </div>
            <div className="bg-white p-4 rounded-2xl">
              <img
                src={bonesImage}
                alt="dentalImage"
                className="rounded-2xl w-full h-52"
              />
              <h3 className="text-xl font-bold my-3 text-btnColor">
                Bones treatments
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                porro consequatur fuga voluptatem impedit reprehenderit aliquid
                magnam quisquam!
              </p>
              <Link className="text-btnColor font-bold inline-block my-3 md:hover:text-green md:hover:transition-all md:hover:scale-105md:">
                Learn more <AiOutlineArrowRight className="inline-block" />
              </Link>
            </div>
            <div className="bg-white p-4 rounded-2xl">
              <img
                src={diagnosisImage}
                alt="dentalImage"
                className="rounded-2xl w-full h-52"
              />
              <h3 className="text-xl font-bold my-3 text-btnColor">
                Diagnosis
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                porro consequatur fuga voluptatem impedit reprehenderit aliquid
                magnam quisquam!
              </p>
              <Link className="text-btnColor font-bold inline-block my-3 md:hover:text-green md:hover:transition-all md:hover:scale-105md:">
                Learn more <AiOutlineArrowRight className="inline-block" />
              </Link>
            </div>
            <div className="bg-white p-4 rounded-2xl">
              <img
                src={cardiologyImage}
                alt="dentalImage"
                className="rounded-2xl w-full h-52"
              />
              <h3 className="text-xl font-bold my-3 text-btnColor">
                Cardiology
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                porro consequatur fuga voluptatem impedit reprehenderit aliquid
                magnam quisquam!
              </p>
              <Link className="text-btnColor font-bold inline-block my-3 md:hover:text-green md:hover:transition-all md:hover:scale-105md:">
                Learn more <AiOutlineArrowRight className="inline-block" />
              </Link>
            </div>
            <div className="bg-white p-4 rounded-2xl">
              <img
                src={surgeryImage}
                alt="dentalImage"
                className="rounded-2xl w-full h-52"
              />
              <h3 className="text-xl font-bold my-3 text-btnColor">Surgery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                porro consequatur fuga voluptatem impedit reprehenderit aliquid
                magnam quisquam!
              </p>
              <Link className="text-btnColor font-bold inline-block my-3 md:hover:text-green md:hover:transition-all md:hover:scale-105md:">
                Learn more <AiOutlineArrowRight className="inline-block" />
              </Link>
            </div>
            <div className="bg-white p-4 rounded-2xl">
              <img
                src={eyeCareImage}
                alt="dentalImage"
                className="rounded-2xl w-full h-52"
              />
              <h3 className="text-xl font-bold my-3 text-btnColor">Eye Care</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                porro consequatur fuga voluptatem impedit reprehenderit aliquid
                magnam quisquam!
              </p>
              <Link className="text-btnColor font-bold inline-block my-3 md:hover:text-green md:hover:transition-all md:hover:scale-105md:">
                Learn more <AiOutlineArrowRight className="inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Working;
