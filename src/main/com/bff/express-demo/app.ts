import express from 'express'

import animalRouter from './animal/routes/animalRouter'

const app = express()

app.use(express.json()) // middleware -> transforms the req.body to json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Ping here! ' + new Date().toLocaleDateString())
  res.send('Hi!')
})

app.use('/api/animals', animalRouter)

app.listen(PORT, () => {
  console.log(`Started! Server running on port ${PORT}`)
})
