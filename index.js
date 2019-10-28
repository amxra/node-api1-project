// implement your API here

const express = require('express')
const app = express()
app.use(express.json())

const db = require('./data/db')

function handleDefaultRequest(req, res) {
    res.json('hello world')
}

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on ' + (process.env.PORT || 3000))
})