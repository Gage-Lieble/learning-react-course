import React, {useState} from 'react'
import MenuList from './comps/Menu/MenuList';
import NavBar from './comps/UI/Nav/NavBar';
import CartModal from './comps/Cart/CartModal';
import PriceContext from './conts/price-context';

let menuArray = [
  {name: 'The Western Bacon Burger', price: 6.79, ingrs:'100% beef patty, three stripes of bacon, topped with American cheese and deep fried, crispy onions.'},
  {name: 'The Bare Burger', price: 4.79, ingrs:'100% beef patty, freshly chopped lettuce and tomato, with sliced red onion on top.'},
  {name: 'The Clucker!', price: 6.79, ingrs:'Crispy deep fried chicken thigh, sliced pickles, and our secret house ranch, capped with a Brioche bun.'},
  {name: 'The True Fry', price: 3.25, ingrs:'Thinly cut potatoes, deep fried to a crispy shell, and seasoned heavily with salt.'},
  {name: 'BIG COLA', price: 1, ingrs:'1 size and thats it, Large!'},
 
  
]


function App() {
  

  const [cart, setCart] = useState([])
  const [open, setOpen] = useState('')
  
  const handleAddCart = (data) => {

    let isMatch = -2

    if(cart.length === 0){ // Checks if cart is empty
      setCart(prev => ([...prev, data]))
    }else{
      for(let i = 0; i<cart.length; i++){ 
        if(cart[i].item.name === data.item.name){ // looks for matching
            isMatch = i
            break
          }
        }

        if (isMatch > -1){ // if match is found, updates amount
          let amountUpdate = Number(cart[isMatch].amount) + Number(data.amount)
          cart[isMatch].amount = amountUpdate            
        }else{ // if not found, appends item
          setCart(prev => ([...prev, data]))
        }
        
      
    }
    
  }

  const handleAmountChange = (index, which) => {
    
    if(which === 'add'){
      let newAmount = Number(cart[index].amount) + 1
      cart[index].amount = String(newAmount)
    }else{
      let newAmount = Number(cart[index].amount) - 1
      if (newAmount > 0){
        cart[index].amount = String(newAmount)
      }else{
        cart.splice(index, 1)
      }
    }

  }

  const viewCart = (command) => {
  
    setOpen(command)
  }
  return (
    <>
    <NavBar cartMenu={viewCart} /> 
    <div className="App">
    
    <MenuList menuList={menuArray} userCart={handleAddCart} />
    <PriceContext.Provider value={cart}>
      <CartModal userCart={cart} open={open} close={viewCart} changeAmount={handleAmountChange}/>
    </PriceContext.Provider>
  
    </div>
    
    </>
  );
}

export default App;
