import React, { useState} from 'react';
import './UserForm.css'

const UserForm = (props) => {

    const [nameUser, setNameUser] = useState('')
    const [ageUser, setAgeUser] = useState('')

    const nameChange = (event) => {
        setNameUser(event.target.value)
    }
    
    const ageChange = (event) => {
        setAgeUser(event.target.value)
    }


    const handleForm = (event) =>{
        
        event.preventDefault();
        
        const resultsData = {
            name: nameUser,
            age: ageUser,
        }
        props.onSubmission(resultsData)
    }
    return(


        <form onSubmit={handleForm} className="form-wrap">
            <label htmlFor="username">Username</label>
            <input type='text' value={nameUser} onChange={nameChange} name="username" id="username" />
            <label htmlFor="age">Age(Years)</label>
            <input type='text' value={ageUser} onChange={ageChange} name="age" id="age" />
            <input type="submit"/>
        </form>
    )
}

export default UserForm