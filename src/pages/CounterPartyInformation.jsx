/* eslint-disable no-unused-vars */
import React from "react";
import { nextStep, prevStep } from "../redux/features/step/stepSlice";
import { useDispatch } from "react-redux";

export const CounterPartyInformation = () => {
  const dispatch = useDispatch();

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
            <input
              type="text"
              className="form-control height43 w-100"
              id="counter_party"
              placeholder="Enter Contract Title"
            />
          </div>
          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label
              htmlFor="signer"
              className="form-label fw-semibold"
            >
              Signer (On behave of Counterparty)
            </label>
            <input
              type="text"
              className="form-control height43"
              id="signer"
              placeholder="Enter signer"
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
             Signer Position <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control height43"
              id="signer_position"
              placeholder="Enter signer position"
            />
          </div>
        </div>

        <div className="d-flex flex-row justify-content-between">
          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label htmlFor="email" className="form-label fw-semibold">
             Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control height43"
              id="email"
              placeholder="Enter email address"
            />
          </div>
          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label htmlFor="end_date" className="form-label fw-semibold">
              Contract Person Phone <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control height43"
              id="contrat_person"
              placeholder="Enter phone number"
            />
          </div>
          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label htmlFor="contract_number" className="form-label fw-semibold">
              Position of Contract Person
            </label>
            <input
              type="text"
              className="form-control height43 w-100"
              id="contract_number"
              placeholder="Enter position"
            />
          </div>
        </div>

        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-column justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="contract_person" className="form-label fw-semibold">
                Contract Person
              </label>
              <input
                type="text"
                className="form-control height43 w-100"
                id="contract_person"
                placeholder="Enter contract person name"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label
                htmlFor="phone"
                className="form-label fw-semibold"
              >
                Phone
              </label>
              <input
                type="text"
                className="form-control height43 w-100"
                id="phone"
                placeholder="Enter phone numnber"
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
            />
          </div>
        </div>

        {/** */}
      </div>
      {/** Form */}

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
