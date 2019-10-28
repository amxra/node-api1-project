// implement your API here

const express = require('express')
const app = express()
app.use(express.json())

const db = require('./data/db')


app.post('/api/users', (req, res) =>{
    const {name, bio} = req.body;

    db.insert(req.body)
    .then(user => {
        res.status(201).json({success: true, user})
    })
    .catch( error => {
        res.status(500).json({
            success: false,
            error
        })
    })
})


app.get('/api/users', (req, res)=> {
    db.find()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error =>{
        res.status(500).json({
            success: false,
            error
        })
    })
})




function handleDefaultRequest(req, res) {
    res.json('hello world')
}

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on ' + (process.env.PORT || 3000))
})