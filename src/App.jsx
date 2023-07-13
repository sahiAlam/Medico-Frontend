import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/register/SignUp";
import Verify from "./pages/verify/Verify";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Appointment from "./pages/appointment/Appointment";

const App = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/verify" element={<Verify />} />
          <Route path="/user/forgotPassword" element={<ForgotPassword />} />
          <Route path="/user/resetPassword" element={<ResetPassword />} />
          <Route path="/user/patient/appointment" element={<Appointment />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
