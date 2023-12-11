import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contract: {

    }
}

export const contractSlice = createSlice({
    name: 'contract',
    initialState,
    reducers: {
        demoMethod: (state, action) => {
            console.log(state);
            console.log(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { demoMethod } = contractSlice.actions;

export default contractSlice.reducer