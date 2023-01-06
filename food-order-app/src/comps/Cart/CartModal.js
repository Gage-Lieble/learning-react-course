import React from 'react'
import ButtonBase from "../UI/ButtonBase"
import CartPrice from "./CartPrice"
import './CartModal.css'


const CartModal = (props) => {
    
    const closeCart = () => {
    
        props.close('')
    }
    return (
        <div id="modal-wrap" className={props.open}>
            
            <h2>Your Cart</h2>

            {props.userCart.map((item) => (
                <span className="item-wrap" key={Math.random()}>
                    {item.item.name}
                    ${item.item.price}
                    <ButtonBase btnName={"+"}/>
                    <ButtonBase btnName={"-"}/>
                    {item.amount}
                </span>
            ))}
            <CartPrice userCart={props}/>
            <div id="cart-btn-wrap">
                <ButtonBase btnName={"Close"} action={closeCart}/>
                <ButtonBase btnName={"Order"} action={() => {console.log('Order Sent! See you soon.')}}/>
            </div>

        </div>
    )
}

export default CartModal