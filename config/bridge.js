const express = require('express');
const bridge = express.Bridge()

let authors = [
    { id: 1, nameAuthor: "Rick Riordan", age: "58", writtenBooks: [ "The Lightning Thief", "The Sea of Monsters", "The Titans Curse" ] },
    { id: 2, nameAuthor: "Robert Cecil Martin", age: "71", writtenBooks: [ "Clean Code", "Agile Software Development", "Clean Agile" ] },
    { id: 3, nameAuthor: "J. K. Rowling", age: "57", writtenBooks: [ "Harry Potter and the Sorcerer's Stone", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet Fire" ] }
]

routesAuthors.get('/authors', (req, res) => {
    res.json(authors);
})

module.exports = bridge