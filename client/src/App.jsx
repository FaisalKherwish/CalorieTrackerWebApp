import { useState } from 'react'
import './App.css'


function App() {

  let arrObj = [{name: "Banana",calories:23},{name: "Broccoli",calories: 43}, {name: "Strawberry", calories: 87}]
  const [entries,setEntries] = useState(arrObj)
  const [nameInput,setNameInput] = useState("")
  const [caloriesInput,setCaloriesInput] = useState("")

  return (
    <>
      <h1>
        Calorie Tracker 
        {nameInput}
        {caloriesInput}
      </h1>

      <ul>
        {entries.map((entry, index) => <li key={index}>{entry.name}</li>)}
      </ul>

      <form>
      <input type="text" value={nameInput} onChange={event => setNameInput(event.target.value)}/>
      
      <input type="number" value={caloriesInput} onChange={event => setCaloriesInput(event.target.value)}/>

      </form>
    </>
  )
}

export default App
