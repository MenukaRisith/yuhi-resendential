// routes/login.tsx

import {
    ActionFunction,
    json,
    LoaderFunction,
  } from "@remix-run/node";
  import { Form, useActionData } from "@remix-run/react";
  import bcrypt from "bcryptjs";
  import mysql from "mysql2/promise";
  import type { RowDataPacket } from "mysql2";
  import dotenv from "dotenv";
  import { createAdminSession } from "~/utils/session.server";
  
  dotenv.config();
  
  // Database connection config
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };
  
  // MySQL row typing
  interface AdminUser extends RowDataPacket {
    id: number;
    username: string;
    password_hash: string;
    created_at: Date;
  }
  
  // Loader (optional for SEO or future extension)
  export const loader: LoaderFunction = async () => {
    return json({ message: "Login Page" });
  };
  
  // Action: Form submission handler
  export const action: ActionFunction = async ({ request }) => {
    try {
      const formData = await request.formData();
      const username = formData.get("username");
      const password = formData.get("password");
  
      if (typeof username !== "string" || typeof password !== "string") {
        return json({ error: "Invalid input format." }, { status: 400 });
      }
  
      const connection = await mysql.createConnection(dbConfig);
      const [rows] = await connection.execute<AdminUser[]>(
        "SELECT * FROM admin_users WHERE username = ? LIMIT 1",
        [username]
      );
      await connection.end();
  
      const user = rows[0];
      if (!user || !(await bcrypt.compare(password, user.password_hash))) {
        return json({ error: "Invalid username or password." }, { status: 401 });
      }
  
      // Create secure admin session
      return createAdminSession(user.id, "/admin");
    } catch (error) {
      console.error("Login error:", error);
      return json({ error: "Internal server error." }, { status: 500 });
    }
  };
  
  // Login Page UI
  export default function LoginPage() {
    const data = useActionData<typeof action>();
  
    return (
      <section className="min-h-screen bg-[#F2F5F3] py-12 px-6 lg:px-24">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 font-['Poppins']">
            Admin Login
          </h1>
  
          <Form method="post" className="space-y-6">
            <div>
              <label htmlFor="username" className="block mb-2 font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>
  
            <div>
              <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>
  
            {data?.error && (
              <p className="text-red-500 font-medium text-sm">{data.error}</p>
            )}
  
            <button
              type="submit"
              className="w-full bg-[#00c851] text-white font-semibold py-3 rounded hover:bg-green-600 transition"
            >
              Login
            </button>
          </Form>
        </div>
      </section>
    );
  }
  