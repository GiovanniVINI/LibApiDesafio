const express = require('express');
const routes = express.Router();
let books = require('../data/books.json');
let authors = require('../data/authors');

// Search data
routes.get('/books', (req, res) => {
  books.forEach(book => {
    const author = authors.map(author => ({ id: author.id, name: author.nameAuthor, age: author.age})).find(authorInMemory => authorInMemory.id === book.author_id) || { }
    Reflect.deleteProperty(author, 'id')
    book.author = author
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
}