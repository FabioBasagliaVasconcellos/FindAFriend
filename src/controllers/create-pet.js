"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPet = registerPet;
const register_pet_1 = require("@/use-cases/register-pet");
async function registerPet(req, res) {
    const { name, age, breed, description, city } = req.body;
    try {
        const pet = await (0, register_pet_1.createPet)({ name, age, breed, description, city });
        return res.status(201).send(pet);
    }
    catch (error) {
        return res.status(400).send({ error: 'Failed to register pet' });
    }
}
