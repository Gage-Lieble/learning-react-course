
import './TodoItem.css'
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
        <li className={`todo-wrap ${props.bool.toString()}`}>
            
            <h4>{props.text}</h4>
            <div>
                <form onSubmit={completeSwitch}>
                    {props.bool === 'true' ? (
                        <button type='submit' value={[props.bool, props.text, 'com']}>Incomplete</button>
                        ):(
                            <button type='submit' value={[props.bool, props.text, 'com']}>Complete</button>
                            )
                            
                        }
                </form>
                <form onSubmit={deleteTodo}>
                        <button id="del-btn" type="submit" value={[props.bool, props.text, 'del']}>X</button>
                </form>

            </div>
        </li>
    )
}

export default TodoItem