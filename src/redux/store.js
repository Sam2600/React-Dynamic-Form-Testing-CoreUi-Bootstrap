import { configureStore } from '@reduxjs/toolkit';
import contractReducer from '../redux/features/contract/contractSlice';

export const store = configureStore({
    reducer: {
        contract: contractReducer
    },
})