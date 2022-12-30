import React, { useState, useRef} from 'react';
import './UserForm.css'
import ErrorModal from './ErrorModal';


const UserForm = (props) => {

    const nameInputRef = useRef()
    const ageInputRef = useRef()


    const [showModal, setShowModal] = useState('false')
    const [ageTester, setAgeTester] = useState('')
    const handleForm = (event) =>{
        event.preventDefault();
    
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value

        if(enteredName === '' || enteredAge === ''){
            setShowModal('true')
        }
        else if(enteredAge < 0){
            setShowModal('true')
            setAgeTester('error')
        }
        else{
            setShowModal('false')
            const resultsData = {
                name: enteredName,
                age: enteredAge,
            }
            props.onSubmission(resultsData)

            
        }
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''


    }

    return(
        <div className="form-wrap">
            <div className={showModal}>
                <ErrorModal showModal={setShowModal} ageTest={ageTester} ageHook={setAgeTester}/>
            </div>
            <form onSubmit={handleForm} className="form-wrap">
                <label htmlFor="username">Name</label>
                <input ref={nameInputRef} type='text' name="username" id="username" autoComplete="off" />
                <label htmlFor="age">Age(Years)</label>
                <input ref={ageInputRef} type='text' name="age" id="age" autoComplete="off"/>
                <input  type="submit"/>
            </form>
        </div>
    )
}

export default UserForm