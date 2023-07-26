import React, { useState } from "react";
import ExpForm from "./ExpForm";
import Card from "../UI/Card";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onEditingButton = ()=>{
    setIsEditing(true);
  }
  const onCancel = (event)=>{
    // event.preventDefault();
    setIsEditing(false);
  }
  const onSaveNewExpense = (expenseData) => {
    const transformedData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(transformedData);
    setIsEditing(false);
  };
  return (
    <Card className="NewExpense">
      {!isEditing && <div className="divAddBtn"><button onClick={onEditingButton}>Add New Expense</button></div>}
      {isEditing && <ExpForm onCancelBtn={onCancel} onSaveExpenseData={onSaveNewExpense} />}
      
    </Card>
  );
};

export default NewExpense;
