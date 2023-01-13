import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
function App() {

  const [showP, setShowP] = useState(false)
  const [allowTog, setAllowTog] = useState(false)

  console.log('APP RAN')
  const toggleP = useCallback(() => {
    if(allowTog){
      setShowP(prev => !prev)
    }
    }, [allowTog])
    
  const allowTogHandle = () =>{
    setAllowTog(true)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowTogHandle}>Allow Toggle</Button>
      <Button onClick={toggleP}>Show Paragraph</Button>
      <DemoOutput show={showP} />
    </div>
  );
}

export default App;
