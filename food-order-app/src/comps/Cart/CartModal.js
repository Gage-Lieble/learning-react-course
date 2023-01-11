import React from 'react'
import ButtonBase from "../UI/ButtonBase"
import CartPrice from "./CartPrice"
import './CartModal.css'


const CartModal = (props) => {
    
    const closeCart = () => {
    
        props.close('')
    }

    const addAmount = (item) => {
        console.log('Add')
        console.log(item)
    }
    const subAmount = (item) => {
        console.log('Add')
    }


    let cartContent = <h2 id="empty-msg">Your cart is empty.</h2>
    if(props.userCart.length > 0){
        cartContent =  props.userCart.map((item) => (
                <span className="item-wrap" key={Math.random()}>
                    <div className='left-content'>
                        <h3>{item.item.name}</h3>
                        <div>
                            <h4>${item.item.price}</h4>
                            <h4 className='item-amount-box'>X{item.amount}</h4>
                        </div>
                    </div>
                    <div>
                        <ButtonBase action ={addAmount} btnName={"+"}/>
                        <ButtonBase action ={subAmount} btnName={"-"}/>

                    </div>
                </span>
        ))
    }


    return (
        <>
        <div id="modal-back" className={props.open}></div>
            <div id="modal-wrap" className={props.open}>
                <h2>Your Cart</h2>
                {cartContent}

                <div id="cart-btn-wrap">
                    <CartPrice userCart={props}/>
                    <ButtonBase btnName={"Close"} action={closeCart}/>
                    <ButtonBase btnName={"Order"} action={() => {console.log('Order Sent! See you soon.')}}/>
                </div>

            </div>
            </>
    )
}

export default CartModal