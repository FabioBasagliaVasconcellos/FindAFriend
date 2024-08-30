import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ListPetsByCityDTO {
    city?: string;
    breed?: string;
}

export async function listPetsByCityUseCase({ city, breed }: ListPetsByCityDTO) {
    const pets = await prisma.pet.findMany({
        where: {
            city: city ? {
                equals: city,
                mode: 'insensitive',
            } : undefined,

            breed: breed ? {
                equals: breed,
                mode: 'insensitive',
            } : undefined,
        },
    });
    return pets;
}
