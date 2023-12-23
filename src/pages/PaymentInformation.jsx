/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../redux/features/step/stepSlice";
import { useFieldArray, useForm } from "react-hook-form";
import {
  addpaymentInformation,
  removePaymentInformation,
} from "../redux/features/contract/contractSlice";
import { axiosClient } from "../axios/axiosClient";

export const PaymentInformation = () => {
  //
  const dispatch = useDispatch();

  const [rowNum, setRowNum] = useState(0);

  // And Server Fetching data will be stored in serverSideFetches
  const contract = useSelector((state) => state.contract);

  const { paymentInformation, serverSideFetches } = contract;

  // Destructuring for the form states
  // const {
  //   total_contract_amount,
  //   payment_type,
  //   contract_number,
  //   payment_term,
  //   payment_date,
  //   amount,
  //   file,
  // } = paymentInformation[rowNum];

  // Destructuring the states to loop the each select box
  const { payment_types, payment_terms } = serverSideFetches;

  // This is for flag checking if 1 => "A", 2 => "B", etc..
  const returnType = (pt) => {
    switch (pt) {
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
  const paymentTypes = payment_types?.length ? (
    payment_types.map((pt) => {
      return (
        <option key={pt} value={pt}>
          {returnType(pt)}
        </option>
      );
    })
  ) : (
    <></>
  );

  // to render the selection options
  const paymentTerms = payment_terms?.length ? (
    payment_terms.map((pt) => {
      return (
        <option key={pt} value={pt}>
          {returnType(pt)}
        </option>
      );
    })
  ) : (
    <></>
  );

  // UseForm hook
  const { register, formState, control, handleSubmit, watch, reset } = useForm({
    // defaultValues: {
    //   total_contract_amount: total_contract_amount,
    //   payment_type: payment_type,
    //   contract_number: contract_number,
    //   payment_term: payment_term,
    //   payment_date: payment_date,
    //   amount: amount,
    //   file: file,
    // },
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
    //
    setRowNum(rowNum + 1);

    const uploadedFile = data.file.length > 0 ? data.file[0].name : null;

    const formData = { ...data, file: uploadedFile };

    dispatch(addpaymentInformation(formData));

    reset();
  };

  // handle form register complete
  const handleFormRegister = () => {
    // destructuring the state
    const {
      generalInformation,
      counterPartyInformation,
      lifeCycle,
      paymentInformation,
    } = contract;

    // making to give the data for registering
    const serverFormData = {
      generalInformation,
      counterPartyInformation,
      lifeCycle,
      paymentInformation,
    };
    console.log(serverFormData);
    //axiosClient.post("/contracts", serverFormData).then(res => {
    // Do... something. Actually model box only should appear only after success post to server
    //})
  };

  return (
    <>
      {/** Title */}
      <div
        style={{ height: "38px" }}
        className="d-flex align-items-center mb-4"
      >
        <h5 className="fw-semibold text-black">Payment Information</h5>
      </div>
      {/** Title */}

      {/** Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column ">
          <div className="d-flex flex-row justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label
                htmlFor="total_contract_amount"
                className="form-label fw-semibold"
              >
                Total Contract Amount <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control height43 w-100"
                id="total_contract_amount"
                placeholder="Enter total contract amount"
                {...register("total_contract_amount", {
                  required: {
                    value: true,
                    message: "Total contract amount is required",
                  },
                })}
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="payment_type" className="form-label fw-semibold">
                Payment Type <span className="text-danger">*</span>
              </label>
              <div className="d-flex flex-row gap12">
                <select
                  id="payment_type"
                  className="form-select height43"
                  aria-label="Default select example"
                  disabled={payment_types.length ? false : true}
                  {...register("payment_type", {
                    required: {
                      value: payment_types.length ? true : false,
                      message: "Payment type is required",
                    },
                  })}
                >
                  <option>Select Payment Type</option>
                  {paymentTypes}
                </select>
              </div>
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
            <div style={{ height: "74px" }} className="gap-1 width300">
              <label htmlFor="payment_term" className="form-label fw-semibold">
                Payment Term <span className="text-danger">*</span>
              </label>
              <div className="d-flex flex-row gap12">
                <select
                  id="payment_term"
                  className="form-select height43"
                  aria-label="Default select example"
                  disabled={payment_terms.length ? false : true}
                  {...register("payment_term", {
                    required: {
                      value: payment_terms.length ? true : false,
                      message: "Payment term is required",
                    },
                  })}
                >
                  <option defaultValue={0}>Select Payment Term</option>
                  {paymentTerms}
                </select>
              </div>
            </div>
            <div style={{ height: "74px" }} className="gap-1 width300">
              <label htmlFor="payment_date" className="form-label fw-semibold">
                Payment Date <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className="form-control height43"
                id="payment_date"
                {...register("payment_date", {
                  required: {
                    value: true,
                    message: "Payment date is required",
                  },
                })}
              />
            </div>
            <div style={{ height: "74px" }} className="gap-1 width300">
              <label htmlFor="amount" className="form-label fw-semibold">
                Amount <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control height43"
                id="amount"
                placeholder="Enter amount"
                {...register("amount", {
                  required: {
                    value: true,
                    message: "Amount is required",
                  },
                })}
              />
            </div>
          </div>

          <div className=" d-flex flex-column align-items-center gap-3 mt-3">
            <button
              type="submit"
              style={{ fontSize: "17px" }}
              className="addBtn fw-semibold"
            >
              {" "}
              <span
                style={{ marginBottom: "7px", marginRight: "5px" }}
                className="fs-2 p-0"
              >
                +
              </span>{" "}
              Add{" "}
            </button>

            {/** Contract table */}
            <div className="shadow-lg w-100 px-3">
              {paymentInformation.length ? (
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
                    {paymentInformation.map((pi, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{pi.payment_term}</td>
                          <td>{pi.payment_date}</td>
                          <td>{pi.amount}</td>
                          <td>
                            <button
                              type="button"
                              onClick={() =>
                                dispatch(
                                  removePaymentInformation(pi.payment_date)
                                )
                              }
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
              ) : (
                <></>
              )}
            </div>
            {/** Contract table */}
          </div>

          <div
            style={{ height: "80px", marginBottom: "16px" }}
            className="gap-1 width471 mt-4"
          >
            <label htmlFor="file" className="form-label fw-semibold">
              Attachment
            </label>
            <input
              className="form-control"
              type="file"
              id="file"
              {...register("file")}
            />
          </div>
        </div>

        {/** Button */}
        <div
          style={{ marginTop: "40px" }}
          className="d-flex gap-3 flex-row align-items-end justify-content-end"
        >
          <button
            onClick={() => dispatch(prevStep())}
            className="prev-button fw-semibold"
          >
            Previous
          </button>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            disabled={paymentInformation.length ? false : true}
            onClick={handleFormRegister}
            className="button text-white fw-semibold"
          >
            Save
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
        <div className="modal-dialog modal-dialog-centered width543">
          <div className="modal-content">
            {/** Model header */}
            <div className="modal-header model-header">
              <h1
                className="modal-title text-white fw-semibold fs-5"
                id="exampleModalLabel"
              >
                Success
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
              <div className="d-flex flex-column align-items-center mx-auto">
                <h3>Success</h3>
                <p>You have been created new contract successfully</p>
                <button className="btn btn-success">Go to contract list</button>
              </div>
            </div>
            {/** Model body */}
          </div>
        </div>
      </div>
      {/** Hidden model */}
    </>
  );
};
