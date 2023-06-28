import React, { useState } from "react";

const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContactFormData({ ...contactFormData, [name]: value });
  };

  // Submitting form
  const handleSubmitContactForm = (e) => {
    if (
      contactFormData.firstName === "" ||
      contactFormData.lastName === "" ||
      contactFormData.email === "" ||
      contactFormData.phone === "" ||
      contactFormData.message === ""
    ) {
      alert("Please fill the Data...");
    } else {
      console.log(contactFormData);

      setContactFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <>
      <section className="bg-gray">
        <div className="container mx-auto px-2 md:px-10 py-14">
          <div className="text-center ">
            <h4 className="my-3 font-bold text-lg text-btnColor">
              Get In Touch
            </h4>
            <h2 className="my-3 font-bold text-3xl md:text-4xl">Contact Us</h2>
            <p className="text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              deserunt?
            </p>
          </div>

          <div className="py-12 lg:px-44 w-full">
            <div className="md:flex justify-between w-full gap-5">
              <div className="my-3 w-full">
                <label htmlFor="firstName">First Name : </label>
                <input
                  className="w-full p-2.5 rounded-xl border my-1 outline-none border-btnColor"
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  name="firstName"
                  onChange={handleChangeInput}
                  value={contactFormData.firstName}
                />
              </div>

              <div className="my-3 w-full">
                <label htmlFor="lastName">Last Name : </label>
                <input
                  className="w-full p-2.5 rounded-xl border my-1 outline-none border-btnColor"
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={handleChangeInput}
                  value={contactFormData.lastName}
                />
              </div>
            </div>

            <div className="md:flex justify-between gap-5">
              <div className="my-3 w-full">
                <label htmlFor="email">Email : </label>
                <input
                  className="w-full p-2.5 rounded-xl border my-1 outline-none border-btnColor"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleChangeInput}
                  value={contactFormData.email}
                />
              </div>

              <div className="my-3 w-full">
                <label htmlFor="phone">Phone Number : </label>
                <input
                  className="w-full p-2.5 rounded-xl border my-1 outline-none border-btnColor"
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                  name="phone"
                  onChange={handleChangeInput}
                  value={contactFormData.phone}
                />
              </div>
            </div>

            <div className="my-3 w-full">
              <label htmlFor="message">Message : </label>
              <textarea
                className="w-full p-2.5 rounded-xl border my-1 outline-none border-btnColor resize-none"
                name="message"
                id="message"
                rows={8}
                placeholder="Type your message..."
                onChange={handleChangeInput}
                value={contactFormData.message}
              ></textarea>
            </div>

            <div>
              <button
                className="bg-btnColor w-2/5 md:w-36 hover:bg-green hover:scale-105 hover:transition-all block mx-auto border-0 p-2 text-white text-xl rounded-xl mt-2"
                onClick={handleSubmitContactForm}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
