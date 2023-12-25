import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient } from '../../../axios/axiosClient'

const initialState = {
    generalInformation: {},
    counterPartyInformation: {},
    lifeCycle: {
        remind_dates: [
            {
                date: null
            }
        ],
    },
    paymentInformation: [],

    // Server side-fetching and showing in forms
    serverSideFetches: {
        contract_types: [],
        relevant_departments: [],
        signer_positions: [],
        contracts: [],
        counter_parties: [],
        life_cycle_types: [],
        payment_types: [],
        payment_terms: []
    },

    totalAmount_ai: {
        total_amount: null,
        id: 0
    }
}

// This is for server-side CUD methods
export const fetchGeneralForContracts = createAsyncThunk(
    'contracts/general/fetch',
    async () => {
        const res = await axiosClient.get('/contracts/general/fetch')
        const data = await res.data
        return data;
    }
);

export const addContract = createAsyncThunk(
    'contracts/general/contract/register',
    async (contract) => {
        const res = await axiosClient.post('/contracts/general/contract/register', contract)
        const data = await res.data
        return data;
    }
);

export const deleteContract = createAsyncThunk(
    'contracts/general/contract/delete',
    async (id) => {
        const res = await axiosClient.post('/contracts/general/contract/delete', id)
        const data = await res.data
        return data;
    }
);

export const _addlifeCycle = createAsyncThunk(
    'contracts/general/lifeCycle/register',
    async (lifeCycle) => {
        const res = await axiosClient.post('/contracts/general/lifeCycle/register', lifeCycle)
        const data = await res.data
        return data;
    }
);

export const deleteLifeCycle = createAsyncThunk(
    'contracts/general/lifeCycle/delete',
    async (id) => {
        const res = await axiosClient.post('/contracts/general/lifeCycle/delete', id)
        const data = await res.data
        return data;
    }
);
// This is for server-side CUD methods

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
            console.log(action.payload)
            state.lifeCycle = action.payload;
        },

        addpaymentInformation: (state, action) => {
            state.paymentInformation.push(action.payload);
        },

        removePaymentInformation: (state, action) => {
            state.paymentInformation = state.paymentInformation.filter(pi => pi.id !== action.payload);
            if (!state.paymentInformation.length) {
                state.totalAmount_ai.total_amount = null
            }

            console.log(state.totalAmount_ai.total_amount);
        },

        addTotalAmount: (state, action) => {
            state.totalAmount_ai.total_amount = action.payload;
        },
        
        increaseId: (state) => {
            state.totalAmount_ai.id = state.totalAmount_ai.id + 1;
        }
    },

    // Server sides
    extraReducers: (builder) => {
        
        builder.addCase(fetchGeneralForContracts.fulfilled, (state, action) => {
            console.log(action.payload);
            //state.serverSideFetches = action.payload
        });

        builder.addCase(addContract.fulfilled, (state, action) => {
            console.log(action.payload);
            //state.serverSideFetches.contracts = action.payload
        });

        builder.addCase(deleteContract.fulfilled, (state, action) => {
            console.log(action.payload);
            //state.serverSideFetches.contracts = action.payload
        });

        builder.addCase(_addlifeCycle.fulfilled, (state, action) => {
            console.log(action.payload);
            //state.serverSideFetches.life_cycle_types = action.payload
        });

        builder.addCase(deleteLifeCycle.fulfilled, (state, action) => {
            console.log(action.payload);
            //state.serverSideFetches.life_cycle_types = action.payload
        });
    }
})

// Action creators are generated for each case reducer function
export const {addGeneralInformation, addcounterPartyInformation, addlifeCycle, addpaymentInformation, removePaymentInformation, addTotalAmount, increaseId} = contractSlice.actions;


export default contractSlice.reducer;