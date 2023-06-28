import React from "react";
import contactBanner from "../../../assets/contact-banner.jpg";

const bannerContact = () => {
  return (
    <div className="w-full lg:h-screen">
      <img
        src={contactBanner}
        alt="bannerContactImg"
        className="object-cover lg:w-full lg:h-full"
      />
    </div>
  );
};

export default bannerContact;
