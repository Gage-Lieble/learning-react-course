import React, {useEffect, useState} from 'react'
import ButtonBase from "../UI/ButtonBase"
import CartPrice from "./CartPrice"
import './CartModal.css'



const CartModal = (props) => {
    
    const [updateCart, setUpdateCart] = useState(0)

    useEffect(() => {},[updateCart]) // Reloads cart after user changes amount


    const closeCart = () => {
    
        props.close('')
    }

    const addAmount = (item) => {
        
        setUpdateCart(Math.random())
        let targetItem = item.target.value
        let cartItems = props.userCart
        for(let i = 0; i < cartItems.length; i++){
            if(cartItems[i].item.name === targetItem){
                props.changeAmount(i, 'add')
            }
        }
    }
    const subAmount = (item) => {
        setUpdateCart(Math.random())
        let targetItem = item.target.value
        let cartItems = props.userCart
        for(let i = 0; i < cartItems.length; i++){
            if(cartItems[i].item.name === targetItem){
                props.changeAmount(i, 'sub')
            }
        }
    }


    let cartContent = <h2 id="empty-msg">Your bag is empty.</h2>
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
                    <div className='amount-btn-wrap'>
                        <ButtonBase action ={addAmount} btnName={"+"} value={item.item.name}/>
                        <ButtonBase action ={subAmount} btnName={"-"} value={item.item.name}/>

                    </div>
                </span>
        ))
    }

    let buttonColor = true

    if(props.userCart.length === 0){
        buttonColor = false
    }


    return (
        <>
        <div id="modal-back" className={props.open}></div>
            <div id="modal-wrap" className={props.open}>
                <h2>Your Cart</h2>
                {cartContent}
                <div id="cart-btn-wrap">
                    <CartPrice/>
                    <ButtonBase className={`btn-${!buttonColor}`} id="close-btn" btnName={"Close"} action={closeCart}/>
                    <ButtonBase className={`btn-${buttonColor}`} btnName={"Order"} action={() => {console.log('Order Sent! See you soon.')}}/>
                </div>

            </div>
            </>
    )
}

export default CartModal