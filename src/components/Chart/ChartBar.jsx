import React from 'react';
import './ChartBar.css'

// style={{ attributes-here }}

const ChartBar = (props)=>{
    let barWidth = '0%'
    if (props.maxValue>0){
        barWidth = ((props.value/props.maxValue)*100) + '%'; 
    }
    console.log(barWidth);
    
    return (
        <div className="barCover">
            <div className="outerBar">
                <div className="barFilling" style={{height: barWidth}}>

                </div>
            </div>
            <label>{props.label}</label>
        </div>
    );

}

export default ChartBar;