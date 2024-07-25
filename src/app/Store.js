import { configureStore } from "@reduxjs/toolkit"; 
import TransactionReducer  from "../features/transaction/TransactionSlice";
import filterReducer from "../features/filter/filterSlice"

export const Store = configureStore({
    reducer:{
        transactions :TransactionReducer,
        filter:filterReducer,
    },
    devTools:true,
});