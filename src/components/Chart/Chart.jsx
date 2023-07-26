import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props)=>{
    const valuedData = props.chartData.map(data=> data.value);
    const maxValue = Math.max(...valuedData);
    return (
        <div className="chart">
            {props.chartData.map(data=> <ChartBar 
                key = {data.label} 
                label = {data.label} 
                value = {data.value}
                maxValue = {maxValue} 
            />)}
        </div>
    );

}

export default Chart;