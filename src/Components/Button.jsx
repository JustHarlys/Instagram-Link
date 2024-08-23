import '../App.css'

function Button(props) {
    return(
        <div className='buttons-div'>
        <button className='social-button'>
        <a href={props.link} target='_blank'><i className={`fa-brands ${props.class}`}></i></a>
        </button>
        </div>
    )
}

export default Button;