import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "soo Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});
