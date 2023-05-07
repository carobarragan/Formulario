import { db } from "@vercel/postgres";
export async function POST(request: Request) {
  const client = await db.connect();
  const { name, email, message } = await request.json();
  if (name == null || email == null || message == null) {
    return new Response("please provide all fields", { status: 400 });
  }

  try {
    await client.sql` INSERT INTO messages(name,email,message) VALUES (${name},${email},${message})`;
    return new Response("formulario saved", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("internal error", { status: 500 });
  }
}
