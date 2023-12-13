/* eslint-disable no-unused-vars */
import React from 'react'
import FilledSvg from "../../public/assets/Filled.svg"
import { Outlet } from 'react-router-dom'

const steps = ["General Information", "Counterparty Information", "Life Cycle", "Payment Information"];

export const DefaultLayout = () => {

    const totalRegisterSteps = steps.map(stp => {

        return (
            <div className='stepper-child' key={stp}>
                <div className='stepper-child-child'>
                    <img src={FilledSvg} alt="My SVG" />
                    <div style={{ width: 157, height: 0, border: '1px #05C392 solid' }}></div>
                </div>
                <div>{stp}</div>
            </div>
        )
    })

    return (
            <div className="addContract-Container bg-dark text-white">
                <h5 className='header'>Add Contract</h5>
                <div className='stepper'>
                    {totalRegisterSteps}
                </div>
                <div className='form-Container'>
                    <Outlet />
                </div>
            </div>
    )
}
