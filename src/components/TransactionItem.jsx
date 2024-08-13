// export const TransactionItem =({transaction , onDelete})=>{
//     return (
        
//         <li className={`flex items-center  text-center  justify-around p-2 rounded ${
//             transaction.type ==="income" ? 'bg-slate-200' :'bg-orange-100'
//         }`}
//         >
//             <span>{transaction.amount}</span>
//             <span>{transaction.description}</span>
//             <button onClick={onDelete} className="text-white bg-red-500 p-2 rounded">
//                 Delete Txn
//             </button>
//         </li>
//     )
// }

import { Grow } from "@mui/material";

export const TransactionItem = ({ transaction, onDelete }) => {
  return (
    <Grow in={true}>
      <li
        className={`flex items-center justify-around text-center p-4 mb-2 rounded shadow-md ${
          transaction.type === "income" ? "bg-slate-200" : "bg-orange-100"
        }`}
      >
        <span className="font-semibold text-gray-800">{transaction.description}</span>
        <span className="font-bold text-gray-700">R {transaction.amount}</span>
        <button
          onClick={onDelete}
          className="text-white bg-red-500 px-3 py-1 rounded-full hover:bg-red-600 transition duration-200 ease-in-out"
        >
          Delete Txn
        </button>
      </li>
    </Grow>
  );
};
