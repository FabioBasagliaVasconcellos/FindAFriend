"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrg = createOrg;
const client_1 = require("@prisma/client");
const node_crypto_1 = require("node:crypto");
const prisma = new client_1.PrismaClient();
function hashPassword(password) {
    const salt = (0, node_crypto_1.randomBytes)(16).toString('hex');
    const hash = (0, node_crypto_1.createHash)('sha256');
    hash.update(password + salt);
    return hash.digest('hex');
}
async function createOrg(data) {
    const hashedPassword = hashPassword(data.password);
    const newOrg = await prisma.org.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword,
            address: data.address,
            phone: data.phone,
        },
    });
    return newOrg;
}
