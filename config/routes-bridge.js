const fs = require('fs');
const path = require('path');
const express = require('express');
const routesBridge = express.Router()
let books = require('../data/books.json');
let authors = require('../data/authors');

routesBridge.use(express.json())
// Add authors in books
routesBridge.post('/routes-bridge', (req, res) => {
  const { authorId, bookId } = req.body
  const author = authors.find(author => author.id === authorId)
  const bookIndex = books.findIndex(book => book.id === bookId)

  books[bookIndex].author_id = author.id
  fs.writeFileSync(path.join(__dirname, '..', 'data', 'books.json'), JSON.stringify(books))

  res.json({ message: 'Relacionamento criado com sucesso!!!'})
})

routesBridge.delete('/routes-bridge/:authorId', (req, res) => {
  const { authorId } = req.params
  const booksRemoved = books.map(book => {
    if(authorId === book.author_id) {
      book.author = null
      book.author_id = null

    }
    return book
  })

  fs.writeFileSync(path.join(__dirname, '..', 'data', 'books.json'), JSON.stringify(booksRemoved))

  res.json({ message: 'Successfuly'})
})

module.exports = {
  routesBridge
}