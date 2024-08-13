// import { useDispatch, useSelector } from "react-redux"


// const expense = (state) =>{
//   return state.filter((transaction)=> transaction.type !== 'income')
// }
// const income = (state) => {
//   return state.filter((transaction) => transaction.type === 'income')
// }
// export const Summary = () => {
//   const transactions = useSelector((state) => state.transactions);
//   const incometransactions = income(transactions);
//   const incomSum = incometransactions.reduce((sum , transaction) => sum+transaction.amount , 0)
//   const expenseTransactions = expense(transactions);
//   const expenseSum  = expenseTransactions.reduce((sum , transaction) => sum+transaction.amount , 0);

//   if(incomSum - expenseSum <0){
//     alert('Paisa bachao Yrr!')
//   }

//   return (
//     <div className="container mt-10 p-5 w-96 rounded ml-5  text-lg shadow-md bg-slate-300">
//       <h1 className="  text-2xl">Summary</h1>
//       <p> Income: {incomSum} </p>
//       <p>Expense: {expenseSum}</p>
//       <p>Balance: {incomSum-expenseSum}</p>
//     </div>
//   )
// }

import { useSelector } from "react-redux";

export const Summary = () => {
  const transactions = useSelector((state) => state.transactions);
  const incomeSum = transactions
    .filter((txn) => txn.type === "income")
    .reduce((sum, txn) => sum + txn.amount, 0);
  const expenseSum = transactions
    .filter((txn) => txn.type !== "income")
    .reduce((sum, txn) => sum + txn.amount, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto w-3/4 mt-8 text-center">
      <h2 className="text-xl font-semibold text-gray-700">EXPENSES TOTAL:</h2>
      <p className="text-2xl font-bold text-gray-800">R {incomeSum - expenseSum}</p>
    </div>
  );
};
