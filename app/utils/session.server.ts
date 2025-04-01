import { createCookieSessionStorage, redirect } from "@remix-run/node";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__yuhi_admin",
    secure: process.env.NODE_ENV === "production",
    secrets: [process.env.SESSION_SECRET || "insecure-fallback"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

const SESSION_KEY = "adminId";

export async function createAdminSession(adminId: number, redirectTo: string) {
  const session = await sessionStorage.getSession();
  session.set(SESSION_KEY, adminId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export async function getAdminId(request: Request): Promise<number | null> {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  const adminId = session.get(SESSION_KEY);
  return typeof adminId === "number" ? adminId : null;
}

export async function requireAdminId(request: Request): Promise<number> {
  const adminId = await getAdminId(request);
  if (!adminId) {
    throw redirect("/auth/login");
  }
  return adminId;
}

export async function logout(request: Request) {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
