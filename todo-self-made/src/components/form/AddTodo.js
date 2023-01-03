import React, {useRef, useState} from 'react'
import './AddTodo.css'
const AddTodo = (props) => {

   
    const todoText = useRef()
    const [errorClass, setErrorClass] = useState('')
    const addTodoHandler = (event) => {
        event.preventDefault()
        let value = todoText.current.value
        
        if(value.length < 3){
            console.log('too short')
            setErrorClass('error')
        }else{
            props.func(value)
            setErrorClass('')
            
        }
        todoText.current.value = ''
    }
    return(
        <form onSubmit={addTodoHandler}>
            <input maxLength="30" id="add-todo-inp" className={errorClass} ref={todoText} type="text" />
            <button type="submit">Add</button>
            <h5 className={errorClass} id='len-error-msg'>must be 3+ characters</h5>
        </form>
    )
}

export default AddTodo