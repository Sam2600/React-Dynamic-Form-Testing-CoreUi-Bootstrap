import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    step : 0
}

export const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {

        nextStep: (state) => {
            state.step += 1;
        },
        
        prevStep: (state) => {
            state.step -= 1
        }
    
    },
})

// Action creators are generated for each case reducer function
export const { nextStep, prevStep } = stepSlice.actions;


export default stepSlice.reducer