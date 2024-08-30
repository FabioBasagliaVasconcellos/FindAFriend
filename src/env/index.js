"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const zod_1 = require("zod");
const app_1 = require("@/app");
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(['development', 'test', 'production']).default('development'),
    PORT: zod_1.z.coerce.number().default(3000),
});
const envValidation = envSchema.safeParse(process.env);
if (envValidation.success === false) {
    console.error('Invalid environment variables:', envValidation.error.format());
    throw new Error('Invalid environment variables.');
}
const env = envValidation.data;
app_1.app.listen({
    host: '0.0.0.0',
    port: env.PORT,
}, (err, address) => {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log(`Server running at ${address}`);
});
