/* eslint-disable no-unused-vars */
import React from "react";

const steps = [
  "General Information",
  "Counterparty Information",
  "Life Cycle",
  "Payment Information",
];

export const useStepper = (step) => {
  //
  const totalRegisterSteps = steps.map((stp, index) => {
    return (
      <div key={stp} className="steppers ">
        <div className="stepper-child">
          {index === step && (
            <>
              <i className="bi fs-5 text-current bi-dash-circle"></i>
              <span className="stepper-child-bar-black"></span>
            </>
          )}

          {index < step && (
            <>
              <i className="bi fs-5 text-finish fw-semibold bi-check-circle"></i>
              <span className="stepper-child-bar"></span>
            </>
          )}

          {index > step && (
            <>
              <i className="bi fs-5 fw-semibold bi-circle"></i>
              <span className="stepper-child-bar-gray"></span>
            </>
          )}
        </div>

        {index === step && <div className="fw-semibold text-bold">{stp}</div>}

        {index < step && <div className="fw-semibold text-finish">{stp}</div>}

        {index > step && <div className="fw-semibold text-dark">{stp}</div>}
      </div>
    );
  });

  return totalRegisterSteps;
};
