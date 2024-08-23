import './App.css'
import Presentation from './Components/Presentation'
import Button from './Components/Button'
import Blog from './Components/Blog'
import Newsletter from './Components/Newsletter'
import Websites from './Components/Websites'
import data from '../data'
import { nanoid } from 'nanoid'

function App() {

  
  const social = data.map(d => {
    return <Button key={nanoid()} class={d.app} link={d.link}/>
  })
  
  console.log(social)
  return (
    <main className='whole-app'>
    <Presentation/>

    <p className='content-text'>Social Media</p>
    <div className='content-container'>
      {social}
    </div>
    <Websites />
    <Blog />
    <Newsletter />
    </main>
  )
}

export default App;
