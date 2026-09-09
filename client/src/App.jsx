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
      const  response = await fetch('http://localhost:8080/api/entries')
      const  data = await response.json()
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
async function handleSubmit(event){
  event.preventDefault()
  if(nameInput == "" || caloriesInput == "")
  {
    return
  }

  const newEntry = {name: nameInput, calories: caloriesInput}

  // Fetch the POST request. Must use an object as an argument to show what method I want to use
  const response = await fetch('http://localhost:8080/api/entries',{method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newEntry)})
  const data = await response.json()

  setEntries([...entries,data])

  setNameInput("")
  setCaloriesInput("")


return
}







}




export default App
