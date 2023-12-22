/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import MYT from "../../public/assets/MYT.png";
import LoginPhoto from "../../public/assets/Group 17.png";
import "../styles/login.css";

export const Login = () => {
  // UseForm hook
  const { register, formState, handleSubmit, reset } = useForm();

  // Useful Form states
  const { errors, submitCount, isSubmitting, isSubmitSuccessful } = formState;

  // handle submit
  const onSubmit = (data) => {
    console.log(data);
  };

  // Error messages
  let errMessages;
  if (errors.user_name || errors.password) {
    errMessages = (
      <div className="bg-danger rounded px-3 py-2 d-flex flex-column">
        <p className="text-white my-1">{errors?.user_name?.message}</p>
        <p className="text-white my-1">{errors?.password?.message}</p>
      </div>
    );
  }

  // while submitting, display loading
  isSubmitting && <div>Loading...</div>;

  // after submit success, reset the form
  isSubmitSuccessful && reset();

  return (
    <div
      style={{ marginTop: "70px" }}
      className=" container d-flex justify-content-between height580 width1200 align-items-center p-0"
    >
      {/** Login Form */}
      <div className=" d-flex flex-column col-xl-4 col-lg-5 col-md-6 width464 height580">
        {/** Form title */}
        <div className="d-flex flex-column login-form-title">
          <div className="MYT-image">
            <img src={MYT} alt="" />
          </div>
          <p className="mt-3 mx-auto">Contract Management System</p>
        </div>
        {/** Form title */}

        { }

        {/** Form Container */}
        <div style={{ marginTop: "27px" }} className=" p32 shadow-lg">
          {/** Form Header */}
          <div className="login-form-header">
            <h5 className="fw-semibold">Sign in to account</h5>
            <p>Enter your username & password to login</p>
          </div>
          {/** Form Header */}

          {/** Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column gap-3 overflow-hidden">
              <div className="login-input-container">
                <label htmlFor="user_name" className="form-label">
                  Username
                </label>
                <input
                  {...register("user_name", {
                    required: {
                      value: true,
                      message: "Username is required",
                    },
                  })}
                  style={{ height: "46px" }}
                  type="text"
                  className="form-control"
                  id="user_name"
                  placeholder="Enter your username"
                />
              </div>
              <div className="login-input-container">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  })}
                  style={{ height: "46px" }}
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-end">
                <NavLink
                  to="/forgot-password"
                  style={{ textDecoration: "none", color: "#235E6A" }}
                >
                  Forgot Password?
                </NavLink>
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn text-white login-button"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/** Form */}
        </div>
        {/** Form Container */}
      </div>
      {/** Login Form */}

      {/** LoginForm Photo */}
      <div className="col-lg-6 col-md-6 col-sm-12 height580">
        <img className="login-photo" src={LoginPhoto} alt="LoginPhoto" />
      </div>
      {/** LoginForm Photo */}
    </div>
  );
};
