import React, { useState, useEffect } from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schema/schemas";
import auth from "../hooks/auth";

const initialValues = {
  email: "",
  password: "",
};
// Login Component
function Login() {
  const { login, loading } = auth();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        // console.log(values);
        login(values, "login");
      },
    });
  // JSX structure for rendering Login component
  return (
    <div className="account__wrapper">
      <div className="account">
        {/* Application logo */}
        <Link to="/" aria-label="Home">
          <Logo />
        </Link>

        {/* Login form */}
        <div className="account__form">
          <h1 className="text-5xl">Login</h1>
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

            {/* Submit button */}
            <button className="btn btn__account" type="submit">
              {loading ? "Trying to login..." : "Login to your account"}
            </button>
          </form>

          {/* Footer section with a link to sign up */}
          <div className="account__footer">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the Login component
export default Login;
