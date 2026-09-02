import { useState, useEffect } from 'react'
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
      </h1>

      <ul>
        {entries.map((entry, index) => <li key={index}>{entry.name}</li>)}
      </ul>

      <form onSubmit={event => handleSubmit(event)}>
      <input type="text" value={nameInput} onChange={event => setNameInput(event.target.value)}/>
      
      <input type="number" value={caloriesInput} onChange={event => setCaloriesInput(event.target.value)}/>

      <button type="submit"/>

      </form>
    </>
  )

  // Update function for when the submit button is clicked
function handleSubmit(event){
  event.preventDefault()
const newEntry = {name: nameInput, calories: caloriesInput}


// ...entries basically makes a new array in memory but with the newEntry added to it
setEntries([...entries,newEntry])

}

}



export default App
