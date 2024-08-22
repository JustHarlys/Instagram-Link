import '../App.css'

function Button(props) {
    return(
        <div className='buttons-div'>
        <button className='social-button'>
        <i className={`fa-brands ${props.class}`}></i>
        </button>
        </div>
    )
}

export default Button;