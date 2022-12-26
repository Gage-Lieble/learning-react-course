import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    return (
        <div className='chart'>
            {props.dataBars.map(dataBars => <ChartBar value={dataBars.value} maxValue={null} label={dataBars.label} key={dataBars.label}/>)}
        </div>
    )
}   

export default Chart