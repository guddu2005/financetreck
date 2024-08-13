// import { useState } from "react";
// import { addTransaction } from "../features/transaction/TransactionSlice";
// import { useDispatch } from "react-redux";

// export const AddTransaction =()=>{
//     const [description , setDescription] = useState('');
//     const [amount , setAmount] =useState('');
//     const [type, setType] = useState("income");
//     const dispatch =   useDispatch()
    
    


//     const handelSubmit =(e)=>{
//         e.preventDefault();
//         if(description.trim()){
//             dispatch(
//                 addTransaction({
//                     id: Date.now(),
//                     description , 
//                     type,
//                     amount:parseFloat(amount)
//                 })
//             );
//             setAmount('');
//             setDescription("");
//         }
//     }


//     return(
//         <form onSubmit={handelSubmit} className=" bg-gray-100 text-center   rounded mt-10 mb-2 p-2 border  border-gray-200">
//            <input type="text" value={description}  placeholder="Add description" className="p-2 mr-2 rounded border border-gray-300 " onChange={(e)=> setDescription(e.target.value)}/>
//            <input type="number" value={amount} placeholder="Add Amount" className=" border border-gray-300  p-2 mr-2 rounded" onChange={(e)=> setAmount(e.target.value)}/>
//            <select name="" id=""  value={type} onChange={(e)=> setType(e.target.value)} placeholder="Add description" className=" border border-gray-300 px-3 py-2  mr-2 rounded">
//             <option value="income">Income</option>
//             <option value="expense">Expense</option>
//            </select>
//             <button type="submit" className="bg-blue-500 w-36 p-2 text-white rounded">
//                 Add Transaction
//             </button>
//         </form>
//     )
// };


// import { useState } from "react";
// import { addTransaction } from "../features/transaction/TransactionSlice";
// import { useDispatch } from "react-redux";

// export const AddTransaction = () => {
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [type, setType] = useState("income");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (description.trim()) {
//       dispatch(
//         addTransaction({
//           id: Date.now(),
//           description,
//           type,
//           amount: parseFloat(amount),
//         })
//       );
//       setAmount('');
//       setDescription('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mx-auto w-3/4">
//       <div className="mb-4 text-xl font-semibold">
//         <h2 className="text-gray-700">Modify Expenses</h2>
//       </div>
//       <div className="mb-4">
//         <input 
//           type="text" 
//           value={description} 
//           placeholder="Expense Name" 
//           className="w-full p-3 rounded border border-gray-300 mb-2" 
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input 
//           type="number" 
//           value={amount} 
//           placeholder="Expense Amount (R)" 
//           className="w-full p-3 rounded border border-gray-300 mb-2" 
//           onChange={(e) => setAmount(e.target.value)}
//         />
//       </div>
//       <div className="flex justify-between">
//         <button type="submit" className="bg-green-500 px-4 py-2 text-white rounded shadow-md">
//           Add Expense
//         </button>
//         <button type="reset" onClick={() => { setDescription(''); setAmount(''); }} className="bg-red-500 px-4 py-2 text-white rounded shadow-md">
//           Clear Expenses
//         </button>
//       </div>
//     </form>
//   );
// };


import { useState } from "react";
import { addTransaction } from "../features/transaction/TransactionSlice";
import { useDispatch } from "react-redux";

export const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState("income");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(
        addTransaction({
          id: Date.now(),
          description,
          type,
          amount: parseFloat(amount),
        })
      );
      setAmount('');
      setDescription('');
      setType('income'); // Reset type to 'income' after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mx-auto w-3/4">
      <div className="mb-4 text-xl font-semibold">
        <h2 className="text-gray-700">Modify Expenses</h2>
      </div>
      <div className="mb-4">
        <input 
          type="text" 
          value={description} 
          placeholder="Description" 
          className="w-full p-3 rounded border border-gray-300 mb-2" 
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
          type="number" 
          value={amount} 
          placeholder="Amount (R)" 
          className="w-full p-3 rounded border border-gray-300 mb-2" 
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-3 rounded border border-gray-300 mb-2"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button type="submit" className="bg-green-500 px-4 py-2 text-white rounded shadow-md">
          Add Transaction
        </button>
        <button 
          type="reset" 
          onClick={() => { 
            setDescription(''); 
            setAmount(''); 
            setType('income'); // Reset the type when clearing the form
          }} 
          className="bg-red-500 px-4 py-2 text-white rounded shadow-md"
        >
          Clear
        </button>
      </div>
    </form>
  );
};
