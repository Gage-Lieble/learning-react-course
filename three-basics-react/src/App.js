import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 200, date: new Date(2022, 4, 20)},
    {title: 'Groceries', amount: 500, date: new Date(2022, 4, 10)},
    {title: 'Rent', amount: 1700, date: new Date(2022, 4, 1)},
    {title: 'Utilities', amount: 100, date: new Date(2022, 4, 2)},
  ]

  return (
    <div className="App">
      <h1>React Basics</h1>
      <p>This is section 3 from the udemy course I'm following!</p>
      <ExpenseItem title={expenses[0].title}amount={expenses[0].amount}date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title}amount={expenses[1].amount}date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title}amount={expenses[2].amount}date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title}amount={expenses[3].amount}date={expenses[3].date}/>
      
    </div>
  );
}

export default App;
