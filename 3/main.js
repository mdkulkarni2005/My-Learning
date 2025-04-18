const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//middeleware 1
app.use((req, res, next) => {
    console.log("M1")
    next()
})

//middeleware 2
app.use((req, res, next) => {
    console.log("M2")
    next()
})

app.get('/', (req, res) => {
  res.send('Intro to Middleware')
})

app.get('/about', (req, res) => {
  res.send('Hello About')
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})