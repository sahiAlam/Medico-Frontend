import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "../../schemas/validationSchema";

const initialValues = {
  email: "",
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  // Forgot password Form
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: forgotPasswordSchema,
      onSubmit: async (values) => {
        try {
          const res = await fetch(
            "http://localhost:8080/api/users/forgotpassword/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );

          const data = await res.json();

          if (data) {
            console.log(data);
            alert(data.message);
            navigate("/user/resetPassword");
          }
        } catch (err) {
          if (err) throw new Error();
          else console.log("success");
        }
      },
    });

  return (
    <>
      <div className="bg-gray h-screen">
        <div className="flex items-center gap-8 justify-center h-full p-4 bg-white">
          <div className=" w-full md:w-[500px] py-12 shadow-md rounded-3xl border border-gray">
            <div className="text-center ">
              <h2 className="font-bold text-2xl md:text-3xl">
                Forgot password
              </h2>
              <p className="text-sm text-black mt-2 px-10">
                If a user with that email is registered you will receive a
                password reset email
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="flex flex-col justify-center gap-4 px-5 md:px-8 my-6"
            >
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  placeholder="Enter Your Email..."
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-danger text-sm">{errors.email}</p>
                ) : null}
              </div>

              <button className="w-full bg-gradient-to-r from-btnColor to-green text-gray p-2 rounded-lg md:hover:bg-gradient-to-r md:hover:from-green md:hover:to-btnColor hover:transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
