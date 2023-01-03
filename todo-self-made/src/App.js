import React, {useState} from 'react'
import TodoList from "./components/todos/TodoList";
import AddTodo from './components/form/AddTodo';


let todoList = [
  {'text': 'apples', 'complete': false},
  {'text': 'pineapples', 'complete': false},
  {'text': 'oranges', 'complete': false},
  {'text': 'pears', 'complete': false},
]

function App() {

  const [changeComplete, setChangeComplete] = useState(todoList)

  const handleSwitch = (data) =>{
    

    if(data[2] === 'com'){
      for (let i = 0; i < changeComplete.length; i++){
        if(changeComplete[i].text === data[1]){
  
            const listItem = changeComplete[i]
            listItem.complete = (data[0] === "false")
            setChangeComplete((prev) => {return [...prev]})
        }
      }
      
    }else{
      setChangeComplete((prev) => {
        const newArray = prev.filter(item => item.text !== data[1]);
        return newArray;
      })
    }

    
  }

  const addTodo = (data) => {
    setChangeComplete((prev) => {return [{'text':data, 'complete': false},...prev]})
  }

  return (
    <div className="App">
      <h3>Todo List!</h3>
      <AddTodo func={addTodo}/>
      <TodoList items={changeComplete} onSub={handleSwitch}/>
    </div>
  );
}

export default App;
