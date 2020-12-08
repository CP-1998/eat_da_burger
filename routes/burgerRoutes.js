// Declaring dependencies
const router = require('express').Router()
const { Burger } = require('../models')

// This part is the get request which will show the burgers
router.get('/burgers', (req, res) => {
  Burger.findAll()
    .then(burgers => res.json(burgers))
    .catch(err => console.log(err))
})

// This part will make a post request to burger so the user can create a new 'burger' within the 'burger_db'
// Database
router.post('/burgers', (req, res) => {
  Burger.create(req.body)
  .then(burgers => res.json(burgers))
  .catch(err => console.log(err))
})

// This part will make a destroy request to allow the user to delete the burger
router.delete('/burgers/:id', (req, res) => {
  Burger.destroy({ where: {id: req.params.id} })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})


// Exporting route
module.exports = router