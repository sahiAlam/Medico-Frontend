import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registration from "./pages/register/Registration";

const App = () => {
  // const location = useLocation();
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
