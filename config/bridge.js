const express = require('express');
const routesAuthors = express.Router()
let authors = require('../data/authors.js');
let books = require('../data/books.json');

// Search data
routesAuthors.get('/authors', (req, res) => {
  console.log(authors)
  for(const author of authors) {
    author.books = books.map(book => ({
      id: book.id,
      name: book.name,
      author_id: book.author_id
    })).filter(book => book.author_id === author.id) || []
  }
  console.log(authors)
  
  const data = {
    total: authors.length,
    info: authors
  }

  return res.json(data)
})

// Insert data
routesAuthors.post('/authors', (req, res) => {
  const body = req.body

  if (!body)
    return res.status(201).end()

  authors.push(body)
  return res.json(body)
})

// Update data
routesAuthors.put('/authors/:id', (req, res) => {
  const authorId = parseInt(req.params.id)
  const author = authors.find(author => author.id === authorId)
  console.log(author)

  if (!author)
    return res.status(404).end()

  const updateAuthors = authors.map((author) => {
    if (author.id === authorId) {
      author = req.body.author
    }
    return author
  })
  authors = updateAuthors

  return res.status(200).json(authors)
})

// Delete data
routesAuthors.delete('/authors/:id', (req, res) => {
  const authorId = parseInt(req.params.id)
  const author = authors.find(author => author.id === authorId)

  if (!author)
    return res.status(404).end()

  authors = authors.filter(author => author.id !== authorId)
  return res.status(204).send()
})

module.exports = {
  routesAuthors,
}