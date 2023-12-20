import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    generalInformation: {
        contractTitle: "",
        contractType: "",
        relevantDepartment: "",
        startDate: null,
        endDate: null,
        contractNumber: "",
        relatedItem: "",
        GIsigner: "",
        GIsignerPosition: ""
    },
    counterPartyInformation: {
        counterParty: "",
        CPsigner: "",
        CPsignerPosition: "",
        email: "",
        contractPersonPh: "",
        contractPersonPosition: "",
        address: "",
        phone: ""
    },
    lifeCycle: {},
    paymentInformation: {}
}

export const contractSlice = createSlice({
    name: 'contract',
    initialState,
    reducers: {

        
    
    },
})

// Action creators are generated for each case reducer function
// export const {  } = contractSlice.actions;


export default contractSlice.reducer