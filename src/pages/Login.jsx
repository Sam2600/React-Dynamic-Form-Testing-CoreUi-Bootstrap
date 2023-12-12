/* eslint-disable no-unused-vars */
import React from 'react'
import LoginPhoto from "../../public/assets/Group 17.png";
import MYT from "../../public/assets/MYT.png";
import { Link, NavLink } from 'react-router-dom';

export const Login = () => {

    return (

        <section className="p-3 p-md-4 p-xl-5">

            <div className="container">

                <div className="d-flex justify-content-between">

                    <div className="col-12 col-lg-5 col-md-7">

                        <div className="p-3 p-md-4 p-xl-5">

                            <div className="row">
                                <div className="col-12 g-5">
                                    <div className="col-md-6 offset-md-4">
                                        <img src={MYT} alt="" />
                                    </div>
                                    <div className="col-md-8 offset-md-3">
                                        <p>Contract Management System</p>
                                    </div>
                                </div>
                            </div>

                            <div className='shadow-lg p-4'>

                                <div className='mb-5 my-0'>
                                    <h5 className='fw-bold'>Sign in to account</h5>
                                    <p>Enter your username & password to login</p>
                                </div>

                                <form action="">
                                    <div className="row gy-3 gy-md-4 overflow-hidden">
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" name="password" id="password" />
                                        </div>
                                        <div className="col-12 text-end">
                                            <NavLink style={{ textDecoration: "none", color: "#235E6A" }}>
                                                Forget Password?
                                            </NavLink>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn login-Btn btn-primary" type="button">Log in now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                    {/** LoginForm Photo */}
                    <div className="col-lg-6 col-md-6">
                        <img className="img-fluid rounded mx-auto my-4" loading="lazy" src={LoginPhoto} width="100%" height="100%" alt="LoginPhoto" />
                    </div>
                    {/** LoginForm Photo */}

                </div>
            </div>
        </section>
    )

}
