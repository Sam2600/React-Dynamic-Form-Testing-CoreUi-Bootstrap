/* eslint-disable no-unused-vars */
import React from 'react'
import "../styles/stepper.css";
import { useStepper } from './useStepper';
import { useSelector } from 'react-redux';

export const Stepper = () => {
    //
  const step = useSelector((state) => state.step.step);

   // Custom stepper hook
  const totalRegisterSteps = useStepper(step);

  return (
      <div className="d-flex flex-row mb-4">{totalRegisterSteps}</div>
  )
}
