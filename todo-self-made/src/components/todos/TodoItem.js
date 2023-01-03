// import React, {useState} from 'react'

const TodoItem = (props) => {


    const completeSwitch = (event) => {
        event.preventDefault();
        props.onSub(event.target[0].value.split(','))
    }
    const deleteTodo = (event) => {
        event.preventDefault();
        props.onSub(event.target[0].value.split(','))
    }
    return(
        <li>
            <form onSubmit={completeSwitch}>
                <h4>{props.text}</h4>
                {props.bool === 'true' ? (
                    <button type='submit' value={[props.bool, props.text, 'com']}>Incomplete</button>
                    ):(
                        <button type='submit' value={[props.bool, props.text, 'com']}>Complete</button>
                        )
                        
                    }
            </form>
            <form onSubmit={deleteTodo}>
                    <button type="submit" value={[props.bool, props.text, 'del']}>Delete</button>
            </form>
                <h5>Complete: {props.bool}</h5>
        </li>
    )
}

export default TodoItem