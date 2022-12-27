import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const valueArray = props.dataBars.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...valueArray)

    return (
        <div className='chart'>
            {props.dataBars.map(dataBars => <ChartBar value={dataBars.value} maxValue={totalMax} label={dataBars.label} key={dataBars.label}/>)}
        </div>
    )
}   

export default Chart