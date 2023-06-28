import React from "react";
import Banner from "./banner/Banner";
import Services from "./services/Services";
import SearchArea from "./search/SearchArea";

const Home = () => {
  return (
    <>
      <Banner />
      <SearchArea />
      <Services />
    </>
  );
};

export default Home;
