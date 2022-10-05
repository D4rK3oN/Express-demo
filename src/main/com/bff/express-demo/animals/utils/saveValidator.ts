import { NewAnimalInput } from '../types'
import { Size } from './enums'

const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String
}

const isDate = (date: any): boolean => {
  return Boolean(Date.parse(date))
}

const isSize = (size: any): boolean => {
  return Object.values(Size).includes(size)
}

const parseName = (nameFromReq: any): string => {
  if (!isString(nameFromReq)) {
    throw new Error('Invalid or missing name')
  }

  return nameFromReq
}

const parseSize = (sizeFromReq: any): Size => {
  if (!isString(sizeFromReq) || !isSize(sizeFromReq)) {
    throw new Error('Invalid or missing size')
  }

  return sizeFromReq
}

const parseBirthday = (birthdayFromReq: any): string => {
  if (!isString(birthdayFromReq) || !isDate(birthdayFromReq)) {
    throw new Error('Invalid or missing birthday')
  }

  return birthdayFromReq
}

const toNewAnimal = (obj: any): NewAnimalInput => {
  const newAnimal: NewAnimalInput = {
    name: parseName(obj.name),
    size: parseSize(obj.size),
    birthday: parseBirthday(obj.birthday)
  }

  return newAnimal
}

export default toNewAnimal
