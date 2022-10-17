import express from 'express'
import * as animalService from '../services/animalService'
import toNewAnimal from '../utils/saveValidator'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(animalService.findAll())
})

router.get('/:id', (req, res) => {
  const animal = animalService.findById(+req.params.id)

  return animal == null ? res.sendStatus(404) : res.send(animal)
})

router.post('/', (req, res) => {
  try {
    res.json(animalService.save(toNewAnimal(req.body)))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

export default router
