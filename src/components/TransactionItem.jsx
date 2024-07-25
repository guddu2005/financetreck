export const TransactionItem =({transaction , onDelete})=>{
    return (
        
        <li className={`flex items-center  text-center  justify-around p-2 rounded ${
            transaction.type ==="income" ? 'bg-slate-200' :'bg-orange-100'
        }`}
        >
            <span>{transaction.amount}</span>
            <span>{transaction.description}</span>
            <button onClick={onDelete} className="text-white bg-red-500 p-2 rounded">
                Delete Txn
            </button>
        </li>
    )
}
