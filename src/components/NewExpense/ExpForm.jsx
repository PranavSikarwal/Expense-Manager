import React, { useState } from "react";
import "./ExpForm.css";

let time = Date.now();
let currentDate = new Date(time);



const ExpForm = (props) => {
  //Note: Callback Method to update is best suited for useState setUpdate functions, as it creates a callback.

  const [inpData, setInputData] = useState({
    title: "",
    amount: '',
    date: currentDate,
  });
  console.log(inpData);
  const titleHandler = (event) => {
    //method1 - CallBack method : using callback to update, always works best
    setInputData((prevData) => {
      return { ...prevData, title: event.target.value };
    });
  };
  const amountHandler = (event) => {
    // method2: directly passing new obj, may not work, use only callback method
    // inpData.amount = event.target.value;
    // setInputData(inpData);

    //callback Method:-
    setInputData((prevData) => {
      return { ...prevData, amount: event.target.value };
    });
  };
  const dateHandler = (event) => {
    setInputData((prevData) => {
      return { ...prevData, date: new Date(event.target.value) };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //prevents reload of page on form submission
    props.onSaveExpenseData(inpData);
    
    inpData.title = "";
    inpData.amount = '';
    inpData.date = '';
    setInputData((prevData) => {
        return { ...inpData };
    });
  };
  let validDate;
  try{
    validDate = inpData.date.toISOString().slice(0, 10);
  } catch(error){
    console.log(error);
    validDate= '';
  }

  return (
    <form className="ExpForm" onSubmit={submitHandler}>
      <div className="formItem">
        <label htmlFor="Title">Title</label>
        <input 
          required
          type="text"
          id="Title"
          value={inpData.title}
          onChange={titleHandler}
        />
      </div>
      <div className="formItem">
        <label htmlFor="Amount">Amount</label>
        <input
          required 
          type="number"
          id="Amount"
          step="0.01"
          value={inpData.amount}
          onChange={amountHandler}
        />
      </div>
      <div className="formItem">
        <label htmlFor="Date">Date</label>
        <input 
          required 
          type="date"
          value= {validDate}
          id="Date"
          onChange={dateHandler}

        />
      </div>
      <button type="submit" className="formItem">
        Add Expense
      </button>
      <button onClick={props.onCancelBtn}>
        Cancel
      </button>
    </form>
  );
};

export default ExpForm;
