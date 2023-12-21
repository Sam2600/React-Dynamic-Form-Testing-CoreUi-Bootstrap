/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { nextStep, prevStep } from "../redux/features/step/stepSlice";
import { useForm } from "react-hook-form";
import { addlifeCycle } from "../redux/features/contract/contractSlice";

export const LifeCycle = () => {
  //
  const dispatch = useDispatch();

  const {lifeCycle} = useSelector( (state) => state.contract);

  const {
    life_cycle_name,
    contract_term,
    prior_notice_term,
    remind_email,
    remind_date,
  } = lifeCycle;

  // UseForm hook 
  const { register, formState, control, handleSubmit, watch, reset } = useForm({
    defaultValues:{
      life_cycle_name: life_cycle_name,
      contract_term: contract_term,
      prior_notice_term: prior_notice_term,
      remind_email: remind_email,
      remind_date: remind_date,
    }
  });

  // Useful Form states
  const { errors, isSubmitted, submitCount, isSubmitting, isSubmitSuccessful, isValid } = formState;

   // handle onSubmit
   const onSubmit = (data) => {
    dispatch(addlifeCycle(data))
    dispatch(nextStep());
  }

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
                    {...register("life_cycle_name", {
                        required: {
                        value: true,
                        message: "Life cycle is required"
                        },
                      })
                    }
                  >
                    <option defaultValue={0}>Select life cycle type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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
                        message: "Contract term is required"
                        },
                      })
                    }
                  />
                  <span className="fw-semibold ">Months</span>
                </div>
                
              </div>
              <div
                style={{ height: "74px", marginBottom: "16px" }}
                className="gap-1 width300"
              >
                <label htmlFor="prior_notice_term" className="form-label fw-semibold">
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
                        message: "Prior notice term is required"
                        },
                      })
                    }
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
          <div className="d-flex flex-row align-items-center gap-3 ">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="remind_date" className="form-label fw-semibold">
                Related Term
              </label>
              <input
                type="text"
                className="form-control height43 w-100"
                id="remind_date"
                placeholder="sam@gmail.com,  jimmy@gmail.com,  ..."
                {...register("remind_date")}
              />
            </div>
            <div style={{marginTop: "16px"}}>
                  <button style={{fontSize:"14px"}} className="addDateBtn fw-semibold"> <span className="fs-1 p-0">+</span> Add Date</button>
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

          <button
            type="submit"
            className="button text-white fw-semibold"
          >
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
                <div style={{ height: "74px" }} className="gap-1 width300">
                  <label
                    htmlFor="contract_type_name"
                    className="form-label fw-semibold"
                  >
                    Contract type name <span className="text-danger"> * </span>
                  </label>
                  <input
                    type="text"
                    className="form-control height43 w-100"
                    id="contract_type_name"
                    placeholder="Enter contract type name"
                  />
                </div>

                <div className="d-flex flex-row align-items-end justify-content-end">
                  <button className="model-button text-white fw-semibold">
                    Add
                  </button>
                </div>
              </div>
              {/** Add Contract Type */}

              {/** Contract table */}
              <div className="shadow-lg table-container">
                <table>
                  <thead className="t-header">
                    <tr>
                      <th>No</th>
                      <th>Contract Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="t-body">
                    <tr>
                      <td>1</td>
                      <td>Business Type</td>
                      <td>
                        <button className="trash-button">
                          <i className="bi bi-trash fs-5 text-danger"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Business Type</td>
                      <td>
                        <button className="trash-button">
                          <i className="bi bi-trash fs-5 text-danger"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Business Type</td>
                      <td>
                        <button className="trash-button">
                          <i className="bi bi-trash fs-5 text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
