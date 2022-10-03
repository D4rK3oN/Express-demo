import { Size } from './utils/enums'

// export type Size = 'S' | 'M' | 'L' | 'XL'

export interface Animal {
  id: number
  name: string
  size: Size
  birthday: string
}

// export type AnimalInfo = Pick<Animal, 'name' | 'size'>

export type AnimalInfo = Omit<Animal, 'id'>

export type NewAnimalInput = Omit<Animal, 'id'>
