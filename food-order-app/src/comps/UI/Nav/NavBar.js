
import ButtonBase from "../ButtonBase"
import './NavBar.css'
const NavBar = (props) => {

    const openCart = () => {
        props.cartMenu('open')
    }   
    return (
        <div id="nav-wrap">
            <h2>REACTIVE MEALS</h2> <ButtonBase btnName={"View Cart"} action={openCart}/>
        </div>
    )
}

export default NavBar