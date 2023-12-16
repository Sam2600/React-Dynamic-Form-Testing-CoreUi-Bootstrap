/* eslint-disable no-unused-vars */
import React from "react";
import "./custom.css";
import FilledSvg from "../../../public/assets/Filled.svg";

export const TestingPage = () => {
  return (
    <div className="container-whp d-flex flex-column mx-auto">
      {/** Title */}
      <div style={{ height: "45px" }} className="d-flex align-items-center">
        <h4 className="fw-bold text-black">Add Contract</h4>
      </div>
      {/** Title */}

      {/** Stepper */}
      <div className="d-flex flex-row my-4">
        <div className="steppers ">
          <div className="stepper-child">
            <img src={FilledSvg} alt="My SVG" />
            <span className="stepper-child-bar"></span>
          </div>
          <div className="text-black">General Information</div>
        </div>

        <div className="steppers ">
          <div className="stepper-child">
            <img src={FilledSvg} alt="My SVG" />
            <span className="stepper-child-bar"></span>
          </div>
          <div className="text-black">CounterParty Information</div>
        </div>

        <div className="steppers ">
          <div className="stepper-child">
            <img src={FilledSvg} alt="My SVG" />
            <span className="stepper-child-bar"></span>
          </div>
          <div className="text-black">Life Cycle</div>
        </div>

        <div className="steppers ">
          <div className="stepper-child">
            <img src={FilledSvg} alt="My SVG" />
            <span className="stepper-child-bar"></span>
          </div>
          <div className="text-black">Payment Information</div>
        </div>
      </div>
      {/** Stepper */}

      {/** General Form Container */}
      <div className="d-flex bg-white shadow-lg flex-column general-form-container">
        {/** Title */}
        <div
          style={{ height: "38px" }}
          className="d-flex align-items-center mb-4"
        >
          <h5 className="fw-bold text-black">General Information</h5>
        </div>
        {/** Title */}

        {/** Form */}
        <div className="d-flex flex-column ">
          <div className="d-flex flex-row justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between">
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              style={{ height: "74px", marginBottom: "16px" }}
              className="gap-1 width300"
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div
            style={{ height: "74px", marginBottom: "16px" }}
            className="gap-1 width300"
          >
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control w-100"
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
          <button className="btn button text-white">Save&Next</button>
        </div>
        {/** Button */}
      </div>
      {/** General Form Container */}
    </div>
  );
};
