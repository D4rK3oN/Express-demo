import { Animal, AnimalInfo, NewAnimalInput } from '../types'
import data from '../../../../../../resources/animals.json'

const animals: Animal[] = data as Animal[]

export const findAll = (): AnimalInfo[] => {
  return animals.map(({ name, size, birthday }) => {
    return {
      name,
      size,
      birthday
    }
  })
}

export const findById = (id: number): Animal | undefined => {
  return animals.find(animal => animal.id === id)
}

export const save = (newAnimalInput: NewAnimalInput): Animal => {
  const newAnimal = {
    id: Math.max(...animals.map(animal => animal.id)) + 1,
    ...newAnimalInput
  }

  animals.push(newAnimal)

  return newAnimal
}
