


const CartPrice = (props) => {
    let totalCount = 0
    for(let i = 0; i < props.userCart.userCart.length; i++){
        let prices = props.userCart.userCart[i].item.price
        totalCount += prices * props.userCart.userCart[i].amount
        
    }

    return (
        <>
        <h3>Total: ${totalCount}</h3>
        </>
    )
}

export default CartPrice