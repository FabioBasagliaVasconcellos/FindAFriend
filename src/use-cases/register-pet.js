"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPet = createPet;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createPet(data) {
    const newPet = await prisma.pet.create({
        data: {
            name: data.name,
            age: data.age,
            breed: data.breed,
            description: data.description,
            city: data.city
        },
    });
    return newPet;
}
