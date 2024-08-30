import { createOrg } from '@/use-cases/create-org';
import { FastifyRequest, FastifyReply } from 'fastify';

export async function registerOrg(req: FastifyRequest, reply: FastifyReply) {
  const { name, email, password, address, phone } = req.body as {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
  };

  try {
    const org = await createOrg({ name, email, password, address, phone });
    
    return reply.status(201).send(org);
  } catch (error) {

    console.error('Error registering org:', error);
    return reply.status(400).send({ error: 'Failed to register organization' });
  }
}
