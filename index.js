// implement your API here

const express = require('express')
const app = express()
app.use(express.json())

const db = require('./data/db')

function handleDefaultRequest(req, res) {
    res.json('hello world')
  }