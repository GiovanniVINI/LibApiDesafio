const express = require('express');
const routesAuthors = express.Router()
const { books } = require('../config/routes')


let authors = [
  { id: 1, nameAuthor: "Rick Riordan", age: "58", writtenBooks: [ ] },
  { id: 2, nameAuthor: "Robert Cecil Martin", age: "71", writtenBooks: [ ] },
  { id: 3, nameAuthor: "J. K. Rowling", age: "57", writtenBooks: [ ] }
]

// Search data
routesAuthors.get('/authors', (req, res) => {
  authors.map(author => {
    author.writtenBooks = author.writtenBooks.map(book => books.find(bookInMemory => bookInMemory.id === book)).filter(Boolean)
      return author
}) 

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
    authors,
}