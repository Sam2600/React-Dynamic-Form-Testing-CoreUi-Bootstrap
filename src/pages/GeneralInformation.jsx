/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../redux/features/step/stepSlice";
import { axiosClient } from "../axios/axiosClient";
import {
  addGeneralInformation,
  fetchGeneralForContracts,
  deleteContract,
  addContract,
} from "../redux/features/contract/contractSlice";

export const GeneralInformation = () => {
  //
  const dispatch = useDispatch();

  // This is create AsyncThunk's fetching general state;
  // Even though we can do it with normal useEffect, I am testing with rtk

  //Do server side fetching with axios For contracts, contract_types, relevant department
  // useEffect(() => {
  //   dispatch(fetchGeneralForContracts())
  // }, [dispatch]);

  // And Server Fetching data will be stored in serverSideFetches
  const { generalInformation, serverSideFetches } = useSelector(
    (state) => state.contract
  );

  // Destructuring for the form states
  const {
    contract_title,
    contract_type,
    relevant_department,
    start_date,
    end_date,
    related_term,
    contract_number,
    signer_obh_myt,
    signer_position,
  } = generalInformation;

  // Destructuring the states to loop the each select box
  const { contract_types, relevant_departments, signer_positions, contracts } =
    serverSideFetches;

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
  const contractTypes = contract_types?.length ? (
    contract_types.map((ct) => {
      return (
        <option key={ct} value={ct}>
          {returnType(ct)}
        </option>
      );
    })
  ) : (
    <></>
  );

  // to render the selection options
  const relevantDepartments = relevant_departments?.length ? (
    relevant_departments.map((rd) => {
      return (
        <option key={rd} value={rd}>
          {returnType(rd)}
        </option>
      );
    })
  ) : (
    <></>
  );

  // to render the selection options
  const signerPositions = signer_positions?.length ? (
    signer_positions.map((sp) => {
      return (
        <option key={sp} value={sp}>
          {returnType(sp)}
        </option>
      );
    })
  ) : (
    <></>
  );

  // UseForm hook
  const { register, formState, control, handleSubmit, watch, reset } = useForm({
    //
    defaultValues: {
      contract_title: contract_title,
      contract_type: contract_type,
      relevant_department: relevant_department,
      start_date: start_date,
      end_date: end_date,
      related_term: related_term,
      contract_number: contract_number,
      signer_obh_myt: signer_obh_myt,
      signer_position: signer_position,
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
    dispatch(addGeneralInformation(data));
    dispatch(nextStep());
  };

  // For model box
  const [err, setErr] = useState("");

  const contract_type_ref = useRef("");

  // add contract type for server-side
  const handleContractTypeAdd = (e) => {
    //
    e.preventDefault();

    const value = contract_type_ref.current?.value;

    if (!value) {
      setErr("Contract Type name is required");
    } else {
      dispatch(addContract(value));
      console.log(value);
      setErr("");
      contract_type_ref.current.value = "";
    }
  };

  // delete contract type for server-side
  const handleContractDelete = (id) => {
    dispatch(deleteContract(id));
  };

  // model

  return (
    <>
      {/** Title */}
      <div
        style={{ height: "38px" }}
        className="d-flex align-items-center mb-4"
      >
        <h5 className="fw-semibold text-black">General Information</h5>
      </div>
      {/** Title */}

      {/** Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column ">
          <div className="d-flex flex-row justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 mb-3 width300"
            >
              <label
                htmlFor="contract_title"
                className="form-label fw-semibold"
              >
                Contract Title <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control height43 w-100"
                id="contract_title"
                placeholder="Enter Contract Title"
                {...register("contract_title", {
                  required: {
                    value: true,
                    message: "Contract title is required",
                  },
                })}
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="contract_type" className="form-label fw-semibold">
                Contract Type <span className="text-danger">*</span>
              </label>
              <div className="d-flex flex-row gap12">
                <select
                  id="contract_type"
                  className="form-select height43"
                  aria-label="Default select example"
                  //making auto disable if length is zero
                  disabled={!contract_type?.length ? true : false}
                  {...register("contract_type", {
                    required: {
                      // If no department to choose, we make it reqired false
                      value: !contract_type?.length ? false : true,
                      message: "Contract type is required",
                    },
                  })}
                >
                  <option>Select Contract Type</option>
                  {contractTypes}
                </select>

                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  type="button"
                  className="addContract"
                  style={{
                    border: "2px solid #ddd",
                    borderRadius: "8px",
                    borderColor: "#235E6A",
                    width: "40px",
                    height: "40px",
                    paddingBottom: "4px",
                    fontSize: "21px",
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label
                htmlFor="relevant_department"
                className="form-label fw-semibold"
              >
                Relevant Department <span className="text-danger">*</span>
              </label>
              <select
                id="relevant_department"
                className="form-select height43"
                aria-label="Default select example"
                //making auto disable if length is zero
                disabled={!relevant_departments?.length ? true : false}
                {...register("relevant_department", {
                  required: {
                    // If no department to choose, we make it reqired false
                    value: !relevant_departments.length ? false : true,
                    message: "Contract title is required",
                  },
                })}
              >
                <option>Select relevant department</option>
                {relevantDepartments}
              </select>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="start_date" className="form-label fw-semibold">
                Start Date <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className="form-control height43"
                id="start_date"
                {...register("start_date", {
                  required: {
                    value: true,
                    message: "Start date is required",
                  },
                })}
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="end_date" className="form-label fw-semibold">
                End Date <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className="form-control height43"
                id="end_date"
                {...register("end_date", {
                  required: {
                    value: true,
                    message: "End date is required",
                  },
                })}
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label
                htmlFor="contract_number"
                className="form-label fw-semibold"
              >
                Contract Number
              </label>
              <input
                type="text"
                className="form-control height43 w-100"
                id="contract_number"
                placeholder="MYT-FNF-0001-LA-2023"
                {...register("contract_number")}
              />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="related_term" className="form-label fw-semibold">
                Related Term
              </label>
              <input
                type="text"
                className="form-control height43 w-100"
                id="related_term"
                placeholder="Enter related term"
                {...register("related_term")}
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label
                htmlFor="signer_obh_myt"
                className="form-label fw-semibold"
              >
                Signer (On behave of MYT)
              </label>
              <input
                type="text"
                className="form-control height43 w-100"
                id="signer_obh_myt"
                placeholder="Enter signer"
                {...register("signer_obh_myt")}
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
              <select
                id="signer_position"
                className="form-select height43"
                aria-label="Default select example"
                //making auto disable if length is zero
                disabled={!signer_positions?.length ? true : false}
                {...register("signer_position")}
              >
                <option>Select Signer Position</option>
                {signerPositions}
              </select>

              {/* <input
                type="text"
                className="form-control height43 w-100"
                id="signer_position"
                placeholder="Enter signer position"
                {...register("signer_position")}
              /> */}
            </div>
          </div>
        </div>

        {/** Button */}
        <div
          style={{ marginTop: "40px" }}
          className="d-flex flex-row align-items-end justify-content-end"
        >
          <button type="submit" className="button text-white fw-semibold">
            Save & Next
          </button>
        </div>
        {/** Button */}
      </form>
      {/** Form */}

      {/** Hidden model */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered width700">
          <div className="modal-content">
            {/** Model header */}
            <div className="modal-header model-header">
              <h1
                className="modal-title text-white fw-semibold fs-5"
                id="exampleModalLabel"
              >
                Add Contract Type
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/** Model header */}

            {/** Model body */}
            <div className="modal-body d-flex flex-column gap-4">
              {/** Add Contract Type */}
              <div className="d-flex flex-row gap-4">
                <div
                  style={{ height: "74px" }}
                  // style={err ? { height: "94px" } : { height: "74px" }}
                  className="gap-1 width300"
                >
                  <label
                    htmlFor="contract_type_name"
                    className="form-label fw-semibold"
                  >
                    Contract type name <span className="text-danger"> * </span>
                  </label>

                  <input
                    ref={contract_type_ref}
                    type="text"
                    className="form-control height43 w-100"
                    id="contract_type_name"
                    placeholder="Enter contract type name"
                  />
                  {/* <p className="text-danger mx-2 my-1">{err && err}</p> */}
                </div>
                <div className="d-flex flex-row align-items-end justify-content-end">
                  <button
                    onClick={handleContractTypeAdd}
                    type="button"
                    className="model-button text-white fw-semibold"
                  >
                    Add
                  </button>
                </div>
              </div>
              {/** Add Contract Type */}

              {/** Contract table */}
              {contracts.length ? (
                <div className="shadow-lg table-container">
                  <table>
                    <thead className="t-header">
                      <tr>
                        <th>No</th>
                        <th>Payment Time</th>
                        <th>Payment Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody className="t-body">
                      {contracts.map((ct) => {
                        return (
                          <tr key={ct.id}>
                            <td>{ct.id}</td>
                            <td>{ct.payment_term}</td>
                            <td>{ct.payment_date}</td>
                            <td>{ct.amount}</td>
                            <td>
                              <button
                                type="button"
                                onClick={() => handleContractDelete(ct.id)}
                                className="trash-button"
                              >
                                <i className="bi bi-trash fs-5 text-danger"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <></>
              )}

              {/** Contract table */}
            </div>
            {/** Model body */}
          </div>
        </div>
      </div>
      {/** Hidden model */}
    </>
  );
};
