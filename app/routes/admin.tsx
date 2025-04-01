// routes/admin.tsx

import {
    json,
    LoaderFunction,
    ActionFunction,
    redirect,
    MetaFunction,
  } from "@remix-run/node";
  import { useLoaderData, Form } from "@remix-run/react";
  import dotenv from "dotenv";
  import mysql from "mysql2/promise";
  import fs from "fs/promises";
  import path from "path";
  import { requireAdminId, logout } from "~/utils/session.server";
  
  dotenv.config();
  
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };
  
  type Project = {
    id: number;
    filename: string;
    alt: string;
  };
  
  type Service = {
    id: number;
    image: string;
    title: string;
    description: string;
  };
  
  export const loader: LoaderFunction = async ({ request }) => {
    await requireAdminId(request);
  
    try {
      const connection = await mysql.createConnection(dbConfig);
      const [projects] = await connection.execute("SELECT id, filename, alt FROM projects");
      const [services] = await connection.execute("SELECT id, image, title, description FROM services");
      await connection.end();
      return json({ projects, services });
    } catch (error) {
      console.error("Database connection failed:", error);
      throw new Response("Database Error", { status: 500 });
    }
  };
  
  export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const type = formData.get("type");
  
    if (type === "logout") {
      return logout(request);
    }
  
    const connection = await mysql.createConnection(dbConfig);
  
    if (type === "uploadProject") {
      const file = formData.get("projectImage") as File;
      const alt = formData.get("alt");
      if (file.type !== "image/webp") return json({ error: "Only .webp files allowed." }, { status: 400 });
      const filename = Date.now() + "_" + file.name;
      const uploadDir = path.join(process.cwd(), "public", "images", "projects");
      await fs.mkdir(uploadDir, { recursive: true });
      const buffer = Buffer.from(await file.arrayBuffer());
      await fs.writeFile(path.join(uploadDir, filename), buffer);
      await connection.execute("INSERT INTO projects (filename, alt) VALUES (?, ?)", [filename, alt]);
    }
  
    if (type === "addService") {
      const file = formData.get("serviceImage") as File;
      const title = formData.get("title");
      const description = formData.get("description");
      if (file.type !== "image/webp") return json({ error: "Only .webp files allowed." }, { status: 400 });
      const filename = Date.now() + "_" + file.name;
      const uploadDir = path.join(process.cwd(), "public", "images", "services");
      await fs.mkdir(uploadDir, { recursive: true });
      const buffer = Buffer.from(await file.arrayBuffer());
      await fs.writeFile(path.join(uploadDir, filename), buffer);
      await connection.execute("INSERT INTO services (image, title, description) VALUES (?, ?, ?)", [filename, title, description]);
    }
  
    await connection.end();
    return redirect("/admin");
  };
  
  export const meta: MetaFunction = () => ([
    { title: "Admin Dashboard" },
    { name: "description", content: "Admin page integrated with MySQL." },
  ]);
  
  export default function AdminDashboard() {
    const { projects, services } = useLoaderData<typeof loader>();
  
    return (
      <section className="min-h-screen bg-[#F2F5F3] py-12 px-6 lg:px-24">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-10">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 font-['Poppins']">
              Admin Dashboard
            </h1>
            <Form method="post">
              <input type="hidden" name="type" value="logout" />
              <button
                type="submit"
                className="text-red-600 font-medium underline hover:text-red-800"
              >
                Logout
              </button>
            </Form>
          </div>
  
          {/* Project Upload */}
          <div>
            <h2 className="text-2xl text-black font-bold mb-4">Upload Project Image</h2>
            <Form method="post" encType="multipart/form-data" className="space-y-4">
              <input type="hidden" name="type" value="uploadProject" />
              <input type="file" name="projectImage" accept="image/webp" required className="block text-black w-full" />
              <input type="text" name="alt" placeholder="Alt text" required className="block w-full border p-2" />
              <button type="submit" className="bg-[#00c851] text-white px-4 py-2 rounded">Upload</button>
            </Form>
          </div>
  
          {/* Add Service */}
          <div>
            <h2 className="text-2xl text-black font-bold mb-4">Add New Service</h2>
            <Form method="post" encType="multipart/form-data" className="space-y-4">
              <input type="hidden" name="type" value="addService" />
              <input type="file" name="serviceImage" accept="image/webp" required className="block text-black w-full" />
              <input type="text" name="title" placeholder="Service title" required className="block w-full border p-2" />
              <textarea name="description" placeholder="Service description" required className="block w-full border p-2" />
              <button type="submit" className="bg-[#00c851] text-white px-4 py-2 rounded">Add Service</button>
            </Form>
          </div>
  
          {/* Projects List */}
          <div>
            <h2 className="text-2xl text-black font-bold mb-4">Projects</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {projects.map((proj: Project) => (
                <li key={proj.id} className="text-center">
                  <img src={`/images/projects/${proj.filename}`} alt={proj.alt} className="w-full h-32 object-cover rounded" />
                  <p className="mt-2 text-sm text-gray-700">{proj.alt}</p>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Services List */}
          <div>
            <h2 className="text-2xl text-black font-bold mb-4">Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((svc: Service) => (
                <li key={svc.id} className="p-4 border rounded-lg shadow">
                  <img src={`/images/services/${svc.image}`} alt={svc.title} className="w-full h-40 object-cover rounded" />
                  <h3 className="mt-2 text-lg text-black font-semibold">{svc.title}</h3>
                  <p className="text-sm text-gray-600">{svc.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }