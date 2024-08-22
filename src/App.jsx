import './App.css'
import Presentation from './Components/Presentation'
import Button from './Components/Button'
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

    <div className='social-media'>
      {social}
    </div>
    </main>
  )
}

export default App;
