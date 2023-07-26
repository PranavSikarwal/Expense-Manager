import './App.css';
import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  {
    id: 'e1',
    date: new Date(2023,5,21),
    title: "Coffee",
    amount: 10
  },
  {
    id: 'e2',
    date: new Date(2023,7,1),
    title: "Toffee",
    amount: 2
  }
]

function App() {
  const [expenses,setExpenses] = useState(dummyExpenses);

  const onSaveExpense = (expenseData)=>{
    setExpenses(prevExpenses =>{
      return [expenseData, ...prevExpenses];
    } )
  }

  return (
    <div className="App" >
      <NewExpense onNewExpense={onSaveExpense} />
      <Expenses expenses= {expenses} />
    </div>
  );
}

export default App;
