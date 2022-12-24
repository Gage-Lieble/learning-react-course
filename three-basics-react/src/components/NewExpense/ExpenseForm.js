import './ExpenseForm.css'
import React, { useState} from 'react';

const ExpenseForm = () => {

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
        event.preventDefault(); // Disables page reload on submit

        const formData = {
            title: userTitle,
            amount: userAmount,
            date: new Date(userDate),
        }
        console.log(formData)

    }   

    return (

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
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