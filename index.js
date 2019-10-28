// implement your API here

const express = require('express')
const cors = require('cors')
const db = require('./data/db')

const app = express()

app.use(cors())
app.use(express.json())