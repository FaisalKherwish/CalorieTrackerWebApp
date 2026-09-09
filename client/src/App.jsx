import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [entries,setEntries] = useState([])
  const [nameInput,setNameInput] = useState("")
  const [caloriesInput,setCaloriesInput] = useState("")
  
  useEffect(() =>
  {
    console.log("Effect Ran")

    async function loadEntries() {
      const  response = await fetch('http://localhost:5173/api/entries')
      const  data = await fetch.json()
      setEntries(data)
    }
    loadEntries()

  },[])

  return (
    <>
      <h1>
        Calorie Tracker 
      </h1>

      <ul>
        {entries.map((entry, index) => <li key={index}>Meal Name: {entry.name} Calories:{entry.calories}</li>)}
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
if(nameInput == "" || caloriesInput == ""){
  console.log("Empty Field(s) please make sure to input a value in each field.")
return
}

const newEntry = {name: nameInput, calories: caloriesInput}


// ...entries basically makes a new array in memory with the same values but with the newEntry added to it
setEntries([...entries,newEntry])

}

}



export default App
