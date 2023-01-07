import React, {useState} from 'react'
import MenuList from './comps/Menu/MenuList';
import NavBar from './comps/UI/Nav/NavBar';
import CartModal from './comps/Cart/CartModal';

let menuArray = [
  {name: 'Cheese Burger', price: 5.55, ingrs:'Classic American burger with cheese'},
  {name: 'Ham Burger', price: 4.55, ingrs:'Classic American burger'},
  {name: 'Chicken Sandwhich', price: 6.05, ingrs:'Southern fried goodness'},
  {name: 'Loaded Hot Dawg', price: 3.55, ingrs:'Tasty and loaded'},
  {name: 'Plain Hot Dawg', price: 2.55, ingrs:'Tasty and dry'},
]


function App() {
  
  const [cart, setCart] = useState([])
  const [open, setOpen] = useState('')

  const handleAddCart = (data) => {
    setCart(prev => ([...prev, data]))
  }

  const viewCart = (command) => {
    setOpen(command)
  }
  return (
    <div className="App">
    <NavBar cartMenu={viewCart} /> 
    <div id="desc-wrap">
      <h2>Food</h2>
    </div>

    <MenuList menuList={menuArray} userCart={handleAddCart} />


    <CartModal userCart={cart} open={open} close={viewCart}/>
    
    </div>
  );
}

export default App;

// Menu list with add to cart buttons, amount, price, title, ingredients

// Cart modal with close/order button, amount changer, title, price, amount

