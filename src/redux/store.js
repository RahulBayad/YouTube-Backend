import {configureStore} from '@reduxjs/toolkit';
import MenuReducer from './MenuSlice.js';

export const store = configureStore({
    reducer : {
        menu : MenuReducer
    },
})  