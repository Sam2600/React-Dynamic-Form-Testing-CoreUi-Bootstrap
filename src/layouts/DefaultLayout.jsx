/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FormContainer } from "../components/FormContainer";
import { Stepper } from "../components/Stepper";
import { FormTitle } from "../components/FormTitle";

export const DefaultLayout = () => {
  return (
    <FormContainer>
      <FormTitle title={"Add Contract"} />
      <Stepper />
    </FormContainer>
  );
};
