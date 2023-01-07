import React from 'react'
import ButtonBase from "../UI/ButtonBase"
import CartPrice from "./CartPrice"
import './CartModal.css'


const CartModal = (props) => {
    
    const closeCart = () => {
    
        props.close('')
    }


    let cartContent = <h2>Your cart is empty.</h2>
    if(props.userCart.length > 0){
        cartContent =  props.userCart.map((item) => (
                <span className="item-wrap" key={Math.random()}>
                    {item.item.name}
                    ${item.item.price}
                    <ButtonBase btnName={"+"}/>
                    <ButtonBase btnName={"-"}/>
                    {item.amount}
                </span>
        ))
    }


    return (
        <>
        <div id="modal-back" className={props.open}></div>
            <div id="modal-wrap" className={props.open}>
                
                <h2>Your Cart</h2>
                {cartContent}

                <CartPrice userCart={props}/>
                <div id="cart-btn-wrap">
                    <ButtonBase btnName={"Close"} action={closeCart}/>
                    <ButtonBase btnName={"Order"} action={() => {console.log('Order Sent! See you soon.')}}/>
                </div>

            </div>
            </>
    )
}

export default CartModal