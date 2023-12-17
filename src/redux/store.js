import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './features/step/stepSlice';

export const store = configureStore({
    reducer: {
        step: stepReducer
    },
})