const express = require('express')
const port = 5000
const server = express()


server.listen(port, ()=> console.log('Server Running on Port: ${port}') )