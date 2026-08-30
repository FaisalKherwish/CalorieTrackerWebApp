//Load dotenv so that we can use process.env.MONGO_URI to get the mongodb connection
require('dotenv').config()

const express = require('express')
const mong = require('mongoose')
const port = 8080
const server = express()
//Food entry model import
const FoodEntry = require('./models/FoodEntry')




// Connects to the mongodb database I created
mong.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
                                    .catch((err) => console.log("Connection Error",err))


// We do this before we handle any post requests so that express is able to handle JSON data and turn it into JavaScript
server.use(express.json())

// Just returns data. Nothing comes in.
server.get('/api/entries', async (req,res) =>
{
    try{
        let result = await FoodEntry.find()
        res.json(result)
        return result

    }
    catch (error){
        console.log(error)
        return
    }
    
})

// Client sending data to server i.e new food entry
server.post('/api/entries', async (req,res) =>
{
    try
    {
        let resultingEntry = await FoodEntry.create(req.body)
        res.json(resultingEntry)
        console.log("New Entry: ",resultingEntry)

    }
    catch (error)
    {
        console.log(error)
    }
})

// Start the server
server.listen(port, ()=> console.log('Server Running on Port:', port) )