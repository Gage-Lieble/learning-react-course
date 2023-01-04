import React, {useState, useEffect} from 'react'

const AuthContxt = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}, // Good for IDE auto complete
    onLogin: (email, password) => {},
});

export const AuthContxtProvider = (props) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUser =  localStorage.getItem('isLoggedIn')
      
        if (storedUser === '1' ){
          setIsLoggedIn(true)
        }
        
      }, [])


    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }
    return <AuthContxt.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContxt.Provider>
}

export default AuthContxt