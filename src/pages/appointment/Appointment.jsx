import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Appointment = () => {
  const navigate = useNavigate();

  const callAppointmentPage = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/users/me", {
        method: "GET",
        headers: {
          // Authorization: `Bearer ${localStorage.getItem('token')}`
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!data.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
      // navigate("/user/login");
    }

    if (!localStorage.getItem("accessToken")) {
      navigate("/user/login");
    }
  };

  useEffect(() => {
    callAppointmentPage();
  }, []);

  return <div>Appointment</div>;
};

export default Appointment;
