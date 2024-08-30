import 'dotenv/config' 
import { z } from 'zod' 

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(), 
})

const envValidation = envSchema.safeParse(process.env)

if (!envValidation.success) {
  console.error('Invalid environment variables:', envValidation.error.format())
  throw new Error('Invalid environment variables.')
}

export const env = envValidation.data
