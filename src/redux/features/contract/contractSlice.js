import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    generalInformation: {},
    counterPartyInformation: {},
    lifeCycle: {
        remind_dates: [],
    },
    paymentInformation: []
}

export const contractSlice = createSlice({
    
    name: 'contract',
    initialState,
    reducers: {

        addGeneralInformation: (state, action) => {
            state.generalInformation = action.payload;
        },

        addcounterPartyInformation: (state, action) => {
            state.counterPartyInformation = action.payload;
        },

        addlifeCycle: (state, action) => {
            state.lifeCycle = action.payload;
        },

        addpaymentInformation: (state, action) => {
            state.paymentInformation.push(action.payload);
        },

        removePaymentInformation: (state, action) => {
            state.paymentInformation = state.paymentInformation.filter( pi =>  pi.payment_date !== action.payload);
        }
    
    },
})

// Action creators are generated for each case reducer function
export const {addGeneralInformation, addcounterPartyInformation, addlifeCycle, addpaymentInformation, removePaymentInformation} = contractSlice.actions;


export default contractSlice.reducer;