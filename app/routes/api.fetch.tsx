// app/routes/api.fetch.tsx
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const loader: LoaderFunction = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [projectRows] = await connection.execute(
      "SELECT id, filename, alt FROM projects"
    );
    const [serviceRows] = await connection.execute(
      "SELECT id, image, title, description FROM services"
    );

    await connection.end();

    return json({
      projects: projectRows,
      services: serviceRows,
    });
  } catch (error) {
    console.error("Failed to fetch from database:", error);
    return json({ error: "Database error." }, { status: 500 });
  }
};
