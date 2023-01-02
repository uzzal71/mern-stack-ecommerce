const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/signup', (req, res) => {
  res.send('Welcome sign page')
})

app.get('/login', (req, res) => {
  res.send('Welcome login page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})