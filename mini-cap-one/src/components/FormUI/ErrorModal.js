import './ErrorModal.css'

const ErrorModal = (props) => {

    return(
        <div className='modal-wrap'>
            <div>
                <h3 className='error-title'>Invalid input!</h3>
            </div>
            <div>
                <h4 className='error-msg'>Please enter a value for each box (no empty values)</h4>
            </div>

            <button className='error-close' onClick={() => props.showModal('false')}>close</button>
        </div>
    )
}

export default ErrorModal