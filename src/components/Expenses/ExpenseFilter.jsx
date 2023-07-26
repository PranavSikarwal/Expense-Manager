import React from 'react';
import './ExpenseFilter.css'

const ExpenseFilter = (props)=>{
    
    const onYearFilter = (event)=>{
        props.onYearFilter(event.target.value);
    }
    return (
        <div className='expenseFilter'>
            <div className='yearFilter'>
                <label>Filter By Year</label>
                <select value = {props.selected} name="year" id="year" onChange={onYearFilter}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;