"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPetsByCityUseCase = listPetsByCityUseCase;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function listPetsByCityUseCase({ city, breed }) {
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
