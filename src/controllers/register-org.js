"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerOrg = registerOrg;
const create_org_1 = require("@/use-cases/create-org");
async function registerOrg(req, reply) {
    const { name, email, password, address, phone } = req.body;
    try {
        const org = await (0, create_org_1.createOrg)({ name, email, password, address, phone });
        return reply.status(201).send(org);
    }
    catch (error) {
        console.error('Error registering org:', error);
        return reply.status(400).send({ error: 'Failed to register organization' });
    }
}
