"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPetDetailsUseCase = getPetDetailsUseCase;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getPetDetailsUseCase(petId) {
    const pet = await prisma.pet.findUnique({
        where: { id: petId },
    });
    if (!pet) {
        throw new Error('Pet not found');
    }
    return pet;
}
