import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "Development"}.local` });

export const {
  PORT,
  SERVER_URL,
  NODE_ENV,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ARCJET_KEY,
  ARCJET_ENV,
  QSTASH_URL,
  QSTASH_TOKEN,
  EMAIL_PASSWORD,
  // QSTASH_CURRENT_SIGNING_KEY,
  // QSTASH_NEXT_SIGNING_KEY,
} = process.env;
