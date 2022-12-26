
import './Expenses.css'
import Card from "../UI/Card"
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import React, { useState } from 'react'
import ExpensesList from "./ExpensesList"

function Expenses(props){
    
    
    const [date, setDate] = useState('2022')

    const getDate = (data) => {
        setDate(data)
    }
   
    const filterExpenses = props.array.filter(expense => {
        
        return expense.date.getFullYear().toString() === date
    })


     return (
        <div>
        <Card className="expenses">
        <ExpenseFilter selected={date}  gatherDate={getDate}/>
        {<ExpensesList items={filterExpenses}/>}
        </Card>

        </div>
    )
}

export default Expenses