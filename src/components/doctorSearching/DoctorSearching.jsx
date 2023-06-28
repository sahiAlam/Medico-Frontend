import React, { useState } from "react";

const DoctorSearching = () => {
  const [searchFormData, setSearchFormData] = useState({
    name: "",
    speciality: "",
  });

  const handleInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSearchFormData({ ...searchFormData, [name]: value });
  };

  const handleSubmitForm = () => {
    if (searchFormData.name === "" || searchFormData.speciality === "") {
      alert("Please fill the Data...");
    } else {
      console.log(searchFormData);

      setSearchFormData({
        name: "",
        speciality: "",
      });
    }
  };
  return (
    <>
      <div className="container mx-auto px-2 md:px-10">
        <div className=" bg-white p-5 rounded-xl">
          <h2 className="capitalize font-bold text-2xl md:text-3xl mb-3">
            find a doctor
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-3">
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={searchFormData.name}
              onChange={handleInputData}
              className="border md:w-2/5 my-3 p-3 outline-none text-xl border-btnColor rounded-xl"
            />
            <input
              type="text"
              placeholder="Speciality"
              required
              name="speciality"
              value={searchFormData.speciality}
              onChange={handleInputData}
              className="border md:w-2/5 my-3 p-3 outline-none text-xl border-btnColor rounded-xl"
            />
            <button
              className="bg-btnColor text-white w-2/5 md:h-14 md:w-40 rounded-xl md:my-3 text-xl p-3 md:hover:bg-green md:hover:scale-105"
              onClick={handleSubmitForm}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorSearching;
