import './ExpenseForm.css'
import React, { useState} from 'react';

const ExpenseForm = (props) => {



    const [userTitle, setUserTitle] = useState('')
    const [userAmount, setUserAmount] = useState('')
    const [userDate, setUserDate] = useState('')



    const titleChangeHandler = (event) => {
        setUserTitle(event.target.value) ;
    }

    const amountChangeHandler = (event) => {
        setUserAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setUserDate(event.target.value); 
    }

    const submitHandler = (event) => {
        console.log(event)
        event.preventDefault(); // Disables page reload on submit

        const formData = {
            title: userTitle,
            amount: +userAmount,
            date: new Date(userDate),
        }

        props.onSaveExpenseData(formData)

        // Resets form to blank after submission (2 way binding)
        setUserTitle('')
        setUserAmount('')
        setUserDate('')
        setExpandForm(false)

    }   

    const openForm = (event) => {
        event.preventDefault();
        setExpandForm(true)
    }

    const closeForm = (event) => {
        event.preventDefault();
        setExpandForm(false)
    }

    const [expandForm, setExpandForm] = useState(false)

    if(expandForm === false){
        return(
            <form onSubmit={openForm}>
                <button type="submit">Add Expense</button>
            </form>
        )
    }

    return (

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={userTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={userAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={userDate} min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={closeForm}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm







// When using 1 STATE hook instead of 3 separate ones

// const ExpenseForm = () => {

//     const [userInput, setUserInput] = useState({
//         userTitle: '',
//         userAmount: '',
//         userDate: '',
//     })

//     const titleChangeHandler = (event) => {
    
//         setUserInput((prev) => { // Use if STATE depends on previous state (combining multiple arrays)
//             return {...prev, userTitle: event.target.value}
//         })
//     }

//     const amountChangeHandler = (event) => {
   
//         setUserInput((prev) => { // Use if STATE depends on previous state (combining multiple arrays)
//             return {...prev, userAmount: event.target.value}
//         })
//     }

//     const dateChangeHandler = (event) => {
//         setUserDate(event.target.value) 


//         setUserInput((prev) => { // Use if STATE depends on previous state (combining multiple arrays)
//             return {...prev, userDate: event.target.value}
//         })
//     }
//     }   

//     return (

//         <form onSubmit={submitHandler}>
//             <div className='new-expense__controls'>
//                 <div className='new-expense__control'>
//                     <label>Title</label>
//                     <input type="text" onChange={titleChangeHandler} />
//                 </div>
//                 <div className='new-expense__control'>
//                     <label>Amount</label>
//                     <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
//                 </div>
//                 <div className='new-expense__control'>
//                     <label>Date</label>
//                     <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
//                 </div>
//             </div>
//             <div className='new-expense__actions'>
//                 <button type="submit" >Add Expense</button>
//             </div>
//         </form>
//     )
// }