"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
exports.orgRoutes = orgRoutes;
const city_able_pets_1 = require("./controllers/city-able-pets");
const find_specific_pet_1 = require("./controllers/find-specific-pet");
const register_org_1 = require("./controllers/register-org");
const login_requisition_org_1 = require("./controllers/login-requisition-org");
async function routes(app) {
    app.post('/pets/filter', city_able_pets_1.listPetsByCity);
    app.get('/pets/filter', city_able_pets_1.listPetsByCity);
    app.get('/pets/:id', find_specific_pet_1.getPetDetails);
    app.post('/login', login_requisition_org_1.login);
}
async function orgRoutes(app) {
    app.post('/orgs', register_org_1.registerOrg);
}
