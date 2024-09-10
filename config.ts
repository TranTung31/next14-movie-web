import { z } from 'zod'

const configSchema = z.object({
  NEXT_PUBLIC_API_ROOT: z.string(),
})

const configValidation = configSchema.safeParse({
  NEXT_PUBLIC_API_ROOT: process.env.NEXT_PUBLIC_API_ROOT,
})

if (!configValidation.success) {
  console.log('Error environment variables!', configValidation.error.errors)
  throw new Error('Các khai báo biến môi trường không hợp lệ!')
}

const envConfig = configValidation.data

export default envConfig
