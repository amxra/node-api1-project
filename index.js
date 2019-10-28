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


app.get('/api/users/:id', (req, res) => {
    db.findById(req.params.id)
    .then(user => {
        if(user){
            res.status(200).json({
                success: true,
                user
            })
        }

        else{
            res.status.json(404). json({
                success: false, 
                message: 'Cannot find user'
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            error
        })
    })
})

app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    db.remove(id)
    .then(deleted => {
        if(deleted){
            res.status(204).end()
        }
        else{
            res.status(404).json({
                success: false,
                message: 'Cannot find user'
            })
        }
    })

    .catch(error => {
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