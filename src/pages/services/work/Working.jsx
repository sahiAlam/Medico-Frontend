import React from "react";
import ServiceCard from "../../../components/serviceCard/ServiceCard";

// images
import dentalImage from "../../../assets/dental.jpg";
import bonesImage from "../../../assets/bones.jpg";
import diagnosisImage from "../../../assets/diagnosis.jpg";
import cardiologyImage from "../../../assets/cardiology.jpeg";
import surgeryImage from "../../../assets/surgery.jpg";
import eyeCareImage from "../../../assets/eyeCare.jpg";

// Data
const serviceData = [
  {
    id: 1,
    title: `Dental treatments`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adporro consequatur fuga voluptatem impedit reprehenderit aliquid magnam quisquam!",
    link: "Learn more",
    image: dentalImage,
  },
  {
    id: 2,
    title: `Bones treatments`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adporro consequatur fuga voluptatem impedit reprehenderit aliquid magnam quisquam!",
    link: "Learn more",
    image: bonesImage,
  },
  {
    id: 3,
    title: `Diagnosis`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adporro consequatur fuga voluptatem impedit reprehenderit aliquid magnam quisquam!",
    link: "Learn more",
    image: diagnosisImage,
  },
  {
    id: 4,
    title: `Cardiology`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adporro consequatur fuga voluptatem impedit reprehenderit aliquid magnam quisquam!",
    link: "Learn more",
    image: cardiologyImage,
  },
  {
    id: 5,
    title: `Surgery`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adporro consequatur fuga voluptatem impedit reprehenderit aliquid magnam quisquam!",
    link: "Learn more",
    image: surgeryImage,
  },
  {
    id: 6,
    title: `Eye Care`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adporro consequatur fuga voluptatem impedit reprehenderit aliquid magnam quisquam!",
    link: "Learn more",
    image: eyeCareImage,
  },
];

const Working = () => {
  return (
    <>
      <section className="bg-gray py-20">
        <div className="mx-auto container px-2 md:px-32">
          <div className="mx-auto md:w-3/5 text-center">
            <h2 className="font-bold text-3xl text-btnColor">
              Services we provide
            </h2>
            <p className="text-sm md:text-xl my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              fugit non eum expedita illum a.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {serviceData.map((item) => (
              <ServiceCard key={item.id} serviceData={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Working;
