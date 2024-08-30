import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getPetDetailsUseCase(petId: string) {
    const pet = await prisma.pet.findUnique({
        where: { id: petId },
    });

    if (!pet) {
        throw new Error('Pet not found');
    }

    return pet;
}
