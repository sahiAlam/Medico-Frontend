import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/register/SignUp";

const App = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
