import React, { useState, useEffect } from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../schema/schemas";
import auth from "../hooks/auth";
const initialValues = {
  email: "",
  password: "",
  cPassword: "",
};
// Signup Component
function Signup() {
  const { login, loading } = auth();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        // console.log(values);
        login(values, "register");
      },
    });
  // JSX structure for rendering Signup component
  return (
    <div className="account__wrapper">
      <div className="account">
        {/* Application logo */}
        <Link to="/" aria-label="Home">
          <Logo />
        </Link>

        {/* Signup form */}
        <div className="account__form">
          <h1 className="text-5xl">Sign Up</h1>
          <form autoComplete="off" onSubmit={handleSubmit}>
            {/* Email input field */}
            <div>
              <input
                name="email"
                className="input input__account"
                placeholder="Email address"
                type="text"
                autoComplete=""
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* Error message for email validation */}
              {touched.email && errors.email && (
                <label className="input__account__error-label">
                  <p>{errors.email}</p>
                </label>
              )}
            </div>

            {/* Password input field */}
            <div>
              <input
                name="password"
                className="input input__account"
                placeholder="Password"
                type="password"
                autoComplete=""
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* Error message for password validation */}
              {touched.password && errors.password && (
                <label className="input__account__error-label">
                  <p>{errors.password}</p>
                </label>
              )}
            </div>

            {/* Repeat Password input field */}
            <div>
              <input
                name="cPassword"
                className="input input__account"
                placeholder="Repeat Password"
                type="password"
                autoComplete=""
                value={values.cPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* Error message for password confirmation */}
              {touched.cPassword && errors.cPassword && (
                <label className="input__account__error-label">
                  <p>{errors.cPassword}</p>
                </label>
              )}
            </div>

            {/* Submit button */}
            <button className="btn btn__account" type="submit">
              {loading ? "Trying to register..." : "Create an account"}
            </button>
          </form>

          {/* Footer section with a link to login */}
          <div className="account__footer">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the Signup component
export default Signup;
