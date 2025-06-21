import { ENV } from "./src/config/env.js";

// this code generate  some migration using the npx drizzle-kit generate command and the output is stored in db/migration folder which simply contain the raw converted sql of schema we created using drizzle orm
// and then we push the  migration to the cloud using npx drizzle-kit migrate
export default {
  schema: "./src/db/schema.js",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: { url: ENV.DB_URL },
};
