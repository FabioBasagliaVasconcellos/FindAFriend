import Fastify, { fastify } from 'fastify'
import { registerPet } from './controllers/create-pet'
import { PrismaClient } from '@prisma/client'
import { listPetsByCity } from './controllers/city-able-pets'
import { getPetDetails } from './controllers/find-specific-pet'
import { orgRoutes } from './routes'
import { login } from './controllers/login-requisition-org'

export const app = Fastify()

app.post('/pets', registerPet)
app.get('/city', listPetsByCity)
app.post('/pets/filter', listPetsByCity)
app.get('/pets/filter', listPetsByCity)
app.get('/pets/:id', getPetDetails)
app.post('/login', login);



const prisma = new PrismaClient()

prisma.pet.create({
    data: {
        name: 'Koda',
        age: 3,
        breed: 'Golden Retriever',
        description: 'Lovely dog.',
        city: 'Sao Paulo',
    }

})

app.register(orgRoutes);

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

