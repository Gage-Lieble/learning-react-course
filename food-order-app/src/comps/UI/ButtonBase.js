

const ButtonBase = (props) => {
    return(
        <button type={props.type} onClick={props.action} value={props.value}>{props.btnName}</button>
    )
}

export default ButtonBase