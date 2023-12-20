import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './features/step/stepSlice';
import contractReducer from './features/contract/contractSlice';

export const store = configureStore({
    reducer: {
        step: stepReducer,
        contract: contractReducer
    },
})