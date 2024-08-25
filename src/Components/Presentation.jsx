import '../App.css'
import Picture from '../assets/linktree-img.jfif'

function Presentation() {
    return(
        <main className='presentation-container'>

        <img className="harlys-image" src={Picture} alt="Imagen de Harlys" />
  
        <div className='harlys-info'>
        <h1 className='greetings'>Hola, Soy Harlys 👋</h1>
        <p className='career-info'>Full Stack Developer</p>
        <p className='career-info'>Based in Dominican Republic</p>
        </div>
  
      </main>
    )
}   

export default Presentation;