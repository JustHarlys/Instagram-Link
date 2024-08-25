import './App.css'
import Presentation from './Components/Presentation'
import Button from './Components/Button'
import Blog from './Components/Blog'
import data from '../data'
import { nanoid } from 'nanoid'

function App() {

  
  const social = data.map(d => {
    return <Button key={nanoid()} class={d.app} link={d.link}/>
  })
  
  return (
    <main className='whole-app'>
    <Presentation/>


      <p className='content-text'>Portfolio (Coming Soon)</p>
    <div className='content-container'>
      <a href=""><p className='content-text'>Portfolio</p></a>
    </div>

      <p className='content-text'>CV (Coming soon)</p>
    <div className='content-container'>
    <a href=""><p className='content-text'>Download my CV</p></a>
    </div>

    <p className='content-text'>Social Media</p>
    <div className='social-media-container'>
      {social}
    </div>

    <Blog />


    <footer className='content-text'>Created and Developed by Harlys Almanzar, 2024</footer>

    </main>
  )
}

export default App;
