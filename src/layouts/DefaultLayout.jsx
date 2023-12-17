/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useStepper } from "../components/useStepper";
import { useSelector } from "react-redux";

export const DefaultLayout = () => {
  //
  const step = useSelector((state) => state.step.step);

  // Custom stepper hook
  const totalRegisterSteps = useStepper(step);

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
