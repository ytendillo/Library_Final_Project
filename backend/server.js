const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/libros', async (req, res) => {

  const url = 'https://gutendex.com/books?languages=es'

  const libros = await fetch(url)
	.then(res => res.json())

  console.log(libros.results[0])
  
  res.send(libros)
  
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})