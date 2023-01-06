import React, {useState} from 'react'
import MenuList from './comps/Menu/MenuList';
import NavBar from './comps/UI/Nav/NavBar';
import CartModal from './comps/Cart/CartModal';

let menuArray = [
  {name: 'Burger', price: 7.50, ingrs:'Beef, Cheese, Lettuce, Tomato'},
  {name: 'Pizza', price: 6.50, ingrs:'Cheese, Peperoni, Olives'},
  {name: 'Taco', price: 2.50, ingrs:'Steal, Cheese, Tomato, Lettuce, Tortilla'},
]


function App() {
  
  const [cart, setCart] = useState([])

  const handleAddCart = (data) => {
    setCart(prev => ([...prev, data]))
  
  }
  return (
    <div className="App">
    <NavBar /> 
    <div id="desc-wrap">
      <h2>Food</h2>
    </div>

    <MenuList menuList={menuArray} userCart={handleAddCart} />


    <CartModal userCart={cart} />
    
    </div>
  );
}

export default App;

// Menu list with add to cart buttons, amount, price, title, ingredients

// Cart modal with close/order button, amount changer, title, price, amount

