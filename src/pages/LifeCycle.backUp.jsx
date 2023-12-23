/* eslint-disable no-unused-vars */

/**
 * Change the remind dates as array at the initial state and looping it from the start.
 * Then g with field array.
 */

import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { nextStep, prevStep } from "../redux/features/step/stepSlice";
import { useFieldArray, useForm } from "react-hook-form";
import {
  addlifeCycle,
  _addlifeCycle,
  deleteLifeCycle,
} from "../redux/features/contract/contractSlice";

export const LifeCycle = () => {
  //
  const dispatch = useDispatch();

  // And Server Fetching data will be stored in serverSideFetches
  const { lifeCycle, serverSideFetches } = useSelector(
    (state) => state.contract
  );

  // Destructuring for the form states
  const {
    life_cycle_name,
    contract_term,
    prior_notice_term,
    remind_email,
    remind_dates,
  } = lifeCycle;

  // Destructuring the states to loop the select box
  const { life_cycle_types } = serverSideFetches;

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
  const lifeCycleTypes = life_cycle_types?.length ? (
    life_cycle_types.map((lt) => {
      return (
        <option key={lt} value={lt}>
          {returnType(lt)}
        </option>
      );
    })
  ) : (
    <></>
  );

  // For model box
  const [err, setErr] = useState("");

  const life_cycle_ref = useRef("");

  // add contract type for server-side
  const handleLifeCycleAdd = (e) => {
    //
    e.preventDefault();

    const value = life_cycle_ref.current?.value;

    if (!value) {
      setErr("Life cycle type is required");
    } else {
      dispatch(addlifeCycle(value));
      console.log(value);
      setErr("");
      life_cycle_ref.current.value = "";
    }
  };

  // delete contract type for server-side
  const handleLifeCycleDelete = (id) => {
    dispatch(deleteLifeCycle(id));
  };
  // For model box

  // UseForm hook
  const { register, formState, control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      life_cycle_name: life_cycle_name,
      contract_term: contract_term,
      prior_notice_term: prior_notice_term,
      remind_email: remind_email,
      remind_dates: remind_dates,
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

  // Preparing for dynamic field array with the hook
  const { fields, append, remove, insert } = useFieldArray({
    name: "remind_dates", // This is like registering which field is gonna used as dynamic field
    control,
  });

  // Remind dates

  console.log(fields);

  let dates = fields.map((field, index) => (
    <div
      className="d-flex flex-row bg-danger align-items-center gap-3"
      key={field.id}
    >
      <div
        style={{ height: "74px", marginBottom: "16px" }}
        className="gap-1 bg-primary width300"
      >
        <label htmlFor="remind_dates" className="form-label fw-semibold">
          Remind Date
        </label>
        <input
          type="date"
          className="form-control height43 w-100"
          id="remind_dates"
          {...register(`remind_dates.${index}.date`, {
            required: {
              value: true,
              message: "Remind date is required",
            },
          })}
        />
      </div>

      {index === 0 ? (
        <div style={{ marginTop: "16px" }}>
          <button
            type="button"
            onClick={() => {
              append({ date: null });
            }}
            style={{ fontSize: "14px" }}
            className="addDateBtn fw-semibold"
          >
            {" "}
            <span className="fs-1 p-0">+</span> Add Date
          </button>
        </div>
      ) : (
        <div style={{ marginTop: "16px" }}>
          <button onClick={() => remove(index)} className="date-delete-button">
            <i className="bi bi-trash fs-2 text-danger"></i>
          </button>
        </div>
      )}
    </div>
  ));

  // handle onSubmit
  const onSubmit = (data) => {
    dispatch(addlifeCycle(data));
    dispatch(nextStep());
  };

  return (
    <>
      {/** Title */}
      <div
        style={{ height: "38px" }}
        className="d-flex align-items-center mb-4"
      >
        <h5 className="fw-semibold text-black">Life Cycle</h5>
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
                htmlFor="life_cycle_name"
                className="form-label fw-semibold"
              >
                Life Cycle Type <span className="text-danger">*</span>
              </label>
              <div className="d-flex flex-row gap12">
                <select
                  id="life_cycle_name"
                  className="form-select height43"
                  aria-label="Default select example"
                  disabled={life_cycle_types.length ? false : true}
                  {...register("life_cycle_name", {
                    required: {
                      value: life_cycle_types.length ? true : false,
                      message: "Life cycle is required",
                    },
                  })}
                >
                  <option>Select life cycle type</option>
                  {lifeCycleTypes}
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
              <label htmlFor="contract_term" className="form-label fw-semibold">
                Contract Term <span className="text-danger">*</span>
              </label>
              <div className="d-flex flex-row align-items-center gap-2">
                <input
                  type="text"
                  className="form-control height43 w-100"
                  id="contract_term"
                  placeholder="Enter contract term"
                  {...register("contract_term", {
                    required: {
                      value: true,
                      message: "Contract term is required",
                    },
                  })}
                />
                <span className="fw-semibold ">Months</span>
              </div>
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label
                htmlFor="prior_notice_term"
                className="form-label fw-semibold"
              >
                Prior notice term <span className="text-danger">*</span>
              </label>
              <div className="d-flex flex-row align-items-center gap-2">
                <input
                  type="text"
                  className="form-control height43 w-100"
                  id="prior_notice_term"
                  placeholder="Enter prior notice term"
                  {...register("prior_notice_term", {
                    required: {
                      value: true,
                      message: "Prior notice term is required",
                    },
                  })}
                />
                <span className="fw-semibold ">Days</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 w-100"
            >
              <label htmlFor="remind_email" className="form-label fw-semibold">
                Remind email
              </label>
              <input
                type="text"
                className="form-control height43 w-100"
                id="remind_email"
                placeholder="sam@gmail.com,  jimmy@gmail.com,  ..."
                {...register("remind_email")}
              />
            </div>
          </div>

          <div className="d-flex flex-column gap-3 ">
            <div className="d-flex flex-row align-items-center gap-3">
              {/* <div
                style={{ height: "74px", marginBottom: "16px" }}
                // className="gap-1 width300"
                className="gap-1 width300"
              >
                <label
                  htmlFor="remind_dates"
                  className="form-label fw-semibold"
                >
                  Remind Date
                </label>
                <input
                  type="date"
                  className="form-control height43 w-100"
                  id="remind_dates"
                  placeholder="sam@gmail.com,  jimmy@gmail.com,  ..."
                  {...register("remind_dates")}
                /> 
               
              </div> */}
              <div
                style={{ height: "74px", marginBottom: "16px" }}
                // className="gap-1 width300"
                className="gap-1 width300"
              >
                {dates}
              </div>
            </div>
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

          <button type="submit" className="button text-white fw-semibold">
            Save & Next
          </button>
        </div>
      </form>
      {/** Button */}
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
                Add Life Cycle Type
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
                    htmlFor="life_cycle_type"
                    className="form-label fw-semibold"
                  >
                    Life Cycle Type <span className="text-danger"> * </span>
                  </label>
                  <input
                    ref={life_cycle_ref}
                    type="text"
                    className="form-control height43 w-100"
                    id="life_cycle_type"
                    placeholder="Enter life cycle type"
                  />
                  {/* <p className="text-danger mx-2 my-1">{err && err}</p> */}
                </div>

                <div className="d-flex flex-row align-items-end justify-content-end">
                  <button
                    onClick={handleLifeCycleAdd}
                    className="model-button text-white fw-semibold"
                  >
                    Add
                  </button>
                </div>
              </div>
              {/** Add Contract Type */}

              {/** Contract table */}
              {life_cycle_types.length ? (
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
                      {life_cycle_types.map((lf) => {
                        return (
                          <tr key={lf.id}>
                            <td>{lf.id}</td>
                            <td>{lf.type}</td>
                            <td>
                              <button
                                type="button"
                                onClick={() => handleLifeCycleDelete(lf.id)}
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
