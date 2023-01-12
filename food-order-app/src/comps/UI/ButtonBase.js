import './Button.css'

const ButtonBase = (props) => {
    return(
        <button className={props.className} id={props.id} type={props.type} onClick={props.action} value={props.value}>{props.btnName}</button>
    )
}

export default ButtonBase