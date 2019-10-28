// implement your API here

const express = require('express')
const cors = require('cors')
const db = require('./data/db')

const app = express()

app.use(cors())
app.use(express.json())

//endpoints

app.post('/api/users', (req, res) => {
    const user = {
        name: req.body.name,
        bio: req.body.bio,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at
    }

    db.insert(user)
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
})


app.listen(process.env.PORT || 3000, () =>{
    console.log('listening on' + (process.env.PORT || 3000))
})