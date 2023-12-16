/* eslint-disable no-unused-vars */
import React from "react";
import FilledSvg from "../../public/assets/Filled.svg";
import { Outlet } from "react-router-dom";

const steps = [
  "General Information",
  "Counterparty Information",
  "Life Cycle",
  "Payment Information",
];

export const DefaultLayout = () => {
  //
  const totalRegisterSteps = steps.map((stp) => {
    return (
      <div key={stp} className="steppers ">
        <div className="stepper-child">
          <img src={FilledSvg} alt="My SVG" />
          <span className="stepper-child-bar"></span>
        </div>
        <div className="text-black">{stp}</div>
      </div>
    );
  });

  return (
    <div className="container-whp d-flex flex-column mx-auto">
      {/** Title */}
      <div style={{ height: "45px" }} className="d-flex align-items-center">
        <h4 className="fw-bold text-black">Add Contract</h4>
      </div>
      {/** Title */}

      {/** Stepper */}
      <div className="d-flex flex-row my-4">{totalRegisterSteps}</div>
      {/** Stepper */}

      {/** General Form Container */}
      <div className="d-flex bg-white shadow-lg flex-column general-form-container">
        <Outlet />
      </div>
      {/** General Form Container */}
    </div>
  );
};
