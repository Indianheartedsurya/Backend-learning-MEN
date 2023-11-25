require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Chai Aur code')
})

app.get('/mainpage',(req,res)=>{
    res.send('hey this is 2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})