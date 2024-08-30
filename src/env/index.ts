import 'dotenv/config' 
import { z } from 'zod' 
import { app } from '@/app' 

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
})

const envValidation = envSchema.safeParse(process.env)

if (envValidation.success === false) {
  console.error('Invalid environment variables:', envValidation.error.format())
  throw new Error('Invalid environment variables.')
}

const env = envValidation.data

app.listen({
  host: '0.0.0.0',
  port: env.PORT,
}, (err, address) => {
  if (err) {
    console.error('Error starting server:', err)
    process.exit(1)
  }
  console.log(`Server running at ${address}`)
})
