const express = require('express')
const app = express()
const path =require ('path')

const port = 3000

app.get('/', (req, res) => res.send('Hello World! Como tás?¡'))
app.listen(port, () => console.log(`Comenzó a correr servidor http://localhost:${port}`))