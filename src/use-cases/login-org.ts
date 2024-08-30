import { PrismaClient } from '@prisma/client';
import { createHash } from 'crypto';

const prisma = new PrismaClient();

interface LoginOrgDTO {
  email: string;
  password: string;
}

export async function loginOrg({ email, password }: LoginOrgDTO) {
  const org = await prisma.org.findUnique({
    where: { email },
  });

  if (!org) {
    throw new Error('Invalid credentials');
  }

  const hashedPassword = createHash('sha256').update(password).digest('hex');

  if (hashedPassword !== org.password) {
    throw new Error('Invalid credentials');
  }

  return org; 
}
