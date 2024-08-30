"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginOrg = loginOrg;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
async function loginOrg({ email, password }) {
    const org = await prisma.org.findUnique({
        where: { email },
    });
    if (!org) {
        throw new Error('Invalid credentials');
    }
    const isPasswordValid = await bcrypt_1.default.compare(password, org.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }
    const token = jsonwebtoken_1.default.sign({ orgId: org.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return { org, token };
}
