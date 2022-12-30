import ReactDom from 'react-dom'
import './ErrorModal.css'


const ModalOverlay = (props) => {
    return(
        <div className='modal-wrap'>
            <div>
                <h3 className='error-title'>Invalid input!</h3>
            </div>
            <div>
                <h4 className='error-msg'>{props.msg}</h4>
            </div>

            <button className='error-close' onClick={() => {props.showModal('false'); props.ageHook('')}}>close</button>
        </div>
    )
}
const ErrorModal = (props) => {

    let errorMsg = 'Please enter a value for each box (no empty values)'

    if (props.ageTest === 'error'){
        errorMsg = "I know you're older than that. try again!"
        
    }
    return(
        <>
        {ReactDom.createPortal(<ModalOverlay msg={errorMsg} showModal={props.showModal} ageHook={props.ageHook}/>, document.getElementById('modal-root'))}
        </>
    )
}

export default ErrorModal