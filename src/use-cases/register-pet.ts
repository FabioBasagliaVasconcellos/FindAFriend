import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface CreatePetDTO {
  name: string
  age: number
  breed: string
  description?: string
  city: string
}

export async function createPet(data: CreatePetDTO) {
  const newPet = await prisma.pet.create({
    data: {
      name: data.name,
      age: data.age,
      breed: data.breed,
      description: data.description,
      city: data.city
    },
  })
  return newPet
}
