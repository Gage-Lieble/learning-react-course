import {useState} from 'react'

const SimpleInput = (props) => {

  const [name, setName] = useState('')
  const [tochedName, setTouchedName] = useState(false)


  const enteredNameIsValid = name.trim() !== ''
  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }
  
  const BlurHandler = () => {
    setTouchedName(true)
  }
  
  const formSubHandler = (event) => {
    event.preventDefault()

    setTouchedName(true)
    if(!enteredNameIsValid){
      console.log('error')
      return
    }
    console.log(name)
    setName('')
    setTouchedName(false)
  }
  const nameIsInValid = !enteredNameIsValid && tochedName // checks if user has enter anything

  const nameClass = nameIsInValid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
    
        <input value={name} type='text' id='name' onChange={nameChangeHandler} onBlur={BlurHandler}/>
        {nameIsInValid && <p className='error-text'>error empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
