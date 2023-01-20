import {useState, useEffect} from "react";

// Custom hooks must begin with "use"
const useCounter = (add=true) => {
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(add){
            setCounter((prev) => prev + 1);
        } else {
            setCounter((prev) => prev - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [add]);

  
  return counter
}

export default useCounter