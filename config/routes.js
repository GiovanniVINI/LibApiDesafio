const express = require('express');
const routes = express.Router();

let books = [
  { id: 1, name: "The Lightning Thief", author_id: null },
  { id: 2, name: "Clean Code"},
  { id: 3, name: "Harry Potter and the Philosopher's Stone"}
]

// Search data
routes.get('/books', (req, res) => {
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
  console.log(bookId)

  if (!book)
    return res.status(404).end()

  const updateBooks = books.map((book) => {
    if (book.id == bookId) {
      book = req.body.books
    }
    return book
  })
  books = updateBooks

  return res.status(200).json(books)
})

module.exports = routes

