import React, {useState} from 'react';

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
        
    }    
    return(
        <ul>
            {props.menuList.map((item, index) => (
                <li key={index}>{index} {item.name}, ${item.price}, {item.ingrs} <form onSubmit={submitHandler}><input onChange={handleAmount} type="number" min="0" /> <ButtonBase btnName={'Add To Cart'}  value={index}  type="submit" /> </form></li>
            ))
            }

        </ul>
    )
}

export default MenuList