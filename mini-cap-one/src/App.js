import React, { useState } from 'react'
import UserForm from "./components/FormUI/UserForm";
import UserList from "./components/UserData/UserList";

let userObject = [
  {name: 'Somer', age: '47'},
  {name: 'Chase', age: '17'},
]
function App() {


  const [userData, setUserData] = useState(userObject)
  const addUser = (user) => {
    console.log(`User added: ${user.name} is ${user.age} years old`)
    setUserData((prev) => { return [user, ...prev]})
  }

  return (
    // <> or <React.Fragment> is a fragment that allows return without extra HTML tags
    <> 
      <h3>User Form</h3>
      <UserForm onSubmission={addUser} />
      <UserList list={userData} />
      
    </>
  );
}

export default App;
