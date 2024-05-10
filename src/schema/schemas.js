import * as Yup from "yup";
export const signupSchema = Yup.object({
  email: Yup.string().required("Email is Required.").email("Invalid email."),
  password: Yup.string()
    .required("Password is Required.")
    .min(6, "Password should be atleast than 6 char"),
  cPassword: Yup.string()
    .required("Confirm pass is Required.")
    .min(6, "Confirm Password should be atleast than 6 char")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
export const loginSchema = Yup.object({
  email: Yup.string().required("Email is Required.").email("Invalid email."),
  password: Yup.string()
    .required("Password is Required.")
    .min(6, "Password should be atleast than 6 char"),
});
