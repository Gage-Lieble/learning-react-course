import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "../UI/Card"

function Expenses(props){
    return (
        <Card className="expenses">
            <ExpenseItem title={props.array[0].title}amount={props.array[0].amount}date={props.array[0].date}/>
            <ExpenseItem title={props.array[1].title}amount={props.array[1].amount}date={props.array[1].date}/>
            <ExpenseItem title={props.array[2].title}amount={props.array[2].amount}date={props.array[2].date}/>
            <ExpenseItem title={props.array[3].title}amount={props.array[3].amount}date={props.array[3].date}/>
        </Card>
    )
}

export default Expenses