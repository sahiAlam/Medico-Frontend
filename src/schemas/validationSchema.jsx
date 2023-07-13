import * as Yup from "yup";

// SignUp User
export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name"),
  lastName: Yup.string().min(2).max(25).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  profession: Yup.string().required("Please chose your profession"),
  password: Yup.string().min(6).max(20).required("Please enter your password"),
  passwordConfirmation: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

// Login User
export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

// Forgot Password
export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});

// Reset Password
export const resetPasswordSchema = Yup.object({
  password: Yup.string().min(6).max(20).required("Please chose your password"),
  passwordConfirmation: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
