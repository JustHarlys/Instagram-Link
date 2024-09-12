import './App.css'
import Presentation from './Components/Presentation'
import Button from './Components/Button'
import data from '../data'
import { nanoid } from 'nanoid'

function App() {

  
  const social = data.map(d => {
    return <Button key={nanoid()} class={d.app} link={d.link}/>
  })
  
  return (
    <main className='whole-app'>
    <Presentation/>


    <section>

    <button className='button-container'>
      <a href="https://harlys-portfolio.vercel.app/" target='_blank'><p className='content-text'>Portfolio</p></a>
    </button>

    <button className='button-container'>
    <a href=""><p className='content-text'>Download my CV <br /> (Coming soon)</p></a>
    </button>

    <button className="button-container blog">
        <p className="content-text">Blog (Coming soon)</p>
    </button>

    <p className='content-text'>Social Media</p>
    <div className='social-media-container'>
      {social}
    </div>

    </section>





    <footer className='content-text'>Created and Developed by Harlys Almanzar, 2024</footer>

    </main>
  )
}

export default App;
