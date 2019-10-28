// implement your API here

const express = require('express')
const cors = require('cors')
const db = require('./data/db')

const app = express()

app.use(cors())
app.use(express.json())

//endpoints

app.post('/api/users', (req, res) => {
    const { name, bio } = req.body;
  
    if (!name || !bio) {
      res
        .status(400)
        .json({ errorMessage: 'Enter name and bio' });
    } 
    else {
        db.insert(req.body)
        .then(user => {
          res.status(201).json(user);
        })
        .catch(() => {
          res.status(500).json({
            errorMessage:
              'Error',
          });
        });
    }
  });

  app.get('/api/users', (req, res) => {
      db.find()
      .then(users => {
          res.status(200).json(users)
      })
      .catch(error =>{
          res.status(500).json({
              success: false,
              err
          })
      })
  })


app.listen(process.env.PORT || 3000, () =>{
    console.log('listening on' + (process.env.PORT || 3000))
})