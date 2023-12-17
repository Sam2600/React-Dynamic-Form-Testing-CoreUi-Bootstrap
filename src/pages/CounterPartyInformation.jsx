/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../redux/features/step/stepSlice";

export const CounterPartyInformation = () => {
  const dispatch = useDispatch();

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
      <div className="d-flex flex-column ">
        <div className="d-flex flex-row justify-content-between">
          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label htmlFor="contract_title" className="form-label fw-semibold">
              Contract Title <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control height43 w-100"
              id="contract_title"
              placeholder="Enter Contract Title"
            />
          </div>
          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-semibold"
            >
              Contract Type <span className="text-danger">*</span>
            </label>
            <div className="d-flex flex-row gap12">
              <select
                className="form-select height43"
                aria-label="Default select example"
              >
                <option defaultValue={0}>Select Contract Type</option>
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
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-semibold"
            >
              Relevant Department <span className="text-danger">*</span>
            </label>
            <select
              className="form-select height43"
              aria-label="Default select example"
            >
              <option defaultValue={0}>Select relevant department</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
            />
          </div>
          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label htmlFor="contract_number" className="form-label fw-semibold">
              Contract Number
            </label>
            <input
              type="text"
              className="form-control height43 w-100"
              id="contract_number"
              placeholder="MYT-FNF-0001-LA-2023"
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
            />
          </div>
          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label
              htmlFor="contract_total_amount"
              className="form-label fw-semibold"
            >
              Contract Total Amount
            </label>
            <input
              type="text"
              className="form-control height43 w-100"
              id="contract_total_amount"
              placeholder="Enter Contract Total Amount"
            />
          </div>
          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label htmlFor="signer_obh_myt" className="form-label fw-semibold">
              Signer (On behave of MYT)
            </label>
            <input
              type="text"
              className="form-control height43 w-100"
              id="signer_obh_myt"
              placeholder="Enter signer"
            />
          </div>
        </div>

        <div
          style={{ height: "74px", marginBottom: "16px" }}
          className="gap-1 width300"
        >
          <label htmlFor="signer_position" className="form-label fw-semibold">
            Signer Position
          </label>
          <input
            type="text"
            className="form-control height43 w-100"
            id="signer_position"
            placeholder="Enter signer position"
          />
        </div>
      </div>
      {/** Form */}

      {/** Button */}
      <div
        style={{ marginTop: "40px" }}
        className="d-flex flex-row align-items-end justify-content-end"
      >
        <button
          onClick={() => dispatch(nextStep())}
          className="button text-white fw-semibold"
        >
          Save & Next
        </button>
      </div>
      {/** Button */}

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
