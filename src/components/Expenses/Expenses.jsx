import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from '../Chart/ExpenseChart';
function Expenses(props) {
  
  const [selectedYear, setSelectedYear] = useState('2020');
  const onYearFilter = (year)=>{
    console.log(year);
    setSelectedYear(year);
  }
  const filteredExpenses = props.expenses.filter((expense)=> selectedYear == expense.date.getFullYear());
    
  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onYearFilter={onYearFilter} />
      <ExpenseChart expensesData= {filteredExpenses}/>
      {filteredExpenses.length===0 && <h2>No Expenses Found</h2>}
      {filteredExpenses.length!==0 && filteredExpenses.map(expense=>
      <ExpenseItem 
      key={expense.id}
      date={expense.date} 
      title={expense.title} 
      amount={expense.amount}/>
      )};
     
    </Card>
  );
}

export default Expenses;