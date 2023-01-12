
import ButtonBase from "../ButtonBase"
import './NavBar.css'
import logo from '../../../static/imgs/burger-logo.svg'
const NavBar = (props) => {

    const openCart = () => {
        props.cartMenu('open')
    }   
    return (
        <div id="nav-wrap">
           <span> <img id="burger-logo" src={logo} alt="burger-logo" /><h2>REACTIVE MEALS</h2></span> <ButtonBase btnName={"View Bag"} action={openCart}/>
        </div>
    )
}

export default NavBar