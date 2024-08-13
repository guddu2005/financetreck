// import { useDispatch, useSelector } from "react-redux";
// import { deleteTransaction } from "../features/transaction/TransactionSlice";
// import { TransactionItem } from "../components/TransactionItem";

// export const TransactionList = () => {
//     const transactions = useSelector((state) => state.transactions);
//     const filter = useSelector((state) => state.filter);
//     const dispatch = useDispatch();

//     const filteredTxns = transactions.filter(
//         (txn) => filter === "all" || txn.type === filter
//     );

//     return (
//         <ul className="space-y-2 ">
//             {filteredTxns.map((txn) => (
//                 <TransactionItem
//                     key={txn.id}
//                     transaction={txn}
//                     onDelete={() => dispatch(deleteTransaction(txn.id))}
//                 />
//             ))}
//         </ul>
//     );
// };

import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../features/transaction/TransactionSlice";
import { TransactionItem } from "./TransactionItem";

export const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTxns = transactions.filter(
    (txn) => filter === "all" || txn.type === filter
  );

  return (
    <ul className="bg-white rounded-lg shadow-md p-6 mx-auto w-3/4 mt-8">
      {filteredTxns.map((txn) => (
        <TransactionItem
          key={txn.id}
          transaction={txn}
          onDelete={() => dispatch(deleteTransaction(txn.id))}
        />
      ))}
    </ul>
  );
};

