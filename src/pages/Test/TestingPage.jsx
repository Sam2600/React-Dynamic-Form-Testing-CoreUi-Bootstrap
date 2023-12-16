/* eslint-disable no-unused-vars */
import React from "react";
import "./custom.css";

export const TestingPage = () => {
  return (
    <div className="d-flex flex-column mx-auto bg-dark container-whp">
      {/** Title */}
      <div
        style={{ height: "45px" }}
        className="d-flex align-items-center bg-black"
      >
        <h4>Title</h4>
      </div>
      {/** Title */}

      {/** Stepper */}
      <div className="d-flex flex-row my-4">
        <div className="steppers bg-primary">General Information</div>
        <div className="steppers bg-danger">Counter Party Information</div>
        <div className="steppers bg-primary">Life Cycle</div>
        <div className="steppers bg-danger">Payment Information</div>
      </div>
      {/** Stepper */}

      {/** General Form Container */}
      <div className="d-flex flex-column bg-success general-form-container">
        {/** Title */}
        <div
          style={{ height: "38px" }}
          className="d-flex align-items-center mb-4 bg-black"
        >
          <h4>Form title</h4>
        </div>
        {/** Title */}

        {/** Form */}
        <div className="d-flex flex-column bg-warning">
          <div className="d-flex flex-row bg-primary justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                style={{ width: "300px" }}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                style={{ width: "300px" }}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                style={{ width: "300px" }}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="d-flex flex-row bg-primary justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                style={{ width: "300px" }}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                style={{ width: "300px" }}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                style={{ width: "300px" }}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="d-flex flex-row bg-primary justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                style={{ width: "300px" }}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                style={{ width: "300px" }}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                style={{ width: "300px" }}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              style={{ width: "300px" }}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        {/** Form */}

        {/** Button */}
        <div
          style={{ marginTop: "40px" }}
          className="d-flex flex-row align-items-end justify-content-end"
        >
          <button className="btn btn-primary">Save&Next</button>
        </div>
        {/** Button */}
      </div>
      {/** General Form Container */}
    </div>
  );
};
