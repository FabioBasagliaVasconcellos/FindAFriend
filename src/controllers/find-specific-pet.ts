import { getPetDetailsUseCase } from '@/use-cases/search-specific-pet';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function getPetDetails(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };


    try {
        const pet = await getPetDetailsUseCase(id);
        return reply.status(200).send(pet);
    } catch (error) {
        return reply.status(404).send({ error: 'Pet not found' });

    }
}
