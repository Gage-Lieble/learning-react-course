


const CartPrice = (props) => {
    
    console.log(props.userCart.userCart)
    let totalCount = 0
    for(let i = 0; i < props.userCart.userCart.length; i++){
        let prices = props.userCart.userCart[i].item.price
        totalCount += prices * props.userCart.userCart[i].amount
        
    }

    return (
        <>
        <div>{totalCount}</div>
        </>
    )
}

export default CartPrice