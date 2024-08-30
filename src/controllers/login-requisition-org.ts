import { FastifyRequest, FastifyReply } from 'fastify';
import { loginOrg } from '@/use-cases/login-org';

export async function login(req: FastifyRequest, res: FastifyReply) {
  const { email, password } = req.body as { email: string, password: string };

  try {
    const org = await loginOrg({ email, password });
    return res.status(200).send({ org });
  } catch (error) {
    return res.status(401).send({ error: 'Invalid credentials' });
  }
}
