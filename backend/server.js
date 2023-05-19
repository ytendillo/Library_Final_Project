const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const port = 3000

// Get books by languages
app.get('/getBooksByLanguage', async (req, res) => {
  const language = req.query.language

  const url = `https://gutendex.com/books/?languages=${language}`
  const libros = await fetch(url)
  .then(res => res.json())

  res.send(libros.results)
  })

app.get('/getBooksBySubject', async (req, res) => {
  const subject = req.query.subject

  const url = `https://gutendex.com/books/?subject=${subject}`
  const libros = await fetch(url)
  .then(res => res.json())

  res.send(libros.results)
  })

  //Get book by Id
  app.get('/getBookById', async (req, res) => {
    const id = req.query.id

    const url = `https://gutendex.com/books/?ids=${id}`
    const libro = await fetch(url)
    .then(res => res.json())
  
    res.send(libro.results)
    })

  //Get all books
  app.get('/getAllBooks', async (req, res) => {
    const url = 'https://gutendex.com/books'
    const libros = await fetch(url)
    .then(res => res.json())

    res.send(libros.results)
    
    })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })