import './App.css'
import Presentation from './Components/Presentation'
import Button from './Components/Button'

function App() {

  return (
    <main className='whole-app'>
    <Presentation/>

    <div className='social-media'>
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
    </main>
  )
}

export default App;
