import { createSlice } from "@reduxjs/toolkit";

export const TransactionSlice =createSlice({
        name:"transactions",
        initialState:[],
        reducers:{
            addTransaction:(state , action)=>{
                state.push(action.payload);
            },
            deleteTransaction:(state , action)=>{
                return state.filter((txn) => txn.id !== action.payload);
            },
        },
});

export const { addTransaction , deleteTransaction}= TransactionSlice.actions;
export default TransactionSlice.reducer;