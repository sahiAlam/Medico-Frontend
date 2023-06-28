import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div>
        <Link to={"/"}>
          <h2 className="text-xl md:text-4xl font-bold text-white">
            <span className="text-btnColor">Health</span>
            <span className="text-green">Fit</span>
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Logo;
