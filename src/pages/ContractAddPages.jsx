/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { LifeCycle } from "./LifeCycle";
import { useSelector } from "react-redux";
import { GeneralInformation } from "./GeneralInformation";
import { CounterPartyInformation } from "./CounterPartyInformation";
import { PaymentInformation } from "./PaymentInformation";

export const ContractAddPages = () => {
  //
  const step = useSelector((state) => state.step.step);

  let page;
  switch (step) {
    case 0:
      page = <GeneralInformation />;
      break;
    case 1:
      page = <CounterPartyInformation />;
      break;
    case 2:
      page = <LifeCycle />;
      break;
    case 3:
      page = <PaymentInformation />;
      break;
  }

  return <>{page}</>;
};
