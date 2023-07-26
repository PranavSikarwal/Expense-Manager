import React from 'react';
import Chart from './Chart';
import Card from '../UI/Card';

import './ExpenseChart.css'

const ExpenseChart = (props)=>{
    const chartData = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0}
    ]
    for (let expense of props.expensesData){
        chartData[expense.date.getMonth()].value += expense.amount;
    }
    console.log(chartData);
    return (
        <Card className='expenseChart'>
            <Chart chartData= {chartData}/>
        </Card>
    );
}

export default ExpenseChart;