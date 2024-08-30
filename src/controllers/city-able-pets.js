"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPetsByCity = listPetsByCity;
const list_pets_by_city_1 = require("@/use-cases/list-pets-by-city");
async function listPetsByCity(request, reply) {
    const { city, breed } = request.method === 'POST'
        ? request.body
        : request.query;
    if (!city && !breed) {
        return reply.status(400).send({ error: 'City or breed is required' });
    }
    try {
        const pets = await (0, list_pets_by_city_1.listPetsByCityUseCase)({ city, breed });
        return reply.status(200).send(pets);
    }
    catch (error) {
        return reply.status(500).send({ error: 'Failed to retrieve pets' });
    }
}
