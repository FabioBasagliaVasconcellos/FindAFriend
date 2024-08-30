import { createPet } from '@/use-cases/register-pet'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function registerPet(req: FastifyRequest, res: FastifyReply) {
  const { name, age, breed, description, city } = req.body as {
    name: string,
    age: number,
    breed: string,
    description?: string,
    city: string
  }

  try {
    const pet = await createPet({ name, age, breed, description, city })
    return res.status(201).send(pet)
  } catch (error) {
    return res.status(400).send({ error: 'Failed to register pet' })
  }
}
