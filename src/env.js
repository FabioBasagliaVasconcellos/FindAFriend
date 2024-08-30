"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(['development', 'test', 'production']).default('development'),
    PORT: zod_1.z.coerce.number().default(3000),
    DATABASE_URL: zod_1.z.string().url(),
});
const envValidation = envSchema.safeParse(process.env);
if (!envValidation.success) {
    console.error('Invalid environment variables:', envValidation.error.format());
    throw new Error('Invalid environment variables.');
}
exports.env = envValidation.data;
