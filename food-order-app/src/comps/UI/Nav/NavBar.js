
import ButtonBase from "../ButtonBase"

const NavBar = (props) => {

    const openCart = () => {
        props.cartMenu('open')
    }   
    return (
        <div>
            <h2>Meals</h2> <ButtonBase btnName={"View Cart"} action={openCart}/>
        </div>
    )
}

export default NavBar