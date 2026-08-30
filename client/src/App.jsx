import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  let arrObj = [{name: "Banana",calories:23},{name: "Broccoli",calories: 43}]

  return (
    <>
      <h1>
        Calorie Tracker 
      </h1>

      <ul>
        {arrObj.map(entry => <li>{entry.calories}</li>)}
      </ul>
    </>
  )
}

export default App
