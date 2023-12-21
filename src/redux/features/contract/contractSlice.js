import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    generalInformation: {},
    counterPartyInformation: {},
    lifeCycle: {
        remind_dates: [],
    },
    paymentInformation: {}
}

export const contractSlice = createSlice({
    
    name: 'contract',
    initialState,
    reducers: {

        addGeneralInformation: (state, action) => {
            console.log(action.payload);
            state.generalInformation = action.payload;
        },

        addcounterPartyInformation: (state, action) => {
            console.log(action.payload);
            state.counterPartyInformation = action.payload;
        },

        addlifeCycle: (state, action) => {
            console.log(action.payload);
            state.lifeCycle = action.payload;
        },

        addpaymentInformation: (state, action) => {
            console.log(action.payload);
            state.paymentInformation = action.payload;
        }
    
    },
})

// Action creators are generated for each case reducer function
export const {addGeneralInformation, addcounterPartyInformation, addlifeCycle, addpaymentInformation} = contractSlice.actions;


export default contractSlice.reducer;