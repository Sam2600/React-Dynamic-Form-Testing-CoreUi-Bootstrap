/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/formContainer.css";

export const FormContainer = ({ children }) => {
  return (
    <div className="container-whp">
      {children}
      {/** General Form Container */}
      <div className="d-flex shadow-lg flex-column general-form-container">
        <Outlet />
      </div>
      {/** General Form Container */}
    </div>
  );
};
