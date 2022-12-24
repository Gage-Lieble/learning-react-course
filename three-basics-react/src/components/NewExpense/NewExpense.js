import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{
    const SaveExpenseDataHandler = (userData) => {
        const formData = {
            ...userData,
            id: Math.random().toString()
        }
        props.onExpenseSubmission(formData)
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense