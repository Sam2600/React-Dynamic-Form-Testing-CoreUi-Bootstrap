/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const FormTitle = ({title}) => {
  return (
    <div style={{ height: "45px" }} className="d-flex align-items-center mb-4">
        <h4 className="fw-bold text-black">{title}</h4>
    </div>
  )
}
