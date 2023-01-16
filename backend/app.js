const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.send('Welcome user page')
})

app.get('/signup', (req, res) => {
  res.send('Welcome sign page')
})

app.get('/login', (req, res) => {
  res.send('Welcome login page')
})

app.get('/product/detail', (req, res) => {
  res.send('Product detail!')
})

app.get('/add-to-cart', (req, res) => {
  res.send('Add to cart funcation write here')
})

app.get('/carts', (req, res) => {
  res.send('Cart listing function here')
})

app.post('/delete-cart-item', (req, res) => {
  res.send('delete cart item function here')
})

app.get('/aboutus', (req, res) => {
  res.send('Welcome about us page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})