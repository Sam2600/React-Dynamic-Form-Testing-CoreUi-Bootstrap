/* eslint-disable no-unused-vars */
import React from "react";

export const PdfDownload = () => {
  return (
    <div className="d-flex flex-column col-11 mx-auto border border-black border-1">
      {/** First Part */}
      <div>
        <div className="border-bottom border-1 border-black">
          <h4 className="text-center">Contract Information</h4>
        </div>
        <div className="d-flex flex-row align-items-center border-bottom border-1 border-black">
          <div className="col-3 border-end border-1 border-black ">
            <h5 className="text-center">Contract Title</h5>
          </div>
          <div className="col-9 px-3">Title Here</div>
        </div>
        <div className="d-flex flex-row border-bottom border-1 border-black">
          <div className="d-flex flex-row col-6">
            <div className="col-6 border-end border-1 border-black px-2">
              Contract Number
            </div>
            <div className="col-6 border-end border-1 border-black px-2">
              123123
            </div>
          </div>
          <div className="d-flex flex-row col-6">
            <div className="col-6 border-end border-1 border-black px-2">
              Contract Type
            </div>
            <div className="col-6 border-end border-1 border-black px-2">
              Type ABC
            </div>
          </div>
        </div>
      </div>
      {/** First Part */}
      {/** Second Part */}
      <div>
        <div className="d-flex flex-row border-bottom border-1 ">
          <h5 className="px-2">Counterparty Information</h5>
        </div>
        <div className="d-flex flex-row border-bottom border-1 ">
          <div className="col-3 border-end border-1">
            <p className="px-2">Counter party name</p>
          </div>
          <div>
            <p className="px-2">Name of counter party</p>
          </div>
        </div>
        <div className="d-flex flex-row border-bottom border-1 ">
          <div className="col-3 border-end border-1">
            <p className="px-2">Phone</p>
          </div>
          <div>
            <p className="px-2">Number of Phone</p>
          </div>
        </div>
        <div className="d-flex flex-row border-bottom border-1 ">
          <div className="col-3 border-end border-1">
            <p className="px-2">Email</p>
          </div>
          <div>
            <p className="px-2">Example@gmail.com</p>
          </div>
        </div>
        <div className="d-flex flex-row border-bottom border-1 ">
          <div className="col-3 border-end border-1">
            <p className="px-2">Address</p>
          </div>
          <div>
            <p className="px-2">Address here ...</p>
          </div>
        </div>
      </div>
      {/** Second Part */}
      {/** Third Part */}
      <div>
        <div className="d-flex flex-row border-bottom border-1">
          <h5>Contract life cycle type</h5>
        </div>
        <div className="d-flex flex-row border-bottom border-1 ">
          <div className="col-3 border-end border-1">
            <p>Contract Term</p>
          </div>
          <div>
            <p>12 Month</p>
          </div>
        </div>
        <div className="d-flex flex-row border-bottom border-1 ">
          {/* <div className="d-flex flex-row col-9"> */}
          <div className="col-3 border-end border-1">
            <p>Start Date</p>
          </div>
          <div className="col-4 border-end border-1">
            <p>Start</p>
          </div>
          {/* </div> */}
          {/* <div className="d-flex flex-row col-3 "> */}
          <div className="col-2 border-end border-1">
            <p>End Date</p>
          </div>
          <div className="col-4">
            <p>End</p>
          </div>
          {/* </div> */}
        </div>
        <div className="d-flex flex-row border-bottom border-1 ">
          <div className="col-3 border-end border-1">
            <p>Related Term</p>
          </div>
          <div>
            <p>Related Term</p>
          </div>
        </div>
      </div>
      {/** Third Part */}
      {/** Fourth Part */}
      <div>
        <div className="d-flex flex-row border-bottom border-1">
          <h5>Amount</h5>
        </div>

        <div className="d-flex flex-row border-bottom border-1">
          <div className="d-flex flex-row col-6">
            <div className="border-end border-1 col-3">
              <p>Amount</p>
            </div>
            <div className="border-end border-1 col-6">
              <p>Amount </p>
            </div>
            <div className="border-end border-1 col-3">
              <p>Monthly</p>
            </div>
          </div>
          <div className="d-flex flex-row col-6 ">
            <div className="col-6 border-end border-1">
              <p>End Date</p>
            </div>
            <div className="col-6">
              <p>Amount </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row border-bottom border-1">
          <div>
            <p>Payment Term</p>
          </div>
          <div>
            <p>Payment Term</p>
          </div>
        </div>
      </div>
      {/** Fourth Part */}
      {/** Fifth Part */}
      <div>
        <div className="d-flex flex-row border-bottom border-1">
          <h5>Payment Schedule</h5>
        </div>
        {/** This div will be looped */}
        <div className="d-flex flex-row border-bottom border-1">
          <div className="border-end border-1 col-3">
            <p>1st Time Payment</p>
          </div>
          <div className="border-end border-1 col-1">
            <p>Date</p>
          </div>
          <div className="border-end border-1 col-3">
            <p>Date Here...</p>
          </div>
          <div className="border-end border-1 col-2">
            <p>Amount</p>
          </div>
          <div className="border-end border-1 col-3">
            <p>Amount Here</p>
          </div>
        </div>
        {/** This div will be looped */}

        <div className="d-flex flex-row border-bottom border-1">
          <div className="border-end border-1 col-3">
            <p>Prior Notice Term</p>
          </div>
          <div>Term here..</div>
        </div>
        <div className="d-flex flex-row border-bottom border-1">
          <div className="border-end border-1 col-3">
            <p>Alert Date</p>
          </div>
          <div>Date here..</div>
        </div>
      </div>
      {/** Fifth Part */}
      {/** Sixth Part */}
      <div className="d-flex flex-row mt-3 justify-content-between ">
        <div className="col-5 border-end border-top ">
          <div className="d-flex flex-row border-bottom border-1">
            <h5>MYT</h5>
          </div>

          <div className="d-flex flex-row border-bottom ">
            <p>Relevant Deapartmet</p>
          </div>
          <div className="d-flex flex-row border-bottom">
            <div className="border-end border-1 col-3">
              <p>Signer</p>
            </div>
            <div>Signer here...</div>
          </div>
          <div className="d-flex flex-row border-bottom">
            <div className="border-end border-1 col-3">
              <p>Position</p>
            </div>
            <div>Position here...</div>
          </div>
        </div>

        <div className="col-6 border-start border-top ">
          <div className="d-flex flex-row border-bottom border-1">
            <h5>Counter Party</h5>
          </div>

          <div className="d-flex flex-row border-bottom">
            <div>
              <div>
                <p>Random</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="d-flex flex-row border-bottom">
            <div className="border-end border-1 col-3">
              <p>Signer</p>
            </div>
            <div>Signer here...</div>
          </div>
          <div className="d-flex flex-row border-bottom">
            <div className="border-end border-1 col-3">
              <p>Position</p>
            </div>
            <div>Position here...</div>
          </div>
        </div>
      </div>
      {/** Sixth Part */}
    </div>
  );
};
