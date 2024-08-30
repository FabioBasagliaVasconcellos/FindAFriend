"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPetDetails = getPetDetails;
const search_specific_pet_1 = require("@/use-cases/search-specific-pet");
async function getPetDetails(request, reply) {
    const { id } = request.params;
    try {
        const pet = await (0, search_specific_pet_1.getPetDetailsUseCase)(id);
        return reply.status(200).send(pet);
    }
    catch (error) {
        return reply.status(404).send({ error: 'Pet not found' });
    }
}
