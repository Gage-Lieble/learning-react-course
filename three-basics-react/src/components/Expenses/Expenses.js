import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "../UI/Card"
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import React, { useState } from 'react'

function Expenses(props){
    
    const [date, setDate] = useState('2020')

    const getDate = (data) => {
        setDate(data)
    }
     return (
        <div>
        <Card className="expenses">
        <ExpenseFilter selected={date}  gatherDate={getDate}/>
            <ExpenseItem title={props.array[0].title}amount={props.array[0].amount}date={props.array[0].date}/>
            <ExpenseItem title={props.array[1].title}amount={props.array[1].amount}date={props.array[1].date}/>
            <ExpenseItem title={props.array[2].title}amount={props.array[2].amount}date={props.array[2].date}/>
            <ExpenseItem title={props.array[3].title}amount={props.array[3].amount}date={props.array[3].date}/>
        </Card>

        </div>
    )
}

export default Expenses