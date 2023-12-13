/* eslint-disable no-unused-vars */
import React from 'react'

export const CounterPartyInformation = () => {
    return (
        <div className='container bg-danger flex-column'>

            <h5 className='h3 p32LR p32TB'>General Information</h5>

            <div style={{marginBottom:40, width:1056}} className='p32LR bg-primary '>
                <form className="row gy-3">
                    <div style={{marginRight:78, width:300}} className="col-md-3">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div style={{marginRight:78, width:300}} className="col-md-3">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div style={{marginRight:78, width:300}} className="col-md-3">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div style={{marginRight:78, width:300}} className="col-md-3">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div style={{marginRight:78, width:300}} className="col-md-3">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div style={{marginRight:78, width:300}} className="col-md-3">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div style={{marginRight:78, width:300}} className="col-md-3">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </form>
            </div>

            <div className='d-flex justify-content-end p32LR'>
                <button className='btn1'>Save&Next</button>
            </div>

        </div>
    )
}
