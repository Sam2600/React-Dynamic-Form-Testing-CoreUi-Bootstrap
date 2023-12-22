/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../redux/features/step/stepSlice";
import { useFieldArray, useForm } from "react-hook-form";
import { addpaymentInformation, removePaymentInformation } from "../redux/features/contract/contractSlice";

export const PaymentInformation = () => {
  //
  const dispatch = useDispatch();

  const [rowNum ,setRowNum] = useState(0);

  const {paymentInformation} = useSelector((state) => state.contract);

  console.log(paymentInformation[0])

  // const {
  //   total_contract_amount,
  //   payment_type,
  //   contract_number,
  //   payment_term,
  //   payment_date,
  //   amount,
  //   file,
  // } = paymentInformation[rowNum];

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

  // Dynamic field array
  // Preparing for dynamic field array with the hook
  const { fields, append, remove, insert } = useFieldArray({
    name: "remind_dates", // This is like registering which field is gonna used as dynamic field
    control,
  });
  

  // handle onSubmit
  const onSubmit = (data) => {

    setRowNum( rowNum + 1);

    const uploadedFile = data.file.length > 0 ? data.file[0].name : null;

    const formData = {...data, file: uploadedFile};

    dispatch(addpaymentInformation(formData));

    reset();
  };

  // const handleAddRowNum = () => {
  //   setRowNum( rowNum + 1);
  //   handleSubmit(onsubmit)
  //   reset();
  // }

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
                  {...register("payment_type", {
                    required: {
                      value: true,
                      message: "Payment type is required",
                    },
                  })}
                >
                  <option>Select Payment Type</option>
                  <option value={"Payment A"}>Payment A</option>
                  <option value={"Payment B"}>Payment B</option>
                  <option value={"Payment C"}>Payment C</option>
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
                  {...register("payment_term", {
                    required: {
                      value: true,
                      message: "Payment term is required",
                    },
                  })}
                >
                  <option defaultValue={0}>Select Payment Term</option>
                  <option value={"Term A"}>Term A</option>
                  <option value={"Term B"}>Term B</option>
                  <option value={"Term C"}>Term C</option>
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
              type="submit" style={{ fontSize: "17px" }} className="addBtn fw-semibold">
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
              {paymentInformation.length ?
              
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
                    {
                        paymentInformation.map( (pi,index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{pi.payment_term}</td>
                              <td>{pi.payment_date}</td>
                              <td>{pi.amount}</td>
                              <td>
                                <button type="button" onClick={()=>dispatch(removePaymentInformation(pi.payment_date))} className="trash-button">
                                  <i className="bi bi-trash fs-5 text-danger"></i>
                                </button>
                              </td>
                          </tr>
                          )
                        })
                    }
                  </tbody>
                </table>
                :<></>
                }
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

          <button type="submit" className="button text-white fw-semibold">
            Save
          </button>
        </div>
        {/** Button */}
      </form>
      {/** Form */}
    </>
  );
};
