const express = require('express');
const routes = express.Router();
const { authors} = require('../config/bridge')

let books = [
  { id: 1, name: "The Lightning Thief", author_id: 1 },
  { id: 2, name: "Clean", author_id: 2},
  { id: 3, name: "Harry Potter and the Sorcerer's Stone", author_id: 3}
]

// Search data
routes.get('/books', (req, res) => {
  books.map(book => {
    book.author = authors.find(authorInMemory => authorInMemory.id === book.author_id)
      return book
}) 
  const data = { 
    total: books.length,
    items: books
  }
  return res.json(data)
})

// Insert data
routes.post('/books', (req, res) => {
  const body = req.body

  if (!body)
    return res.status(201).end()

    books.push(body)
      return res.json(body)
})

// Update data
routes.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id)
  const book = books.find(book => book.id === bookId)

  if (!book)
    return res.status(404).end()

  const updateBooks = books.map((book) => {
    if (book.id === bookId) {
      book = req.body.book
    }
    return book
  })
  books = updateBooks

  return res.status(200).json(books)
})

// Delete data
routes.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id)
  const book = books.find(book => book.id === bookId)

  if (!book)
  return res.status(404).end()

  books = books.filter(book => book.id !== bookId)
  return res.status(204).send()
})

module.exports = {
  routes,
  books,
}

