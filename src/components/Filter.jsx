import { useDispatch } from "react-redux"
import { setFilter } from "../features/filter/filterSlice";
export const Filter = () => {
    const dispatch = useDispatch();

   const handleclick =(e)=>{
   dispatch(setFilter(e.target.value))
   }


    return (
        <div className="text-center flex justify-around mx-aotu">
            <select name="" id="" className="h-10 mb-5 p-2 bg-slate-400 rounded text-white  w-32 "
            onChange={handleclick}
            >
                <option value="all" >All</option>
                <option value="income" >Income</option>
                <option value="expense" >Expense</option>
            </select>
        </div>

    )
}