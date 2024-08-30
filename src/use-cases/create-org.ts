import { PrismaClient } from '@prisma/client';
import { createHash, randomBytes } from 'node:crypto';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

interface CreateOrgDTO {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  const hash = createHash('sha256');
  hash.update(password + salt);
  return hash.digest('hex');
}

export async function createOrg(data: CreateOrgDTO) {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newOrg = await prisma.org.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      address: data.address,
      phone: data.phone,
    },
  });

  return newOrg;
}
