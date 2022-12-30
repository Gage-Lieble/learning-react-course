import React, { useState} from 'react';
import './UserForm.css'
import ErrorModal from './ErrorModal';


const UserForm = (props) => {

    const [nameUser, setNameUser] = useState('')
    const [ageUser, setAgeUser] = useState('')
    const nameChange = (event) => {
        setNameUser(event.target.value)
    }
    const ageChange = (event) => {
        setAgeUser(event.target.value)
    }


    const [showModal, setShowModal] = useState('false')
    const [ageTester, setAgeTester] = useState('')
    const handleForm = (event) =>{
        event.preventDefault();
        if(nameUser === '' || ageUser === ''){
            setShowModal('true')
        }
        else if(ageUser < 0){
            setShowModal('true')
            setAgeTester('error')
        }
        else{
            setShowModal('false')
            const resultsData = {
                name: nameUser,
                age: ageUser,
            }
            props.onSubmission(resultsData)
        }

        setNameUser('')
        setAgeUser('')
    }

    return(
        <div className="form-wrap">
            <div className={showModal}>
                <ErrorModal showModal={setShowModal} ageTest={ageTester} ageHook={setAgeTester}/>
            </div>
            <form onSubmit={handleForm} className="form-wrap">
                <label htmlFor="username">Name</label>
                <input type='text' value={nameUser} onChange={nameChange} name="username" id="username" autoComplete="off" />
                <label htmlFor="age">Age(Years)</label>
                <input type='text' value={ageUser} onChange={ageChange} name="age" id="age" autoComplete="off"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default UserForm