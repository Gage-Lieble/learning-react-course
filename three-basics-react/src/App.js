import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from 'react'

const DUMMY_DATA = [
  {title: 'Car Insurance', amount: 200, date: new Date(2022, 4, 20)},
  {title: 'Groceries', amount: 500, date: new Date(2022, 4, 10)},
  {title: 'Rent', amount: 1700, date: new Date(2022, 4, 1)},
  {title: 'Utilities', amount: 100, date: new Date(2022, 4, 2)},
]

function App() {

  const [expeneses, setExpenses] = useState(DUMMY_DATA)

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => { return [expense, ...prev]})
  }
  return (
    <div className="App">
      <h1>React Basics</h1>
      <p>This is section 3 from the udemy course I'm following!</p>

      <NewExpense onExpenseSubmission={addExpenseHandler}/>
      <Expenses array={expeneses}/>
      
      
      
    </div>
  );
}

export default App;
