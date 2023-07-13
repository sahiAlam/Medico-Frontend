import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { resetPasswordSchema } from "../../schemas/validationSchema";

const initialValues = {
  password: "",
  passwordConfirmation: "",
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const id = "64aff34a6592b2b7fe0b7eba";
  const code = "MrVnsoIl27uiFu7lIWFRW";
  // Reset password Form
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: resetPasswordSchema,
      onSubmit: async (values) => {
        try {
          const res = await fetch(
            `http://localhost:8080/api/users/resetpassword/${id}/${code}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            }
          );

          const data = await res.json();
          console.log(data);
        } catch (err) {
          if (err) throw new Error();
          console.log("Success");
        }
      },
    });

  return (
    <>
      <div className="bg-gray h-screen">
        <div className="flex items-center gap-8 justify-center h-full p-4 bg-white">
          <div className="w-full md:w-[500px] py-12 shadow-md rounded-3xl border border-gray">
            <div className="text-center">
              <h2 className="font-bold text-2xl md:text-3xl">
                Reset Your Password
              </h2>
              <p className="text-sm text-black mt-2">
                Please Enter Your Details
              </p>
            </div>
            <form
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-4 px-5 md:px-8 my-6"
            >
              <div className="flex flex-col">
                <label htmlFor="password" className="text-darkGray">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  placeholder="Chose Password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="text-danger text-sm">{errors.password}</p>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label htmlFor="passwordConfirmation" className="text-darkGray">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  className="w-full p-2 outline-none rounded-lg border border-gray"
                  placeholder="Confirm Your Password"
                  autoComplete="off"
                  value={values.passwordConfirmation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <p className="text-danger text-sm">
                    {errors.passwordConfirmation}
                  </p>
                ) : null}
              </div>
              <button className="w-full bg-gradient-to-r from-btnColor to-green text-gray p-2 rounded-lg md:hover:bg-gradient-to-r md:hover:from-green md:hover:to-btnColor hover:transition-all">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
