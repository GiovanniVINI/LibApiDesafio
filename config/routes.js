const express = require('express');
const routes = express.Router();

let lib = [
  { "1" : { name: "The Lightning Thief", author: "Rick Riordan"} },
  { "2" : { name: "Clean Code", author: "Robert Cecil Martin"} },
  { "3" : { name: "Harry Potter and the Philosopher's Stone", author: "J. K. Rowling"} }
]

// Search data
routes.get('/', (req, res) => {
    return res.json(lib)
})

module.exports = routes

