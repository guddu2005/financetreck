import { useDispatch, useSelector } from "react-redux"


const expense = (state) =>{
  return state.filter((transaction)=> transaction.type !== 'income')
}
const income = (state) => {
  return state.filter((transaction) => transaction.type === 'income')
}
export const Summary = () => {
  const transactions = useSelector((state) => state.transactions);
  const incometransactions = income(transactions);
  const incomSum = incometransactions.reduce((sum , transaction) => sum+transaction.amount , 0)
  const expenseTransactions = expense(transactions);
  const expenseSum  = expenseTransactions.reduce((sum , transaction) => sum+transaction.amount , 0);

  if(incomSum - expenseSum <0){
    alert('Paisa bachao Yrr!')
  }

  return (
    <div className="container mt-10 p-5 w-96 rounded ml-5  text-lg shadow-md bg-slate-300">
      <h1 className="  text-2xl">Summary</h1>
      <p> Income: {incomSum} </p>
      <p>Expense: {expenseSum}</p>
      <p>Balance: {incomSum-expenseSum}</p>
    </div>
  )
}