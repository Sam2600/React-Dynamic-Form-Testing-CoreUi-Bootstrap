/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "../redux/features/step/stepSlice";

export const PaymentInformation = () => {
  //
  const dispatch = useDispatch();

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
      <div className="d-flex flex-column ">
        <div className="d-flex flex-row justify-content-between">
          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label htmlFor="total_contract_amount" className="form-label fw-semibold">
              Total Contract Amount <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control height43 w-100"
              id="total_contract_amount"
              placeholder="Enter total contract amount"
            />
          </div>
          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label
              htmlFor="payment_type"
              className="form-label fw-semibold"
            >
              Payment Type <span className="text-danger">*</span>
            </label>
            <div className="d-flex flex-row gap12">
              <select
                id="payment_type"
                className="form-select height43"
                aria-label="Default select example"
              >
                <option defaultValue={0}>Select Payment Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
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
            style={{ height: "74px"}}
            className="gap-1 width300"
          >
            <label
              htmlFor="payment_term"
              className="form-label fw-semibold"
            >
              Payment Term <span className="text-danger">*</span>
            </label>
            <div className="d-flex flex-row gap12">
              <select
                id="payment_term"
                className="form-select height43"
                aria-label="Default select example"
              >
                <option defaultValue={0}>Select Payment Term</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div
            style={{ height: "74px"}}
            className="gap-1 width300"
          >
            <label htmlFor="payment_date" className="form-label fw-semibold">
              Payment Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control height43"
              id="payment_date"
            />
          </div>
          <div
            style={{ height: "74px"}}
            className="gap-1 width300"
          >
            <label
              htmlFor="amount"
              className="form-label fw-semibold"
            >
              Amount <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control height43"
              id="amount"
              placeholder="Enter amount"
            />
          </div>
        </div>

        <div className="mx-auto mt-3">
          <button style={{fontSize:"17px"}} className="addDateBtn fw-semibold"> <span className="fs-1 p-0">+</span> Add </button>
        </div>

        <div
          style={{ height: "80px", marginBottom: "16px" }}
          className="gap-1 width471 mt-4"
        >
          <label htmlFor="signer_position" className="form-label fw-semibold">
            Attachment
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
      </div>
      {/** Form */}

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
          onClick={() => {
            dispatch(nextStep());
          }}
          className="button text-white fw-semibold"
        >
          Save
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
