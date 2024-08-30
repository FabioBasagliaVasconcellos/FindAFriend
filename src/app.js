"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const create_pet_1 = require("./controllers/create-pet");
const client_1 = require("@prisma/client");
const city_able_pets_1 = require("./controllers/city-able-pets");
const find_specific_pet_1 = require("./controllers/find-specific-pet");
const routes_1 = require("./routes");
const login_requisition_org_1 = require("./controllers/login-requisition-org");
exports.app = (0, fastify_1.default)();
exports.app.post('/pets', create_pet_1.registerPet);
exports.app.get('/city', city_able_pets_1.listPetsByCity);
exports.app.post('/pets/filter', city_able_pets_1.listPetsByCity);
exports.app.get('/pets/filter', city_able_pets_1.listPetsByCity);
exports.app.get('/pets/:id', find_specific_pet_1.getPetDetails);
exports.app.post('/login', login_requisition_org_1.login);
const prisma = new client_1.PrismaClient();
prisma.pet.create({
    data: {
        name: 'Koda',
        age: 3,
        breed: 'Golden Retriever',
        description: 'Lovely dog.',
        city: 'Sao Paulo',
    }
});
exports.app.register(routes_1.orgRoutes);
exports.app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
