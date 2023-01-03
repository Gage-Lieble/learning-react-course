import TodoItem from "./TodoItem"

const TodoList = (props) => {
    return(
        
        <ul>
           {props.items.map((item) => {
            if(item.complete){
                return(<TodoItem text={item.text} key={Math.random()} bool={item.complete.toString()} onSub={props.onSub}/>)
            }else{
                return(<TodoItem text={item.text} key={Math.random()} bool={item.complete.toString()} onSub={props.onSub} />)
            }})}
        </ul>
    )
}

export default TodoList