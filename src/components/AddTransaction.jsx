import { useState } from "react";
import { addTransaction } from "../features/transaction/TransactionSlice";
import { useDispatch } from "react-redux";

export const AddTransaction =()=>{
    const [description , setDescription] = useState('');
    const [amount , setAmount] =useState('');
    const [type, setType] = useState("income");
    const dispatch =   useDispatch()
    
    


    const handelSubmit =(e)=>{
        e.preventDefault();
        if(description.trim()){
            dispatch(
                addTransaction({
                    id: Date.now(),
                    description , 
                    type,
                    amount:parseFloat(amount)
                })
            );
            setAmount('');
            setDescription("");
        }
    }


    return(
        <form onSubmit={handelSubmit} className=" bg-gray-100 text-center   rounded mt-10 mb-2 p-2 border  border-gray-200">
           <input type="text" value={description}  placeholder="Add description" className="p-2 mr-2 rounded border border-gray-300 " onChange={(e)=> setDescription(e.target.value)}/>
           <input type="number" value={amount} placeholder="Add Amount" className=" border border-gray-300  p-2 mr-2 rounded" onChange={(e)=> setAmount(e.target.value)}/>
           <select name="" id=""  value={type} onChange={(e)=> setType(e.target.value)} placeholder="Add description" className=" border border-gray-300 px-3 py-2  mr-2 rounded">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
           </select>
            <button type="submit" className="bg-blue-500 w-36 p-2 text-white rounded">
                Add Transaction
            </button>
        </form>
    )
};
