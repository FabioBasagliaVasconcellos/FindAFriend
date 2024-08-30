import { FastifyInstance } from 'fastify';
import { listPetsByCity } from './controllers/city-able-pets';
import { getPetDetails } from './controllers/find-specific-pet';
import { registerOrg } from './controllers/register-org';
import { login } from './controllers/login-requisition-org';

export async function routes(app: FastifyInstance) {
    app.post('/pets/filter', listPetsByCity);
    app.get('/pets/filter', listPetsByCity);  
    app.get('/pets/:id', getPetDetails);
    app.post('/login', login);
}

export async function orgRoutes(app: FastifyInstance) {
    app.post('/orgs', registerOrg);
  }
