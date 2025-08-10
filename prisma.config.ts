import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'
console.log("env -> ", process.env.NODE_ENV);

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  engine: "classic",
  datasource: {
    url: env('DATABASE_URL'),
  },
})