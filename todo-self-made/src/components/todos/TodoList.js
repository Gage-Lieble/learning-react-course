import TodoItem from "./TodoItem"

const TodoList = (props) => {
  
    let itemContent = <h4>You have no todos! maybe add some?</h4>

    if(props.items.length > 0){
        itemContent = props.items.map((item) => {
            if(item.complete){
                return(<TodoItem text={item.text} key={Math.random()} bool={item.complete.toString()} onSub={props.onSub}/>)
            }else{
                return(<TodoItem text={item.text} key={Math.random()} bool={item.complete.toString()} onSub={props.onSub} />)
            }})
    }
    return(
        
        <ul>
           {itemContent}
        </ul>
    )
}

export default TodoList