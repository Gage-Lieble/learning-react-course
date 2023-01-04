import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';
import InputComp from '../Input/Input';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContxt from '../../context/auth-context';


const emailReducer = (state, action) => {
  // action is passed from "dispatchEmail" and is an object containting 'type' and 'val'. dispatchEmail runs the 'emailReducer' function
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')}
  }else if (action.type === 'INPUT_BLUR'){
    // state is the last stored state
    return {value: state.value, isValid: state.value.includes('@') }
  }
  return {value: '', isValid: null}

};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6}
  }else if (action.type === 'INPUT_BLUR'){
    // state is the last stored state
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value: '', isValid: null}
}
const Login = () => {
  const ctx = useContext(AuthContxt)

  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValid: null})
      // reg state, passes action to func,    receives action and returns new state, Default state

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value:'', isValid: null})
  console.log(emailState)

  useEffect(() => {
    const indentifier = setTimeout(() => {
      console.log('checking')
      setFormIsValid(
        passwordState.isValid && emailState.isValid
      );
    }, 500)
    return () => {
      clearTimeout(indentifier)
      console.log('clean-up')
    };
  }, [emailState.isValid, passwordState.isValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    }else if(!emailState.isValid){
      emailInputRef.current.focus()
    }else{
      passwordInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       
          <InputComp ref={emailInputRef} type='email' id='email' val={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} label="E-mail" isValid={emailState.isValid}/>
    
        
          <InputComp ref={passwordInputRef} type={'password'} id={'password'} val={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} label="Password" isValid={passwordState.isValid}/>
      
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
