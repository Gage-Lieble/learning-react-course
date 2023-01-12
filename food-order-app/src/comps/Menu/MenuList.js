import React, {useState} from 'react';
import './MenuList.css'
import ButtonBase from '../UI/ButtonBase';

const MenuList = (props) => {

    const [amountData, setAmountData] = useState()
    const handleAmount = (event) => {
        setAmountData(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        let itemIndex = event.target[1].value

        const cartItem = {
            item: props.menuList[itemIndex],
            amount: amountData
        }

        props.userCart(cartItem)
        let inputSelect = document.querySelector(`.input-${itemIndex}`)
        inputSelect.value = ''
    }    
    return(
        <div className='menu-wrap'>
            {props.menuList.map((item, index) => (
                <div className='menu-item' key={index}>
                    <div className='item-info'>
                        <h3>{item.name}</h3>  
                        <p className='ingred'>{item.ingrs}</p>
                         <h4 className='price'>${item.price}</h4>
                    </div> 
                    <div className='item-actions'>
                        <form onSubmit={submitHandler}>
                            <div className='amount-wrap'>
                                Amount <input className={`input-${index} amount-inp` } style={{width: '50px', marginBottom: '15px'}}onChange={handleAmount} type="number" min="1" required/>
                            </div> 
                            <ButtonBase btnName={'+ Add'}  value={index}  type="submit" /> 
                        </form>
                    </div>
                </div>
            ))
            }

        </div>
    )
}

export default MenuList