import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

  const isPasswordValid = await bcrypt.compare(password, org.password);

  

  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ orgId: org.id }, process.env.JWT_SECRET as string, {
    expiresIn: '1h', 
  });

  return { org, token };
}
