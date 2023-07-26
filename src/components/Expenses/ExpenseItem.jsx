import React from 'react';
import Card from "../UI/Card";
import './ExpenseItem.css';

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', {month: "long"});
    const day = props.date.toLocaleString('en-US', {day: "2-digit"});
    const year = props.date.getFullYear();

  return (
    <Card className="expenseItem">
        <div className="dateTitleCover">
      <div className='dateItem'>
        <div className='expensesMonth'>{month}</div>
        <div className='expensesDay'>{day}</div>
        <div className='expensesYear'>{year}</div>
      </div>
      <div className="titleItem">{props.title}</div>
      </div>
      <div className="amountItem">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
