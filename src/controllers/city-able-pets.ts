import { FastifyReply, FastifyRequest } from 'fastify';
import { listPetsByCityUseCase } from '@/use-cases/list-pets-by-city';

export async function listPetsByCity(request: FastifyRequest, reply: FastifyReply) {
   
    const { city, breed } = request.method === 'POST'
        ? (request.body as { city?: string; breed?: string })
        : (request.query as { city?: string; breed?: string });

    if (!city && !breed) {
        return reply.status(400).send({ error: 'City or breed is required' });
    }

    try {
        const pets = await listPetsByCityUseCase({ city, breed });
        return reply.status(200).send(pets);
    } catch (error) {
        return reply.status(500).send({ error: 'Failed to retrieve pets' });
    }
}

