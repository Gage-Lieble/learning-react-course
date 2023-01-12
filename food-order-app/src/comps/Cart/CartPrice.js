
import React, {useContext} from "react"
import PriceContext from "../../conts/price-context"

const CartPrice = () => {
    const ctx = useContext(PriceContext)
    let totalCount = 0
    for(let i = 0; i < ctx.length; i++){
        let prices = ctx[i].item.price
        totalCount += prices * ctx[i].amount
        
    }

    return (
        <>
        <h2>Total: {Intl.NumberFormat('en-US', {style:'currency', currency: 'USD'}).format(totalCount)}</h2>
        </>
    )
}

export default CartPrice