import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { ENV } from "./env.js";
import * as schema from "../db/schema.js";

const sql = neon(ENV.DB_URL);
export const db = drizzle(sql, { schema });
// This code initializes a connection to a Neon database using Drizzle ORM.
// It imports the necessary modules, sets up the database connection with the provided URL,
// and exports the `db` instance configured with the schema defined in `../db/schema.js`.
