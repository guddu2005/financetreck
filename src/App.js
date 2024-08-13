import { Provider } from "react-redux";
import { Store } from "./app/Store";
import Header from './components/Header'
import {AddTransaction}  from "./components/AddTransaction";
import { TransactionList } from "./components/TransactionList";
import { Filter } from "./components/Filter";
import { Summary } from "./components/Summary";
function App() {
  return (
    <Provider store={Store} className="bg-gray-200 min-h-screen py-10">
      {/* <Header/>
      <AddTransaction/>
      <Filter/>
      <TransactionList/>
      <Summary/>  */}
       <Header />
      <Summary />
      <AddTransaction />
      <Filter />
      <TransactionList />
    </Provider>
  );
}


export default App;