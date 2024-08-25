import '../App.css'

function Button(props) {
    return(
        <a href={props.link} target='_blank'><i className={`fa-brands ${props.class}`}></i></a>
    )
}

export default Button;