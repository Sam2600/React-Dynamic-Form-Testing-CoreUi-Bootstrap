/* eslint-disable no-unused-vars */
import React from "react";
import { nextStep, prevStep } from "../redux/features/step/stepSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addcounterPartyInformation } from "../redux/features/contract/contractSlice";

export const CounterPartyInformation = () => {
  //
  const dispatch = useDispatch();

  // And Server Fetching data will be stored in serverSideFetches
  const { counterPartyInformation, serverSideFetches } = useSelector(
    (state) => state.contract
  );

  // Destructuring for the form states
  const {
    counter_party,
    signer,
    signer_position,
    email,
    contract_number,
    contract_person_position,
    contract_person,
    phone,
    address,
  } = counterPartyInformation;

  // Destructuring the states to loop the each select box
  const { counter_parties } = serverSideFetches;

  // This is for flag checking if 1 => "A", 2 => "B", etc..
  const returnType = (ct) => {
    switch (ct) {
      case 1:
        return "Type A";

      case 2:
        return "Type B";

      case 3:
        return "Type C";

      default:
        return "Type D";
    }
  };

  // to render the selection options
  const counterParties = counter_parties?.length ? (
    counter_parties.map((ct) => {
      return (
        <option key={ct} value={ct}>
          {returnType(ct)}
        </option>
      );
    })
  ) : (
    <></>
  );

  // UseForm hook
  const { register, formState, control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      counter_party: counter_party,
      signer: signer,
      signer_position: signer_position,
      email: email,
      contract_number: contract_number,
      contract_person_position: contract_person_position,
      contract_person: contract_person,
      phone: phone,
      address: address,
    },
  });

  // Useful Form states
  const {
    errors,
    isSubmitted,
    submitCount,
    isSubmitting,
    isSubmitSuccessful,
    isValid,
  } = formState;

  // handle onSubmit
  const onSubmit = (data) => {
    dispatch(addcounterPartyInformation(data));
    dispatch(nextStep());
  };

  return (
    <>
      {/** Title */}
      <div
        style={{ height: "38px" }}
        className="d-flex align-items-center mb-4"
      >
        <h5 className="fw-semibold text-black">CounterParty Information</h5>
      </div>
      {/** Title */}

      {/** Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column ">
          {/** */}
          <div className="d-flex flex-row justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="counter_party" className="form-label fw-semibold">
                Counterparty <span className="text-danger">*</span>
              </label>
              <select
                id="counter_party"
                className="form-select height43"
                aria-label="Default select example"
                disabled={counter_parties.length ? false : true}
                {...register("counter_party", {
                  required: {
                    value: counter_parties.length ? true : false,
                    message: "Conunter party is required",
                  },
                })}
              >
                <option>Select Counter parties</option>
                {counterParties}
              </select>
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="signer" className="form-label fw-semibold">
                Signer (On behave of Counterparty)
              </label>
              <input
                type="text"
                className="form-control height43"
                id="signer"
                placeholder="Enter signer"
                {...register("signer")}
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label
                htmlFor="signer_position"
                className="form-label fw-semibold"
              >
                Signer Position
              </label>
              <input
                type="text"
                className="form-control height43"
                id="signer_position"
                placeholder="Enter signer position"
                {...register("signer_position")}
              />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="text"
                className="form-control height43"
                id="email"
                placeholder="Enter email address"
                {...register("email")}
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="end_date" className="form-label fw-semibold">
                Contract Person Phone
              </label>
              <input
                type="text"
                className="form-control height43"
                id="contrat_person"
                placeholder="Enter phone number"
                {...register("email")}
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label
                htmlFor="contract_person_position"
                className="form-label fw-semibold"
              >
                Position of Contract Person
              </label>
              <input
                type="text"
                className="form-control height43 w-100"
                id="contract_person_position"
                placeholder="Enter position"
                {...register("contract_person_position")}
              />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-column justify-content-between">
              <div
                style={{ height: "74px", marginBottom: "16px" }}
                className="gap-1 width300"
              >
                <label
                  htmlFor="contract_person"
                  className="form-label fw-semibold"
                >
                  Contract Person
                </label>
                <input
                  type="text"
                  className="form-control height43 w-100"
                  id="contract_person"
                  placeholder="Enter contract person name"
                  {...register("contract_person")}
                />
              </div>
              <div
                style={{ height: "74px", marginBottom: "16px" }}
                className="gap-1 width300"
              >
                <label htmlFor="phone" className="form-label fw-semibold">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control height43 w-100"
                  id="phone"
                  placeholder="Enter phone numnber"
                  {...register("phone")}
                />
              </div>
            </div>

            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width677"
            >
              <label htmlFor="address" className="form-label fw-semibold">
                Address
              </label>
              <input
                type="text"
                className="form-control height133 w-100"
                id="address"
                placeholder="Enter address"
                {...register("address")}
              />
            </div>
          </div>
        </div>
        {/** Button */}
        <div
          style={{ marginTop: "40px" }}
          className="d-flex gap-3  flex-row align-items-end justify-content-end"
        >
          <button
            onClick={() => dispatch(prevStep())}
            className="prev-button fw-semibold"
          >
            Previous
          </button>

          <button type="submit" className="button text-white fw-semibold">
            Save & Next
          </button>
        </div>
        {/** Button */}
      </form>
      {/** Form */}
    </>
  );
};
